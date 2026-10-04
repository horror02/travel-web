import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div><span className="micro-label">UNTIL THE NEXT JOURNEY</span><p>See you out there<span className="footer-period">.</span></p></div>
        <div className="footer-right"><Link href="/#stories">Back to the journal ↗</Link><span>© {new Date().getFullYear()} Jericho Travels</span></div>
      </div>
    </footer>
  );
}
