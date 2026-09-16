import Image from "next/image";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { posts, getFeaturedPosts } from "@/data/posts";

export default function Home() {
  const featured = getFeaturedPosts();
  const heroPost = featured[0];
  const remaining = posts.filter((p) => p.id !== heroPost.id);

  return (
    <main>
      <section className="relative h-screen min-h-[600px] flex items-end">
        <Image
          src={heroPost.image}
          alt={heroPost.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            {heroPost.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
            {heroPost.title}
          </h1>
          <p className="text-stone-300 text-lg max-w-xl leading-relaxed mb-6">
            {heroPost.description}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href={`/posts/${heroPost.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-stone-950 font-semibold rounded-full hover:bg-amber-300 transition-colors"
            >
              Read Story
              <span>→</span>
            </Link>
            <span className="text-stone-400 text-sm">
              {heroPost.location}, {heroPost.country} ·{" "}
              {new Date(heroPost.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-stone-800/60 backdrop-blur-sm border-y border-stone-700/50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-12">
          {[
            { value: "10", label: "Destinations" },
            { value: "8", label: "Countries" },
            { value: "5", label: "Continents" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-stone-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="posts" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-2">
              Travel Journal
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">All Stories</h2>
          </div>
          <p className="text-stone-500 text-sm hidden md:block">
            {posts.length} posts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remaining.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
