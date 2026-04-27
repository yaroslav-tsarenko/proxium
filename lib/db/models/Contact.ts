import mongoose, { Schema, type Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  company?: string;
  proxyType?: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    proxyType: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Contact =
  mongoose.models.Contact ||
  mongoose.model<IContact>("Contact", ContactSchema);
