import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="page-shell nav-inner" aria-label="Main navigation">
        <Link href="/" className="wordmark"><span className="wordmark-mark" aria-hidden="true">✳</span><span>JERICHO<span className="wordmark-light"> / TRAVELS</span></span></Link>
        <div className="nav-links"><Link href="/">Home</Link><Link href="/#stories">Journal</Link></div>
        <span className="nav-edition">NOTES FROM NEAR & FAR</span>
      </nav>
    </header>
  );
}
