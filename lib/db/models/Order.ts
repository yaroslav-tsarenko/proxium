import mongoose, { Schema, type Document, type Types } from "mongoose";

export interface IProxyDetail {
  ip: string;
  port: number;
  username: string;
  password: string;
  protocol: string;
  expiresAt: Date;
}

export interface IOrder extends Document {
  userId: Types.ObjectId;
  productId: Types.ObjectId;
  productName: string;
  productType: string;
  country: string;
  quantity: number;
  totalPrice: number;
  currency: string;
  status: "active" | "expired" | "cancelled";
  proxyDetails: IProxyDetail[];
  createdAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "ProxyProduct", required: true },
    productName: { type: String, required: true },
    productType: { type: String, required: true },
    country: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, enum: ["active", "expired", "cancelled"], default: "active" },
    proxyDetails: [
      {
        ip: String,
        port: Number,
        username: String,
        password: String,
        protocol: { type: String, default: "HTTP" },
        expiresAt: Date,
      },
    ],
  },
  { timestamps: true },
);

export const Order = mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
