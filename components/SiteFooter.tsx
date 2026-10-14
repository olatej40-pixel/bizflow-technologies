import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Website Development",
  "Custom Software Development",
  "Web Applications",
  "SaaS Product Development",
  "Business Automation",
  "Maintenance & Support",
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="biz-footer">
      <div className="biz-footer-glow biz-footer-glow-one" />
      <div className="biz-footer-glow biz-footer-glow-two" />

      <div className="container biz-footer-main">

        {/* BRAND */}
        <div className="biz-footer-brand">
          <Link
            href="/"
            className="biz-footer-logo"
            aria-label="BizFlow Digital Solutions"
          >
            <Image
              src="/images/bizflow-logo.png"
              alt="BizFlow Digital Solutions"
              width={300}
              height={92}
              className="biz-footer-logo-image"
            />
          </Link>

          <p>
            We design and develop professional websites, custom software,
            web applications and SaaS products that help businesses
            automate operations, improve efficiency and create new
            revenue opportunities.
          </p>

          <div className="biz-footer-status">
            <span />
            Available for new projects
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="biz-footer-column">
          <h3>Quick Links</h3>
          <div className="biz-footer-title-line" />

          <nav aria-label="Footer navigation">
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span className="biz-footer-arrow">›</span>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* SERVICES */}
        <div className="biz-footer-column">
          <h3>Our Services</h3>
          <div className="biz-footer-title-line" />

          <div className="biz-footer-service-list">
            {services.map((service) => (
              <Link key={service} href="/services">
                <span className="biz-footer-arrow">›</span>
                {service}
              </Link>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="biz-footer-column biz-footer-contact">
          <h3>Contact Us</h3>
          <div className="biz-footer-title-line" />

          <div className="biz-footer-contact-item">
            <div className="biz-footer-icon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                />
              </svg>
            </div>

            <div>
              <strong>{siteConfig.location}</strong>
              <span>Serving clients worldwide</span>
            </div>
          </div>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="biz-footer-contact-item"
          >
            <div className="biz-footer-icon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M6.6 2.9 9.1 7 7.6 8.5c.7 1.5 1.7 2.8 3 3.9 1.2 1 2.6 1.8 4.1 2.3l1.4-1.7 4.2 2c.4.2.6.6.5 1-.3 2.2-2.4 4-4.8 4-3.2 0-6.6-1.6-9.4-4.4C3.8 12.8 2.2 9.4 2.2 6.2c0-2.4 1.8-4.5 4-4.8.2 0 .4.1.4.1Z"
                />
              </svg>
            </div>

            <div>
              <strong>+234 805 842 7904</strong>
              <span>Chat with us on WhatsApp</span>
            </div>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="biz-footer-contact-item"
          >
            <div className="biz-footer-icon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm9 7 8-5H4l8 5Zm0 2.3L3 8.7V17h18V8.7l-9 5.6Z"
                />
              </svg>
            </div>

            <div>
              <strong>{siteConfig.email}</strong>
              <span>Send us an enquiry</span>
            </div>
          </a>
        </div>
      </div>

      <div className="container biz-footer-bottom">
        <p>
          © {year} BizFlow Technologies. All rights reserved.
        </p>

        <div>
          <Link href="/services">Services</Link>
          <span />
          <Link href="/products">Products</Link>
          <span />
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}