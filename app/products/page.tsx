import type { Metadata } from "next";
import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products | BizFlow Technologies",

  description:
    "Explore software products and digital solutions developed by BizFlow Technologies.",
};

const products = [
  {
    name: "WhatsOrder",
    category: "Commerce / WhatsApp Ordering",
    status: "Live Product",

    description:
      "A simple online storefront that allows businesses to display products while customers select what they want and send completed orders directly through WhatsApp.",

    features: [
      "Online product storefront",
      "WhatsApp order submission",
      "Merchant administration",
      "Product management",
      "Delivery configuration",
      "Store branding",
    ],

    bestFor:
      "Small businesses, retailers, food vendors, fashion stores and merchants that want a simple online ordering solution.",

    href: siteConfig.products.whatsOrder,

    action: "Visit WhatsOrder",

    external: true,

    className: "product-theme-green",
  },
  {
    name: "BookFlow",
    category: "Booking / Appointment SaaS",
    status: "In Development",

    description:
      "A modern appointment and booking platform designed to help service businesses manage customers, bookings, staff, services and availability.",

    features: [
      "Online booking pages",
      "Appointment management",
      "Customer management",
      "Staff management",
      "Availability scheduling",
      "Business dashboard",
    ],

    bestFor:
      "Salons, barbers, consultants, clinics, photographers and other appointment-based businesses.",

    href: "/contact",

    action: "Ask About BookFlow",

    external: false,

    className: "product-theme-purple",
  },
  {
    name: "Custom Business Systems",
    category: "Business Software",
    status: "Custom Solution",

    description:
      "Purpose-built management systems designed around a company's workflows, reporting requirements and operational challenges.",

    features: [
      "Inventory management",
      "Repair management",
      "Workflow automation",
      "Management dashboards",
      "Approval processes",
      "Business reporting",
    ],

    bestFor:
      "Organizations that need software tailored specifically to the way their business operates.",

    href: "/contact",

    action: "Request a Custom System",

    external: false,

    className: "product-theme-blue",
  },
];

