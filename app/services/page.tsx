import type { Metadata } from "next";
import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Services | BizFlow Technologies",

  description:
    "Explore BizFlow Technologies services including website development, custom software, web applications, SaaS development, business automation, customization and technical support.",
};

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Professional, responsive and high-performing websites designed to strengthen your brand and support business growth.",
    features: [
      "Business websites",
      "Corporate websites",
      "Landing pages",
      "E-commerce websites",
      "Responsive design",
      "SEO-ready structure",
    ],
  },
  {
    number: "02",
    title: "Custom Software Development",
    description:
      "Custom-built software designed around your actual business workflows and operational challenges.",
    features: [
      "Inventory systems",
      "Management platforms",
      "Internal business tools",
      "Workflow systems",
      "Reporting solutions",
      "Custom dashboards",
    ],
  },
  {
    number: "03",
    title: "Web Application Development",
    description:
      "Secure and scalable web applications for employees, customers and business partners.",
    features: [
      "Customer portals",
      "Admin dashboards",
      "Booking systems",
      "Order platforms",
      "Business portals",
      "Cloud applications",
    ],
  },
  {
    number: "04",
    title: "SaaS Development",
    description:
      "Subscription-based software products built for businesses and entrepreneurs.",
    features: [
      "Multi-user platforms",
      "User authentication",
      "Subscription plans",
      "Payment integration",
      "Customer dashboards",
      "SaaS architecture",
    ],
  },
  {
    number: "05",
    title: "Business Automation",
    description:
      "Digital systems that reduce repetitive work and improve operational efficiency.",
    features: [
      "Workflow automation",
      "Approval processes",
      "Notifications",
      "Automated reporting",
      "Digital records",
      "Process optimization",
    ],
  },
  {
    number: "06",
    title: "Software Customization",
    description:
      "Improve, extend or redesign an existing website, application or software system.",
    features: [
      "Feature development",
      "UI improvements",
      "System upgrades",
      "Integrations",
      "Performance improvements",
      "Bug fixing",
    ],
  },
  {
    number: "07",
    title: "Maintenance & Support",
    description:
      "Ongoing technical support that keeps your digital systems reliable and up to date.",
    features: [
      "Software maintenance",
      "Website updates",
      "Technical support",
      "Issue resolution",
      "Performance monitoring",
      "Feature improvements",
    ],
  },
  {
    number: "08",
    title: "Technology Consulting",
    description:
      "Practical guidance for businesses that want to modernize operations or launch digital products.",
    features: [
      "Digital strategy",
      "Solution planning",
      "Software recommendations",
      "Process assessment",
      "Product planning",
      "Technical consultation",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, users, problem and expected outcome.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define the solution, features and development roadmap.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We design, build, test and refine your solution.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deploy your solution and prepare it for real-world use.",
  },
  {
    number: "05",
    title: "Support & Growth",
    description:
      "We maintain and improve the solution as your business grows.",
  },
];

const businessBenefits = [
  {
    number: "01",
    title: "Improve Efficiency",
    description:
      "Automate repetitive activities and provide your team with better tools.",
  },
  {
    number: "02",
    title: "Reduce Manual Work",
    description:
      "Replace paperwork and disconnected processes with centralized systems.",
  },
  {
    number: "03",
    title: "Create New Revenue",
    description:
      "Launch websites and SaaS products that create new business opportunities.",
  },
  {
    number: "04",
    title: "Improve Customer Experience",
    description:
      "Make it easier for customers to order, book and interact with your business.",
  },
  {
    number: "05",
    title: "Gain Better Visibility",
    description:
      "Use dashboards and reports to understand business performance.",
  },
  {
    number: "06",
    title: "Scale With Confidence",
    description:
      "Build systems that can evolve as your business grows.",
  },
];

const solutionTypes = [
  "Inventory Management Systems",
  "Booking & Appointment Platforms",
  "Order Management Systems",
  "Business Process Automation",
  "Customer Management Systems",
  "Repair & Service Management",
  "E-commerce Solutions",
  "Custom Business Platforms",
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="inner-hero">
        <div className="container inner-hero-content">
          <span className="section-label light-label">
            Our Services
          </span>

          <h1>
            Technology solutions designed to
            <span>
              {" "}
              move your business forward.
            </span>
          </h1>

          <p>
            From professional websites to custom
            business software and SaaS platforms,
            BizFlow Technologies transforms ideas
            and operational challenges into
            practical digital solutions.
          </p>

          <div className="hero-actions">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Discuss Your Project
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

      <section className="section services-page-section">
        <div className="container">
          <div className="services-page-heading">
            <span className="section-label">
              What We Can Build
            </span>

            <h2>
              From your first idea to launch and
              ongoing support.
            </h2>

            <p>
              Tell us your business challenge and
              we&apos;ll help determine the right
              digital solution.
            </p>
          </div>

          <div className="detailed-services-grid">
            {services.map((service) => (
              <article
                className="detailed-service-card"
                key={service.number}
              >
                <div className="detailed-service-top">
                  <span>
                    {service.number}
                  </span>

                  <i aria-hidden="true">
                    ↗
                  </i>
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <ul>
                  {service.features.map(
                    (feature) => (
                      <li key={feature}>
                        <span>✓</span>
                        {feature}
                      </li>
                    )
                  )}
                </ul>

                <Link href="/contact">
                  Request this service
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process-section">
        <div className="container">
          <div className="service-process-heading">
            <span className="section-label light-label">
              How We Work
            </span>

            <h2>
              A clear process from idea to launch.
            </h2>
          </div>

          <div className="service-process-grid">
            {processSteps.map((step) => (
              <div key={step.number}>
                <span>
                  {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">
                Built Around Your Business
              </span>

              <h2>
                Technology should make your
                business easier to run.
              </h2>
            </div>

            <p>
              We focus on practical solutions that
              improve operations and support
              sustainable business growth.
            </p>
          </div>

          <div className="services-grid">
            {businessBenefits.map(
              (benefit) => (
                <article
                  className="service-card"
                  key={benefit.number}
                >
                  <span className="service-number">
                    {benefit.number}
                  </span>

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container solutions-grid">
          <div className="solutions-content">
            <span className="section-label light-label">
              Solutions We Build
            </span>

            <h2>
              Digital systems for
              <span>
                {" "}
                real operational challenges.
              </span>
            </h2>

            <p>
              From simple business tools to
              complete SaaS platforms, BizFlow
              develops technology around how your
              business operates.
            </p>

            <Link
              href="/contact"
              className="btn btn-light"
            >
              Discuss Your Idea
              <span>→</span>
            </Link>
          </div>

          <div className="solutions-list">
            {solutionTypes.map(
              (solution, index) => (
                <div
                  className="solution-item"
                  key={solution}
                >
                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <strong>
                    {solution}
                  </strong>

                  <i>↗</i>
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
                Need Something Custom?
              </span>

              <h2>
                Tell us the problem. We&apos;ll
                help build the solution.
              </h2>

              <p>
                Explain your challenge, workflow
                or idea and we&apos;ll help
                determine the right digital
                solution.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn btn-white"
            >
              Start Your Project
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}