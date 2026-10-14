import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">

        {/* LOGO */}
        <Link
          href="/"
          className="site-logo"
          aria-label="BizFlow Digital Solutions Home"
        >
          <Image
            src="/images/bizflow-logo.png"
            alt="BizFlow Digital Solutions"
            width={260}
            height={80}
            priority
            className="site-logo-image"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
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

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="nav-cta"
        >
          Start a Project
        </Link>

        {/* MOBILE MENU */}
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>

          <nav aria-label="Mobile navigation">
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

            <Link
              href="/contact"
              className="mobile-nav-cta"
            >
              Start a Project
            </Link>
          </nav>
        </details>

      </div>
    </header>
  );
}