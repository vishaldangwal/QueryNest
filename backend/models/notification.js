import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const notificationSchema = new Schema(
  {
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ["query", "blog", "collaboration"], required: true },
    link: { type: String }, 
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const notification = mongoose.model("notification" , notificationSchema);
export default notification;
