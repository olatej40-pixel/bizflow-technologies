import type { Metadata } from "next";
import Link from "next/link";

import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import { siteConfig } from "@/lib/site";


/* ==========================================
   HOMEPAGE SEO METADATA
========================================== */

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};


const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive and high-performing websites designed to strengthen your online presence and convert visitors into customers.",
  },
  {
    number: "02",
    title: "Custom Software",
    description:
      "Purpose-built software solutions designed around your business processes, challenges and growth objectives.",
  },
  {
    number: "03",
    title: "Web Applications",
    description:
      "Powerful browser-based applications including dashboards, portals, management systems and internal business tools.",
  },
  {
    number: "04",
    title: "SaaS Development",
    description:
      "Scalable subscription-based software products with authentication, payments, dashboards and customer management.",
  },
  {
    number: "05",
    title: "Customization",
    description:
      "Improve, redesign or extend existing websites, applications and software to better fit your requirements.",
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, updates, troubleshooting and technical support for your digital systems.",
  },
];


const solutions = [
  "Inventory Management",
  "Booking & Appointment Systems",
  "Order Management",
  "Business Process Automation",
  "Repair Management Systems",
  "Customer Management",
  "E-commerce Solutions",
  "Custom Business Portals",
];


const projects = [
  {
    category: "Commerce / SaaS",
    title: "WhatsOrder",
    description:
      "A commerce platform that allows customers to select products and send completed orders directly through WhatsApp.",
    status: "Live Product",
  },
  {
    category: "Booking / SaaS",
    title: "BookFlow",
    description:
      "A modern booking platform for service businesses to manage appointments, customers, staff and availability.",
    status: "In Development",
  },
  {
    category: "Business Operations",
    title: "Custom Business Systems",
    description:
      "Tailored inventory, workflow, reporting and operational systems designed around real business requirements.",
    status: "Custom Solution",
  },
];


