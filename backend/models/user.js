import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true}, 
    profilePic: { type: String, default: "" }, 
    bio: { type: String, maxlength: 200 },
    github: { type: String, default: "" },
    leetcode: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    queries: [{ type: mongoose.Schema.Types.ObjectId, ref: "Query" }],
    blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    joinedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const user = mongoose.model('user' , userSchema);
module.exports = {user};
