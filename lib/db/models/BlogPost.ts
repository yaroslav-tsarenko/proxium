import mongoose, { Schema, type Document } from "mongoose";

export interface IBlogPost extends Document {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readTime: string;
  published: boolean;
  publishedAt: Date;
  createdAt: Date;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, default: "Proxium Team" },
    readTime: { type: String },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

export const BlogPost =
  mongoose.models.BlogPost ||
  mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);
