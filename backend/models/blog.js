import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: String }], 
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    image: { type: String, default: "" }, 
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const blog = mongoose.model("blog" , blogSchema);
module.exports = {blog};
