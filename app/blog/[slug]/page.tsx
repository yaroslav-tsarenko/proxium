import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { posts, getPostBySlug, categoryColors } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found — Proxium Blog" };
  }

  return {
    title: `${post.title} — Proxium Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const Icon = post.icon;

  return (
    <article className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-zinc-950">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-500 text-sm hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                categoryColors[post.category] ?? categoryColors.Guide
              }`}
            >
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-zinc-500 text-xs">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-zinc-50 text-3xl lg:text-4xl font-bold tracking-tight mt-5 leading-tight">
            {post.title}
          </h1>

          <div
            className={`relative flex items-center justify-center h-56 lg:h-72 mt-8 rounded-2xl border border-zinc-800 bg-gradient-to-br ${post.gradient}`}
          >
            <Icon className="w-16 h-16 text-zinc-50/80" strokeWidth={1.25} />
          </div>

          <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-zinc-800">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
