import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <main>
      <SiteHeader />

      <section className="not-found-section">
        <div className="container not-found-content">
          <span className="not-found-number">
            404
          </span>

          <span className="section-label">
            Page Not Found
          </span>

          <h1>
            The page you&apos;re looking for
            doesn&apos;t exist.
          </h1>

          <p>
            The link may be incorrect, the page
            may have moved or the content may no
            longer be available.
          </p>

          <div className="hero-actions not-found-actions">
            <Link
              href="/"
              className="btn btn-primary"
            >
              Return Home
              <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="btn btn-secondary"
            >
              Contact BizFlow
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}