const benefits = [
  {
    number: "01",
    title: "Simple to Use",
    description:
      "Products are designed around practical business workflows rather than unnecessary complexity.",
  },
  {
    number: "02",
    title: "Built for Businesses",
    description:
      "Every solution focuses on solving operational problems and improving performance.",
  },
  {
    number: "03",
    title: "Scalable",
    description:
      "Products can continue evolving as customer requirements grow.",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "Products can receive new features and integrations as they mature.",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="inner-hero products-hero">
        <div className="container inner-hero-content">
          <span className="section-label light-label">
            BizFlow Products
          </span>

          <h1>
            Software products built to
            <span>
              {" "}
              simplify everyday business.
            </span>
          </h1>

          <p>
            Alongside custom development
            services, BizFlow develops software
            products designed to solve common
            business problems and create digital
            opportunities.
          </p>

          <div className="hero-actions">
            <a
              href={siteConfig.products.whatsOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Explore WhatsOrder
              <span>↗</span>
            </a>

            <Link
              href="/contact"
              className="btn inner-secondary-btn"
            >
              Discuss a Software Idea
            </Link>
          </div>
        </div>
      </section>

      <section className="section products-page-section">
        <div className="container">
          <div className="products-page-heading">
            <span className="section-label">
              Our Software
            </span>

            <h2>
              Products designed around real
              business needs.
            </h2>

            <p>
              BizFlow builds software that
              simplifies operations, improves
              customer experiences and provides
              practical tools for growth.
            </p>
          </div>

          <div className="products-showcase">
            {products.map(
              (product, index) => (
                <article
                  className="product-showcase-card"
                  key={product.name}
                >
                  <div
                    className={`product-showcase-visual ${product.className}`}
                  >
                    <div className="product-showcase-number">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <div className="software-window">
                      <div className="software-window-header">
                        <div>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <small>
                          {product.name}
                        </small>
                      </div>

                      <div className="software-window-content">
                        <aside>
                          <div></div>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </aside>

                        <section>
                          <div className="software-title-line"></div>

                          <div className="software-stats">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>

                          <div className="software-large-panel"></div>
                        </section>
                      </div>
                    </div>

                    <span className="product-status">
                      {product.status}
                    </span>
                  </div>

                  <div className="product-showcase-content">
                    <span className="product-category">
                      {product.category}
                    </span>

                    <h2>
                      {product.name}
                    </h2>

                    <p className="product-description">
                      {product.description}
                    </p>

                    <div className="product-feature-area">
                      <h3>
                        Key Features
                      </h3>

                      <div className="product-feature-grid">
                        {product.features.map(
                          (feature) => (
                            <div key={feature}>
                              <span>✓</span>
                              {feature}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="product-best-for">
                      <strong>
                        Best for
                      </strong>

                      <p>
                        {product.bestFor}
                      </p>
                    </div>

                    {product.external ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary product-action"
                      >
                        {product.action}
                        <span>↗</span>
                      </a>
                    ) : (
                      <Link
                        href={product.href}
                        className="btn btn-primary product-action"
                      >
                        {product.action}
                        <span>→</span>
                      </Link>
                    )}
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="product-benefits-section">
        <div className="container">
          <div className="product-benefits-heading">
            <span className="section-label light-label">
              Our Product Philosophy
            </span>

            <h2>
              Useful software should solve
              problems, not create more
              complexity.
            </h2>
          </div>

          <div className="product-benefits-grid">
            {benefits.map((benefit) => (
              <div key={benefit.number}>
                <span>
                  {benefit.number}
                </span>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-business-section">
        <div className="container product-business-grid">
          <div>
            <span className="section-label">
              Built to Create Value
            </span>

            <h2>
              Software can become more than a
              project. It can become a business.
            </h2>

            <p>
              BizFlow develops digital products
              that can operate as subscription
              platforms, paid services or
              specialized business tools.
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Discuss a Product Idea
              <span>→</span>
            </Link>
          </div>

          <div className="product-revenue-panel">
            <span className="about-panel-label">
              Product Revenue Models
            </span>

            {[
              [
                "01",
                "Monthly Subscription",
                "Customers pay recurring fees to use a software platform.",
              ],
              [
                "02",
                "Annual Subscription",
                "Businesses receive long-term access through annual plans.",
              ],
              [
                "03",
                "Setup & Customization",
                "Additional charges can apply for onboarding and configuration.",
              ],
              [
                "04",
                "Premium Features",
                "Advanced functionality can be offered through higher plans.",
              ],
            ].map(
              ([number, title, text]) => (
                <div
                  className="product-revenue-row"
                  key={number}
                >
                  <span>
                    {number}
                  </span>

                  <div>
                    <strong>
                      {title}
                    </strong>

                    <p>
                      {text}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="future-products-section">
        <div className="container future-products-content">
          <span className="section-label">
            What&apos;s Next
          </span>

          <h2>
            The BizFlow product portfolio will
            continue growing.
          </h2>

          <p>
            New software products can be added as
            they are developed, tested and
            launched.
          </p>

          <div className="future-product-tags">
            <span>Inventory SaaS</span>
            <span>CRM Systems</span>
            <span>Business Automation</span>
            <span>Repair Management</span>
            <span>Customer Portals</span>
            <span>Industry-specific Apps</span>
          </div>
        </div>
      </section>

      <section className="cta-section services-cta">
        <div className="container">
          <div className="cta-card">
            <div>
              <span className="section-label light-label">
                Have a Software Idea?
              </span>

              <h2>
                Let&apos;s turn your idea into a
                real digital product.
              </h2>

              <p>
                Whether you need software for your
                organization or a product to sell,
                BizFlow can help plan and build it.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn btn-white"
            >
              Start a Conversation
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}