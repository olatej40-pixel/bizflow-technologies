import type { Metadata } from "next";

import ProjectQuoteForm from "@/components/ProjectQuoteForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Contact BizFlow Technologies to discuss website development, custom software, SaaS development, business automation and other digital projects.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Contact | BizFlow Technologies",

    description:
      "Discuss your website, software, SaaS or business automation project with BizFlow Technologies.",

    url:
      "/contact",
  },
};

const projectTypes = [
  "Professional Website",
  "Custom Business Software",
  "Web Application",
  "SaaS Product",
  "Business Automation",
  "Software Customization",
];

const nextSteps = [
  {
    number: "01",
    title: "We Review Your Request",
    description:
      "We review the information you provide and understand the main business requirement.",
  },
  {
    number: "02",
    title: "We Discuss the Project",
    description:
      "We ask any additional questions about your workflow, users and required features.",
  },
  {
    number: "03",
    title: "We Define the Solution",
    description:
      "We determine the suitable approach, scope and development requirements.",
  },
  {
    number: "04",
    title: "Development Begins",
    description:
      "Once the requirements and commercial terms are agreed, development begins.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />

      <section className="inner-hero contact-page-hero">
        <div className="container inner-hero-content">
          <span className="section-label light-label">
            Start a Project
          </span>

          <h1>
            Have an idea or problem?
            <span>
              {" "}
              Let&apos;s build the solution.
            </span>
          </h1>

          <p>
            Tell BizFlow Technologies what you
            want to build, improve or automate.
            We&apos;ll help turn your requirements
            into a practical digital solution.
          </p>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          <div className="contact-page-info">
            <span className="section-label">
              Let&apos;s Talk
            </span>

            <h2>
              Your next digital solution can
              start with a simple conversation.
            </h2>

            <p>
              You don&apos;t need a technical
              specification before contacting us.
              Explain what you want to achieve and
              we can help define the right
              approach.
            </p>

            <div className="direct-contact-list">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>W</span>

                <div>
                  <small>
                    WhatsApp
                  </small>

                  <strong>
                    Chat with BizFlow
                  </strong>

                  <p>
                    Fastest way to discuss a
                    project.
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
              >
                <span>@</span>

                <div>
                  <small>
                    Email
                  </small>

                  <strong>
                    {siteConfig.email}
                  </strong>

                  <p>
                    For detailed enquiries and
                    documents.
                  </p>
                </div>
              </a>
            </div>

            <div className="contact-project-types">
              <strong>
                Projects we can discuss
              </strong>

              <div>
                {projectTypes.map((type) => (
                  <span key={type}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ProjectQuoteForm />
        </div>
      </section>

      <section className="contact-next-section">
        <div className="container">
          <div className="contact-next-heading">
            <span className="section-label light-label">
              What Happens Next?
            </span>

            <h2>
              A simple process after you contact
              us.
            </h2>
          </div>

          <div className="contact-next-grid">
            {nextSteps.map((step) => (
              <article key={step.number}>
                <span>
                  {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-faq-section">
        <div className="container contact-faq-grid">
          <div>
            <span className="section-label">
              Common Questions
            </span>

            <h2>
              Before starting your project.
            </h2>
          </div>

          <div className="contact-faq-list">
            <details>
              <summary>
                Do I need to know exactly what
                software I need?
              </summary>

              <p>
                No. Explain the problem, current
                process or desired result and
                BizFlow can help determine the
                appropriate solution.
              </p>
            </details>

            <details>
              <summary>
                Can you customize an existing
                website or software?
              </summary>

              <p>
                Yes. Existing systems can be
                assessed for redesign, additional
                features, integrations,
                performance improvements and
                customization.
              </p>
            </details>

            <details>
              <summary>
                Can BizFlow build software that I
                can sell?
              </summary>

              <p>
                Yes. SaaS platforms and monetized
                software products can include
                subscriptions, customer accounts,
                payments and future upgrades.
              </p>
            </details>

            <details>
              <summary>
                Do you provide maintenance after
                launch?
              </summary>

              <p>
                Yes. Maintenance, technical
                support, updates and ongoing
                development can be included.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <span className="section-label light-label">
                Prefer WhatsApp?
              </span>

              <h2>
                Start a direct conversation with
                BizFlow.
              </h2>

              <p>
                Send us a message and briefly
                explain the project or business
                problem you would like to solve.
              </p>
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              Chat on WhatsApp
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}