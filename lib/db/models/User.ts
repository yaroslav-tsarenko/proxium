import mongoose, { Schema, type Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  passwordHash: string;
  name: string;
  surname: string;
  phone: string;
  dateOfBirth: Date;
  address: {
    street: string;
    city: string;
    country: string;
    postCode: string;
  };
  balance: number;
  currency: "USD" | "EUR" | "GBP";
  agreedToTerms: boolean;
  agreedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    dateOfBirth: { type: Date, required: true },
    address: {
      street: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      country: { type: String, required: true, trim: true },
      postCode: { type: String, required: true, trim: true },
    },
    balance: { type: Number, default: 0 },
    currency: { type: String, enum: ["USD", "EUR", "GBP"], default: "USD" },
    agreedToTerms: { type: Boolean, required: true },
    agreedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
