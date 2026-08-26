"use client";

import {
  useState,
  type FormEvent,
} from "react";

import { siteConfig } from "@/lib/site";

export default function ProjectQuoteForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");

  function submitProject(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const text = `
Hello ${siteConfig.fullName},

I would like to discuss a new project.

CLIENT DETAILS
Name: ${name}
Company: ${company || "Not specified"}
Email: ${email}
Phone: ${phone || "Not specified"}

PROJECT DETAILS
Service: ${service}
Estimated Budget: ${budget || "Not specified"}
Preferred Timeline: ${timeline || "Not specified"}

PROJECT DESCRIPTION
${message}

Please let me know the next steps.

Thank you.
    `.trim();

    const url =
      `${siteConfig.whatsappUrl}?text=${encodeURIComponent(
        text
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form
      className="quote-form"
      onSubmit={submitProject}
    >
      <div className="quote-form-heading">
        <span>
          Project Enquiry
        </span>

        <h2>
          Tell us what you want to build.
        </h2>

        <p>
          Provide some information about your
          project and we&apos;ll use it to
          understand your requirements before
          discussing the next steps.
        </p>
      </div>

      <div className="quote-form-grid">
        <label>
          Full Name *
          <input
            type="text"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </label>

        <label>
          Company / Business
          <input
            type="text"
            value={company}
            onChange={(event) =>
              setCompany(event.target.value)
            }
            placeholder="Business name"
            autoComplete="organization"
          />
        </label>

        <label>
          Email Address *
          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Phone / WhatsApp
          <input
            type="tel"
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value)
            }
            placeholder="+234..."
            autoComplete="tel"
          />
        </label>
      </div>

      <label>
        What would you like us to build? *

        <select
          value={service}
          onChange={(event) =>
            setService(event.target.value)
          }
          required
        >
          <option value="" disabled>
            Select a service
          </option>

          <option value="Website Development">
            Website Development
          </option>

          <option value="Custom Software Development">
            Custom Software Development
          </option>

          <option value="Web Application Development">
            Web Application Development
          </option>

          <option value="SaaS Development">
            SaaS Development
          </option>

          <option value="Business Automation">
            Business Automation
          </option>

          <option value="Software Customization">
            Software Customization
          </option>

          <option value="Maintenance & Support">
            Maintenance & Support
          </option>

          <option value="Technology Consulting">
            Technology Consulting
          </option>

          <option value="Not sure yet">
            Not sure yet
          </option>

          <option value="Other">
            Other
          </option>
        </select>
      </label>

      <div className="quote-form-grid">
        <label>
          Estimated Budget

          <select
            value={budget}
            onChange={(event) =>
              setBudget(event.target.value)
            }
          >
            <option value="">
              Select budget range
            </option>

            <option value="Below ₦100,000">
              Below ₦100,000
            </option>

            <option value="₦100,000 - ₦300,000">
              ₦100,000 - ₦300,000
            </option>

            <option value="₦300,000 - ₦750,000">
              ₦300,000 - ₦750,000
            </option>

            <option value="₦750,000 - ₦1,500,000">
              ₦750,000 - ₦1,500,000
            </option>

            <option value="₦1,500,000 - ₦3,000,000">
              ₦1,500,000 - ₦3,000,000
            </option>

            <option value="Above ₦3,000,000">
              Above ₦3,000,000
            </option>

            <option value="Not sure yet">
              Not sure yet
            </option>
          </select>
        </label>

        <label>
          Preferred Timeline

          <select
            value={timeline}
            onChange={(event) =>
              setTimeline(event.target.value)
            }
          >
            <option value="">
              Select timeline
            </option>

            <option value="As soon as possible">
              As soon as possible
            </option>

            <option value="Within 2 weeks">
              Within 2 weeks
            </option>

            <option value="Within 1 month">
              Within 1 month
            </option>

            <option value="1 - 3 months">
              1 - 3 months
            </option>

            <option value="3+ months">
              3+ months
            </option>

            <option value="Flexible">
              Flexible
            </option>
          </select>
        </label>
      </div>

      <label>
        Tell us about your project *

        <textarea
          rows={7}
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          placeholder="Describe the problem you want to solve, the system you need, important features, your current process or any other useful information..."
          required
        />
      </label>

      <button
        type="submit"
        className="btn btn-primary quote-submit-button"
      >
        Send Project Request
        <span>→</span>
      </button>

      <p className="quote-form-note">
        Your project details will open in
        WhatsApp for you to review before
        sending.
      </p>
    </form>
  );
}