export default function Home() {
  return (
    <main>
      <SiteHeader />


      {/* ==========================================
          HERO
      ========================================== */}

      <section
        id="home"
        className="hero"
      >
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container hero-grid">
          <div className="hero-content">

            <div className="eyebrow">
              <span></span>
              Software • Web • Digital Solutions
            </div>

            <h1>
              We build digital products that
              <span>
                {" "}
                solve real business problems.
              </span>
            </h1>

            <p className="hero-description">
              We design and develop professional
              websites, custom software, web
              applications and SaaS products that
              help businesses automate operations,
              improve efficiency and create new
              revenue opportunities.
            </p>

            <div className="hero-actions">

              <Link
                href="/contact"
                className="btn btn-primary"
              >
                Start Your Project
                <span>→</span>
              </Link>

              <Link
                href="/products"
                className="btn btn-secondary"
              >
                Explore Our Products
              </Link>

            </div>

            <div className="hero-trust">

              <div>
                <strong>Web</strong>
                <span>Development</span>
              </div>

              <div>
                <strong>Software</strong>
                <span>Solutions</span>
              </div>

              <div>
                <strong>SaaS</strong>
                <span>Products</span>
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="dashboard-card">

              <div className="dashboard-top">

                <div className="dashboard-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="dashboard-status">
                  <i></i>
                  Live System
                </span>

              </div>


              <div className="dashboard-body">

                <aside className="mock-sidebar">
                  <div className="mock-logo"></div>
                  <div className="mock-nav active"></div>
                  <div className="mock-nav"></div>
                  <div className="mock-nav"></div>
                  <div className="mock-nav small"></div>
                </aside>


                <div className="mock-content">

                  <div className="mock-heading">

                    <div>
                      <span></span>
                      <span></span>
                    </div>

                    <button
                      type="button"
                      aria-label="Dashboard action"
                    ></button>

                  </div>


                  <div className="mock-stats">

                    <div>
                      <small>Websites</small>
                      <strong>Build</strong>
                      <span>Responsive</span>
                    </div>

                    <div>
                      <small>Software</small>
                      <strong>Custom</strong>
                      <span>Scalable</span>
                    </div>

                    <div>
                      <small>Solutions</small>
                      <strong>SaaS</strong>
                      <span>Modern</span>
                    </div>

                  </div>


                  <div className="mock-chart">

                    <div className="chart-label">

                      <span>
                        Digital growth
                      </span>

                      <strong>
                        Active
                      </strong>

                    </div>

                    <div className="bars">
                      <i style={{ height: "30%" }}></i>
                      <i style={{ height: "45%" }}></i>
                      <i style={{ height: "38%" }}></i>
                      <i style={{ height: "58%" }}></i>
                      <i style={{ height: "52%" }}></i>
                      <i style={{ height: "72%" }}></i>
                      <i style={{ height: "65%" }}></i>
                      <i style={{ height: "88%" }}></i>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            <div className="floating-card floating-card-one">

              <span>✓</span>

              <div>

                <strong>
                  Custom Solutions
                </strong>

                <small>
                  Built for your business
                </small>

              </div>

            </div>


            <div className="floating-card floating-card-two">

              <span>↗</span>

              <div>

                <strong>
                  Scalable
                </strong>

                <small>
                  Ready to grow
                </small>

              </div>

            </div>

          </div>

        </div>
      </section>



      {/* ==========================================
          SERVICES
      ========================================== */}

      <section
        id="services"
        className="section"
      >
        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-label">
                What We Do
              </span>

              <h2>
                Technology services built around
                your goals.
              </h2>

            </div>

            <p>
              From your first idea to deployment
              and ongoing support, we create
              practical digital solutions that
              help businesses work smarter.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service) => (

              <article
                className="service-card"
                key={service.number}
              >

                <span className="service-number">
                  {service.number}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <Link href="/services">
                  Learn more
                  <span>→</span>
                </Link>

              </article>

            ))}

          </div>

        </div>
      </section>



      {/* ==========================================
          SOLUTIONS
      ========================================== */}

      <section
        id="solutions"
        className="solutions-section"
      >
        <div className="container solutions-grid">

          <div className="solutions-content">

            <span className="section-label light-label">
              Business Solutions
            </span>

            <h2>
              Turn business challenges into
              <span>
                {" "}
                efficient digital systems.
              </span>
            </h2>

            <p>
              Every organization works differently.
              Instead of forcing your operations
              into generic software, we build
              technology around how your business
              actually works.
            </p>

            <Link
              href="/contact"
              className="btn btn-light"
            >
              Discuss Your Challenge
              <span>→</span>
            </Link>

          </div>


          <div className="solutions-list">

            {solutions.map(
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



      {/* ==========================================
          PRODUCTS
      ========================================== */}

      <section
        id="products"
        className="section products-section"
      >
        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-label">
                Products & Projects
              </span>

              <h2>
                Solutions we build, launch and
                grow.
              </h2>

            </div>

            <p>
              Our products demonstrate how
              technology can simplify everyday
              business operations and create
              scalable digital opportunities.
            </p>

          </div>


          <div className="projects-grid">

            {projects.map(
              (project, index) => (

                <article
                  className="project-card"
                  key={project.title}
                >

                  <div
                    className={`project-visual visual-${
                      index + 1
                    }`}
                  >

                    <div className="project-window">

                      <div className="project-window-top">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="project-window-body">

                        <div className="project-mini-sidebar"></div>

                        <div className="project-mini-content">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>

                      </div>

                    </div>


                    <span className="project-badge">
                      {project.status}
                    </span>

                  </div>


                  <div className="project-info">

                    <span>
                      {project.category}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <Link href="/products">
                      View solution
                      <span>→</span>
                    </Link>

                  </div>

                </article>

              )
            )}

          </div>

        </div>
      </section>



      {/* ==========================================
          ABOUT
      ========================================== */}

      <section
        id="about"
        className="section about-section"
      >
        <div className="container about-grid">

          <div className="about-content">

            <span className="section-label">
              Why Work With Us
            </span>

            <h2>
              We don&apos;t just build software.
              <span>
                {" "}
                We build solutions.
              </span>
            </h2>

            <p>
              Technology should solve a problem,
              simplify a process or create an
              opportunity. That principle guides
              every website, application and
              software product we develop.
            </p>


            <div className="about-points">

              <div>

                <span>✓</span>

                <div>

                  <strong>
                    Business-focused development
                  </strong>

                  <p>
                    We begin with your problem and
                    objectives before selecting the
                    technology.
                  </p>

                </div>

              </div>


              <div>

                <span>✓</span>

                <div>

                  <strong>
                    Built for growth
                  </strong>

                  <p>
                    Solutions are structured to
                    evolve as your requirements and
                    customer base grow.
                  </p>

                </div>

              </div>


              <div>

                <span>✓</span>

                <div>

                  <strong>
                    Long-term support
                  </strong>

                  <p>
                    We can continue improving and
                    maintaining your solution after
                    launch.
                  </p>

                </div>

              </div>

            </div>


            <div className="hero-actions">

              <Link
                href="/about"
                className="btn btn-secondary"
              >
                Learn More About BizFlow
                <span>→</span>
              </Link>

            </div>

          </div>


          <div className="about-panel">

            <span className="about-panel-label">
              Our Approach
            </span>


            {[
              [
                "01",
                "Understand",
                "We understand your business problem and objectives.",
              ],
              [
                "02",
                "Design",
                "We plan the user experience and technical solution.",
              ],
              [
                "03",
                "Build",
                "We develop, test and refine your digital product.",
              ],
              [
                "04",
                "Launch & Grow",
                "We deploy and support future improvements.",
              ],
            ].map(([number, title, text]) => (

              <div
                className="process-step"
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

            ))}

          </div>

        </div>
      </section>



      {/* ==========================================
          CTA
      ========================================== */}

      <section className="cta-section">

        <div className="container">

          <div className="cta-card">

            <div>

              <span className="section-label light-label">
                Have an idea?
              </span>

              <h2>
                Let&apos;s turn it into a working
                digital solution.
              </h2>

              <p>
                Tell us what you want to build or
                the problem you need to solve.
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



      {/* ==========================================
          QUICK CONTACT
      ========================================== */}

      <section
        id="contact"
        className="section contact-section"
      >
        <div className="container contact-grid">

          <div className="contact-content">

            <span className="section-label">
              Contact Us
            </span>

            <h2>
              Ready to build something useful?
            </h2>

            <p>
              Whether you need a website, custom
              software, business automation or a
              new SaaS product, send us your idea
              and let&apos;s discuss the solution.
            </p>


            <div className="contact-options">

              <a
                href={`mailto:${siteConfig.email}`}
              >

                <span>@</span>

                <div>

                  <small>
                    Email us
                  </small>

                  <strong>
                    {siteConfig.email}
                  </strong>

                </div>

              </a>


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
                    Chat with us
                  </strong>

                </div>

              </a>

            </div>

          </div>


          <ProjectInquiryForm />

        </div>
      </section>


      <SiteFooter />

    </main>
  );
}