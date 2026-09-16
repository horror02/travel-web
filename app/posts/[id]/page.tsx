import Image from "next/image";
import Link from "next/link";
import { getPostById, posts } from "@/data/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) notFound();

  const paragraphs = post.content.trim().split("\n\n");

  return (
    <main>
      {/* Hero image */}
      <section className="relative h-[70vh] min-h-[480px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-stone-900/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-14 w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-14">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-stone-400 text-sm mb-10 pb-10 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">📍</span>
            <span>
              {post.location}, {post.country}
            </span>
          </div>
          <span className="text-stone-700">·</span>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">📅</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl text-stone-300 leading-relaxed mb-10 font-light italic border-l-2 border-amber-400 pl-6">
          {post.description}
        </p>

        {/* Content paragraphs */}
        <div className="space-y-6">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-stone-300 leading-8 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-20 pt-10 border-t border-stone-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            <span>←</span>
            <span>Back to all stories</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
