export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 text-xl">✦</span>
          <span className="text-white font-semibold">Jericho Travels</span>
        </div>
        <p className="text-stone-500 text-sm text-center">
          Documenting the world, one place at a time.
        </p>
        <p className="text-stone-600 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
