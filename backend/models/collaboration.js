import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const collabSchema = new Schema(
  {
    projectTitle: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    techStack: [{ type: String }], 
    applicants: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        message: { type: String, required: true },
        status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const collaboration = mongoose.model('collaboration' , collabSchema);
module.exports = {collaboration};
