import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const querySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    askedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: String }],

    department: { type: String, required: true }, // e.g., 'Computer Science'
    year: { type: String, required: true },       // e.g., '4th Year'
    isAnonymous: { type: Boolean, default: false },

    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    
    responses: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        answer: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Query = mongoose.model('Query', querySchema);
export default Query;
