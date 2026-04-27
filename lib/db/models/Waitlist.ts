import mongoose, { Schema, type Document } from "mongoose";

export interface IWaitlist extends Document {
  email: string;
  source: string;
  createdAt: Date;
}

const WaitlistSchema = new Schema<IWaitlist>(
  {
    email: { type: String, required: true, unique: true },
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

export const Waitlist =
  mongoose.models.Waitlist ||
  mongoose.model<IWaitlist>("Waitlist", WaitlistSchema);
