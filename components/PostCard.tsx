import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";

export default function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <Link href={`/posts/${post.id}`} className="story-card group">
      <div className="story-image">
        <Image src={post.image} alt={post.title} fill className="image-cover" sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" />
        <span className="story-number">{String(index).padStart(2, "0")}</span>
      </div>
      <div className="story-meta"><span>{post.location}, {post.country}</span><span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span></div>
      <div className="story-title-row"><h3>{post.title}</h3><span aria-hidden="true">↗</span></div>
      <p className="story-description">{post.description}</p>
    </Link>
  );
}
