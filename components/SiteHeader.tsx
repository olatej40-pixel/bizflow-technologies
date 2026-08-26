import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Link href="/" className="brand">
          <span className="brand-mark">B</span>

          <span className="brand-text">
            <strong>BizFlow</strong>
            <small>Digital Solutions</small>
          </span>
        </Link>

        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >
          <Link href="/">
            Home
          </Link>

          <Link href="/services">
            Services
          </Link>

          <Link href="/#solutions">
            Solutions
          </Link>

          <Link href="/products">
            Products
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="nav-cta"
        >
          Start a Project
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span></span>
            <span></span>
            <span></span>
          </summary>

          <nav>
            <Link href="/">
              Home
            </Link>

            <Link href="/services">
              Services
            </Link>

            <Link href="/#solutions">
              Solutions
            </Link>

            <Link href="/products">
              Products
            </Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/contact">
              Contact
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}