import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/80 backdrop-blur-md border-b border-stone-700/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-amber-400 text-2xl">✦</span>
          <span className="text-white font-semibold tracking-wide text-lg group-hover:text-amber-400 transition-colors">
            Jericho Travels
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-stone-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <Link href="/#posts" className="hover:text-amber-400 transition-colors">
            Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
