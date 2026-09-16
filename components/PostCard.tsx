import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";

interface PostCardProps {
  post: Post;
  large?: boolean;
}

export default function PostCard({ post, large = false }: PostCardProps) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className={`group block overflow-hidden rounded-2xl bg-stone-800 hover:bg-stone-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 ${
        large ? "col-span-2 row-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${large ? "h-96" : "h-52"}`}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={large ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 backdrop-blur-sm text-amber-300 border border-amber-400/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-stone-400 text-xs mb-2">
          <span>
            {post.location}, {post.country}
          </span>
          <span>·</span>
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <h3
          className={`text-white font-semibold leading-snug mb-2 group-hover:text-amber-400 transition-colors ${
            large ? "text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>
        <p className="text-stone-400 text-sm leading-relaxed line-clamp-2">
          {post.description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-amber-400 text-sm font-medium">
          <span>Read more</span>
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </div>
      </div>
    </Link>
  );
}
