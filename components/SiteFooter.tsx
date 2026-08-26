import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link
            href="/"
            className="brand footer-logo"
          >
            <span className="brand-mark">
              B
            </span>

            <span className="brand-text">
              <strong>
                {siteConfig.name}
              </strong>

              <small>
                Digital Solutions
              </small>
            </span>
          </Link>

          <p>
            {siteConfig.description}
          </p>
        </div>

        <div className="footer-column">
          <strong>Company</strong>

          <Link href="/about">
            About
          </Link>

          <Link href="/services">
            Services
          </Link>

          <Link href="/products">
            Products
          </Link>

          <Link href="/contact">
            Contact
          </Link>
        </div>

        <div className="footer-column">
          <strong>Services</strong>

          <Link href="/services">
            Web Development
          </Link>

          <Link href="/services">
            Software Development
          </Link>

          <Link href="/services">
            SaaS Development
          </Link>

          <Link href="/services">
            Business Automation
          </Link>
        </div>

        <div className="footer-column">
          <strong>Connect</strong>

          <a
            href={`mailto:${siteConfig.email}`}
          >
            Email
          </a>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()}{" "}
          {siteConfig.fullName}. All rights
          reserved.
        </p>

        <p>
          {siteConfig.tagline}
        </p>
      </div>
    </footer>
  );
}