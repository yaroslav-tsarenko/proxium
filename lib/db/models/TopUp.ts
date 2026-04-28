import mongoose, { Schema, type Document, type Types } from "mongoose";

export interface ITopUp extends Document {
  userId: Types.ObjectId;
  amount: number;
  currency: string;
  method: string;
  status: "pending" | "completed" | "failed";
  reference: string;
  createdAt: Date;
}

const TopUpSchema = new Schema<ITopUp>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    method: { type: String, required: true },
    status: { type: String, enum: ["pending", "completed", "failed"], default: "completed" },
    reference: { type: String, required: true },
  },
  { timestamps: true },
);

export const TopUp = mongoose.models.TopUp || mongoose.model<ITopUp>("TopUp", TopUpSchema);
