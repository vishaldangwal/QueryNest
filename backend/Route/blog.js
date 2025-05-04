import express from 'express';
import Blog from '../models/blog.js';
import authenticateToken from '../Middlewares/auth.js';

const blogRouter = express.Router();

// Create a new blog
blogRouter.post('/', authenticateToken, async (req, res) => {
  try {
    const { title, content, tags, image, category } = req.body;

    // Validate the category
    const validCategories = ['development', 'design', 'performance', 'general'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ message: 'Invalid category' });
    }

    const newBlog = new Blog({
      title,
      content,
      author: req.user.id,
      tags,
      image,
      category // Add category
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// Get all blogs
blogRouter.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate('author', 'username email') 
      .sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// Get a specific blog by ID
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

// Like or unlike a blog
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

// Add a comment to a blog
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

// Delete a blog
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