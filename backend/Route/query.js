import { Router } from 'express';
import query  from '../models/query.js';  
import authenticateToken from '../Middlewares/auth.js'; 

const queryRouter = Router();

queryRouter.post("/queries", authenticateToken, async (req, res) => {
  const { title, description, tags } = req.body;
  const { id } = req.user;

  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required." });
  }

  try {
    const newQuery = new query({
      title,
      description,
      tags,
      askedBy: id,
    });

    await newQuery.save();

    res.status(201).json({ message: "Query created successfully", query: newQuery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

queryRouter.get("/queries", async (req, res) => {
  try {
    const queries = await query
      .find()
      .populate("askedBy", "username email")
      .exec();

    res.status(200).json({ queries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

queryRouter.get("/queries/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const foundQuery = await query
      .findById(id)
      .populate("askedBy", "username email")
      .exec();

    if (!foundQuery) {
      return res.status(404).json({ message: "Query not found" });
    }

    res.status(200).json({ query: foundQuery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

queryRouter.put("/queries/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { title, description, tags } = req.body;
  const { userId } = req.user; 

  try {
    const foundQuery = await query.findById(id);

    if (!foundQuery) {
      return res.status(404).json({ message: "Query not found" });
    }

    if (foundQuery.askedBy.toString() !== userId) {
      return res.status(403).json({ message: "You are not authorized to update this query" });
    }

    foundQuery.title = title || foundQuery.title;
    foundQuery.description = description || foundQuery.description;
    foundQuery.tags = tags || foundQuery.tags;

    await foundQuery.save();

    res.status(200).json({ message: "Query updated successfully", query: foundQuery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

queryRouter.delete("/queries/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  try {
    const foundQuery = await query.findById(id);

    if (!foundQuery) {
      return res.status(404).json({ message: "Query not found" });
    }

    if (foundQuery.askedBy.toString() !== userId) {
      return res.status(403).json({ message: "You are not authorized to delete this query" });
    }

    await foundQuery.delete();

    res.status(200).json({ message: "Query deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

queryRouter.post("/queries/:id/responses", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { answer } = req.body;
  const { userId } = req.user;

  if (!answer) {
    return res.status(400).json({ message: "Answer is required." });
  }

  try {
    const foundQuery = await query.findById(id);

    if (!foundQuery) {
      return res.status(404).json({ message: "Query not found" });
    }

    const response = {
      user: userId,
      answer,
      createdAt: new Date(),
    };

    foundQuery.responses.push(response);
    await foundQuery.save();

    res.status(201).json({ message: "Response added successfully", query: foundQuery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

queryRouter.post("/queries/:id/upvote", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  try {
    const foundQuery = await query.findById(id);

    if (!foundQuery) {
      return res.status(404).json({ message: "Query not found" });
    }

    if (foundQuery.upvotes.includes(userId)) {
      return res.status(400).json({ message: "You have already upvoted this query" });
    }

    foundQuery.upvotes.push(userId);
    await foundQuery.save();

    res.status(200).json({ message: "Query upvoted successfully", query: foundQuery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default queryRouter;
