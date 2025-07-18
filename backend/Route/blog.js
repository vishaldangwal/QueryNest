import express from 'express';
import Blog from '../models/blog.js';
import authenticateToken from '../Middlewares/auth.js';
import jwt from 'jsonwebtoken';  // JWT for generating tokens

const blogRouter = express.Router();

blogRouter.post('/create', authenticateToken, async (req, res) => {
  try {
    const { title, content, category} = req.body;
    // console.log(req.body);
    // Validate only title, content, and category
    if (!title || !content || !category) {
      return res.status(400).json({ message: 'Title, content, and category are required' });
    }

    // Use Blog.create() to create and save the blog in one step
    const newBlog = await Blog.create({
      title,
      content,
      category,
      author: req.user.id,
    });

    // Generate a new JWT token for the user after blog creation
    const token = jwt.sign({ id: req.user.id, username: req.user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      message: 'Blog created successfully',
      token,
      blog: newBlog
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error });
  }
});
blogRouter.get('/data', authenticateToken, async (req, res) => {
  try {
    const blogs = await Blog.find()  // Filter by author's ID  
    // console.log(blogs);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});


blogRouter.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate('author', 'username email')
      .populate('comments.user', 'username email');
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

blogRouter.post('/:id/like', authenticateToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    const userId = req.user.id;
    const index = blog.likes.indexOf(userId);

    if (index === -1) {
      blog.likes.push(userId); 
    } else {
      blog.likes.splice(index, 1); 
    }

    await blog.save();
    res.status(200).json({ message: 'Like status updated', likes: blog.likes });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

blogRouter.post('/:id/comment', authenticateToken, async (req, res) => {
  try {
    const { text } = req.body;
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    blog.comments.push({ user: req.user.id, text });
    await blog.save();
    res.status(201).json({ message: 'Comment added', comments: blog.comments });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

blogRouter.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    if (blog.author.toString() !== req.user.id)
      return res.status(403).json({ message: 'Unauthorized' });

    await blog.remove();
    res.status(200).json({ message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

export default blogRouter;
