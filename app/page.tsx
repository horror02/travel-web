import Image from "next/image";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { posts, getFeaturedPosts } from "@/data/posts";

export default function Home() {
  const heroPost = getFeaturedPosts()[0] ?? posts[0];
  const remaining = posts.filter((post) => post.id !== heroPost.id);

  return (
    <main>
      <section className="home-hero page-shell" aria-labelledby="home-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A PERSONAL TRAVEL JOURNAL <span className="eyebrow-line" /></div>
          <h1 id="home-title">The places<br />that <em>stay</em><br />with us.</h1>
          <p className="hero-intro">Stories from the road, small moments worth remembering, and a few places I keep coming back to in my mind.</p>
          <Link className="text-link" href="#stories">Explore the journal <span aria-hidden="true">↗</span></Link>
          <div className="hero-side-note">FIELD NOTES <span>·</span> EST. 2026</div>
        </div>
        <Link href={`/posts/${heroPost.id}`} className="hero-feature group" aria-label={`Read ${heroPost.title}`}>
          <div className="hero-image-wrap">
            <Image src={heroPost.image} alt={heroPost.title} fill priority className="image-cover" sizes="(max-width: 800px) 100vw, 55vw" />
            <span className="image-corner">01 / FEATURED STORY</span>
          </div>
          <div className="hero-caption">
            <div>
              <span className="micro-label">{heroPost.location}, {heroPost.country}</span>
              <h2>{heroPost.title}</h2>
            </div>
            <span className="round-arrow" aria-hidden="true">↗</span>
          </div>
        </Link>
      </section>

      <section className="journal-note" aria-label="About this journal">
        <div className="page-shell journal-note-inner">
          <span className="note-symbol" aria-hidden="true">✳</span>
          <p>For the long way around, the unplanned stops, and everything in between.</p>
          <span className="note-count">{String(posts.length).padStart(2, "0")} STORIES & COUNTING</span>
        </div>
      </section>

      <section id="stories" className="stories-section page-shell">
        <div className="section-heading">
          <div>
            <p className="micro-label">THE JOURNAL / 001—{String(posts.length).padStart(3, "0")}</p>
            <h2>Stories from <em>elsewhere.</em></h2>
          </div>
          <p>Places, people, and the moments<br />that made me pause.</p>
        </div>
        <div className="story-grid">
          {remaining.map((post, index) => <PostCard key={post.id} post={post} index={index + 2} />)}
        </div>
      </section>
    </main>
  );
}
