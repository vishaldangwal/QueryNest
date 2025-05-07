import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';
import dotenv from 'dotenv';
import authenticateToken from '../Middlewares/auth.js'
dotenv.config();

const userRouter = Router();

userRouter.post('/signup', async (req, res) => {
  const { username, email, password, bio, profilePic, github, leetcode, linkedin } = req.body;

  const existingUser = await user.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return res.status(400).json({ message: 'Username or email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new user({
      username,
      email,
      password: hashedPassword,
      bio,
      profilePic,
      github,
      leetcode,
      linkedin,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id, username: newUser.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    // Find the user by email
    const foundUser = await user.findOne({ email: usernameOrEmail });


    if (!foundUser) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: foundUser._id, username: foundUser.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Respond with token and user info (optional)
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: foundUser._id,
        username: foundUser.username,
        email: foundUser.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

userRouter.get('/profile', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; // extract user ID from JWT payload

    const foundUser = await user.findById(userId).select('-password'); // exclude password from response
    if (!foundUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user: foundUser });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

userRouter.put('/update', authenticateToken, async (req, res) => {
  const { userId, username, bio, profilePic, github, leetcode, linkedin } = req.body;

  const foundUser = await user.findById(userId);
  if (!foundUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  try {
    foundUser.username = username || foundUser.username;
    foundUser.bio = bio || foundUser.bio;
    foundUser.profilePic = profilePic || foundUser.profilePic;
    foundUser.github = github || foundUser.github;
    foundUser.leetcode = leetcode || foundUser.leetcode;
    foundUser.linkedin = linkedin || foundUser.linkedin;
    console.log(foundUser);
    await foundUser.save();

    res.status(200).json({ message: 'User updated successfully', user: foundUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default userRouter;
