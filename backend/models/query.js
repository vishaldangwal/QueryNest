import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const querySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    askedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: String }], 
    responses: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        answer: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const query = mongoose.model('query' , querySchema);
module.exports = {query};
