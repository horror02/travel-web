import Link from "next/link";
import { getPostById, posts } from "@/data/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) notFound();

  const paragraphs = post.content.trim().split("\n\n");
  const date = new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <main>
      <div className="article-hero page-shell">
        <Link href="/#stories" className="article-back">← Back to the journal</Link>
        <div className="article-heading">
          <span className="micro-label">{post.location}, {post.country} / {date}</span>
          <h1 className="article-title">{post.title}</h1>
          <p className="article-deck">{post.description}</p>
        </div>
        <div className="article-image">
          <img src={post.image} alt={post.title} fetchPriority="high" />
        </div>
      </div>
      <article className="article-body page-shell">
        <aside className="article-aside" aria-label="Story details">
          <div>Location<strong>{post.location}, {post.country}</strong></div>
          <div>Date<strong>{date}</strong></div>
        </aside>
        <div className="article-content">
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph.trim()}</p>)}
          <div className="article-end"><span aria-hidden="true">✳</span><Link href="/#stories">More stories from the journal ↗</Link></div>
        </div>
      </article>
    </main>
  );
}
