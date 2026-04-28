import mongoose, { Schema, type Document } from "mongoose";

export interface IProxyProduct extends Document {
  name: string;
  type: "datacenter" | "residential" | "rotating" | "dedicated" | "mobile" | "isp";
  country: string;
  countryCode: string;
  pricePerUnit: number;
  unit: string;
  duration: number;
  description: string;
  features: string[];
  inStock: boolean;
  bandwidth: string;
  speed: string;
  protocol: string;
  authentication: string;
  createdAt: Date;
}

const ProxyProductSchema = new Schema<IProxyProduct>(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: ["datacenter", "residential", "rotating", "dedicated", "mobile", "isp"],
    },
    country: { type: String, required: true },
    countryCode: { type: String, required: true },
    pricePerUnit: { type: Number, required: true },
    unit: { type: String, required: true, default: "proxy" },
    duration: { type: Number, required: true, default: 30 },
    description: { type: String, required: true },
    features: [{ type: String }],
    inStock: { type: Boolean, default: true },
    bandwidth: { type: String },
    speed: { type: String },
    protocol: { type: String },
    authentication: { type: String },
  },
  { timestamps: true },
);

export const ProxyProduct =
  mongoose.models.ProxyProduct || mongoose.model<IProxyProduct>("ProxyProduct", ProxyProductSchema);
