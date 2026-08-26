"use client";

import {
  useState,
  type FormEvent,
} from "react";

import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export default function ProjectInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  function submitInquiry(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const text = `
Hello ${siteConfig.fullName},

I would like to discuss a project.

Name: ${name}
Email: ${email}
Service: ${service}
Budget: ${budget || "Not specified"}

Project Details:
${message}

Please let me know the next steps.
    `.trim();

    const whatsappUrl =
      `${siteConfig.whatsappUrl}?text=${encodeURIComponent(
        text
      )}`;

      trackEvent("generate_lead", {
  form_name: "homepage_inquiry_form",
  service,
  budget:
    budget || "not_specified",
});

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={submitInquiry}
    >
      <div className="form-row">
        <label>
          Your Name

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            autoComplete="name"
            required
          />
        </label>

        <label>
          Email Address

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label>
        What do you need?

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

          <option value="Other">
            Other
          </option>
        </select>
      </label>

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
        Tell us about your project

        <textarea
          rows={6}
          placeholder="Describe the problem, idea or software you would like us to build..."
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          required
        />
      </label>

      <button
        type="submit"
        className="btn btn-primary form-button"
      >
        Send Project Request
        <span>→</span>
      </button>

      <p className="form-note">
        Your project request will open
        securely in WhatsApp.
      </p>
    </form>
  );
}