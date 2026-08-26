import type { Metadata } from "next";
import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About",

  description:
    "Learn about BizFlow Technologies, our mission, development approach and commitment to building useful digital solutions.",
};

const values = [
  {
    number: "01",
    title: "Solve Real Problems",
    description:
      "We focus on technology that addresses practical business challenges.",
  },
  {
    number: "02",
    title: "Keep It Practical",
    description:
      "Our solutions are designed to be understandable, useful and easy to adopt.",
  },
  {
    number: "03",
    title: "Build for Growth",
    description:
      "We structure products so they can evolve as requirements grow.",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "We support improvements, customization and future development.",
  },
];

const capabilities = [
  "Professional Websites",
  "Custom Business Software",
  "Web Applications",
  "SaaS Platforms",
  "Business Automation",
  "Software Customization",
  "System Maintenance",
  "Technology Consulting",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the business, users and problem that needs to be solved.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the solution, priorities and development direction.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design, develop, test and refine the solution.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "The finished product is deployed and prepared for real users.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "We continue supporting the product as needs evolve.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="inner-hero about-page-hero">
        <div className="container inner-hero-content">
          <span className="section-label light-label">
            About BizFlow
          </span>

          <h1>
            We build technology around
            <span>
              {" "}
              real business needs.
            </span>
          </h1>

          <p>
            BizFlow Technologies is focused on
            building professional websites,
            custom software, web applications,
            SaaS products and business automation
            systems that help businesses operate
            more effectively.
          </p>

          <div className="hero-actions">
            <Link
              href="/services"
              className="btn btn-primary"
            >
              Explore Our Services
              <span>→</span>
            </Link>

            <Link
              href="/products"
              className="btn inner-secondary-btn"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="container about-story-grid">
          <div>
            <span className="section-label">
              Who We Are
            </span>

            <h2>
              Technology should help businesses
              work smarter.
            </h2>
          </div>

          <div className="about-story-copy">
            <p>
              BizFlow was built around a simple
              idea: software should solve
              problems, improve processes and
              create opportunities.
            </p>

            <p>
              We work with businesses that need
              professional digital solutions,
              whether that means launching a
              website, replacing manual processes,
              developing custom systems or
              creating software products.
            </p>

            <p>
              Alongside client projects, BizFlow
              develops its own software and SaaS
              products, creating a growing
              portfolio of practical digital tools.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="container about-mission-grid">
          <div className="about-mission-card">
            <span>
              Our Mission
            </span>

            <h2>
              Make useful technology more
              accessible to businesses.
            </h2>

            <p>
              We help businesses adopt practical
              digital systems that improve
              efficiency, customer experience and
              long-term growth.
            </p>
          </div>

          <div className="about-mission-card">
            <span>
              Our Vision
            </span>

            <h2>
              Build digital products that create
              lasting business value.
            </h2>

            <p>
              We aim to build a strong portfolio
              of software products and custom
              solutions serving businesses locally
              and internationally.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">
                What We Build
              </span>

              <h2>
                A growing digital solutions
                company.
              </h2>
            </div>

            <p>
              BizFlow combines website
              development, software engineering
              and business process thinking to
              create practical solutions.
            </p>
          </div>

          <div className="about-capabilities-grid">
            {capabilities.map(
              (item, index) => (
                <div key={item}>
                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <strong>
                    {item}
                  </strong>

                  <i>↗</i>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="container">
          <div className="about-values-heading">
            <span className="section-label light-label">
              Our Principles
            </span>

            <h2>
              How we think about building digital
              solutions.
            </h2>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article key={value.number}>
                <span>
                  {value.number}
                </span>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-process-section">
        <div className="container">
          <div className="services-page-heading">
            <span className="section-label">
              Our Development Approach
            </span>

            <h2>
              Clear thinking before complicated
              technology.
            </h2>

            <p>
              We understand the challenge first,
              then choose the appropriate
              technology and development approach.
            </p>
          </div>

          <div className="about-process-list">
            {process.map((step) => (
              <div key={step.number}>
                <span>
                  {step.number}
                </span>

                <div>
                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container solutions-grid">
          <div className="solutions-content">
            <span className="section-label light-label">
              Built From Nigeria
            </span>

            <h2>
              Local understanding.
              <span>
                {" "}
                Global digital standards.
              </span>
            </h2>

            <p>
              BizFlow Technologies is positioned
              to serve businesses in Nigeria while
              creating digital solutions suitable
              for users anywhere.
            </p>

            <Link
              href="/contact"
              className="btn btn-light"
            >
              Work With BizFlow
              <span>→</span>
            </Link>
          </div>

          <div className="about-global-panel">
            {[
              [
                "01",
                "Business Focus",
                "Solutions are designed around real operational requirements.",
              ],
              [
                "02",
                "Modern Technology",
                "We use modern development tools and cloud platforms.",
              ],
              [
                "03",
                "Flexible Development",
                "Projects can start simple and expand as requirements evolve.",
              ],
              [
                "04",
                "Product Mindset",
                "We build with usability and long-term growth in mind.",
              ],
            ].map(
              ([number, title, text]) => (
                <div key={number}>
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

      <section className="cta-section services-cta">
        <div className="container">
          <div className="cta-card">
            <div>
              <span className="section-label light-label">
                Build With BizFlow
              </span>

              <h2>
                Have a business problem or
                digital idea?
              </h2>

              <p>
                Tell us what you want to improve,
                automate or build.
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