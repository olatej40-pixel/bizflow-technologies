"use client";

import {
  useEffect,
  useState,
  type FormEvent,
} from "react";

import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";


/* ==========================================
   PACKAGE → SERVICE MAPPING
========================================== */

const packageServiceMap: Record<
  string,
  string
> = {
  "Starter Business Website":
    "Website Development",

  "Professional Business Website":
    "Website Development",

  "E-commerce Website":
    "Website Development",

  "Business Automation":
    "Business Automation",

  "Custom Web Application":
    "Web Application Development",

  "Custom Software Development":
    "Custom Software Development",

  "SaaS MVP Development":
    "SaaS Development",

  "Website Maintenance":
    "Maintenance & Support",
};


/* ==========================================
   PROJECT QUOTE FORM
========================================== */

export default function ProjectQuoteForm() {
  const [name, setName] =
    useState("");

  const [company, setCompany] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [service, setService] =
    useState("");

  const [budget, setBudget] =
    useState("");

  const [timeline, setTimeline] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [
    selectedPackage,
    setSelectedPackage,
  ] = useState("");


  /* ==========================================
     READ SELECTED PACKAGE FROM URL
  ========================================== */

  useEffect(() => {
    const params =
      new URLSearchParams(
        window.location.search
      );

    const packageFromUrl =
      params
        .get("package")
        ?.trim();

    if (!packageFromUrl) {
      return;
    }

    /*
     * Only accept packages we recognise.
     */

    if (
      !Object.prototype.hasOwnProperty.call(
        packageServiceMap,
        packageFromUrl
      )
    ) {
      return;
    }

    setSelectedPackage(
      packageFromUrl
    );

    const mappedService =
      packageServiceMap[
        packageFromUrl
      ];

    setService(
      mappedService
    );

    /*
     * Track package quote interest.
     * No personal information is sent.
     */

    trackEvent(
      "package_quote_started",
      {
        package_name:
          packageFromUrl,

        service:
          mappedService,
      }
    );
  }, []);


  /* ==========================================
     SUBMIT PROJECT
  ========================================== */

  function submitProject(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();


    const packageDetails =
      selectedPackage
        ? selectedPackage
        : "General / Custom Project";


    const text = `
Hello ${siteConfig.fullName},

I would like to discuss a new project.

CLIENT DETAILS
Name: ${name}
Company: ${company || "Not specified"}
Email: ${email}
Phone: ${phone || "Not specified"}

PROJECT DETAILS
Selected Package: ${packageDetails}
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


    /* ========================================
       GOOGLE ANALYTICS LEAD EVENT
    ======================================== */

    trackEvent(
      "generate_lead",
      {
        form_name:
          "project_quote_form",

        selected_package:
          selectedPackage ||
          "general_project",

        service,

        budget:
          budget ||
          "not_specified",

        preferred_timeline:
          timeline ||
          "not_specified",
      }
    );


    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }


  /* ==========================================
     FORM
  ========================================== */

  return (
    <form
      className="quote-form"
      onSubmit={submitProject}
    >

      {/* ======================================
          FORM HEADING
      ====================================== */}

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


      {/* ======================================
          SELECTED PACKAGE
      ====================================== */}

      {selectedPackage && (

        <div
          style={{
            marginBottom: "28px",
            padding: "18px 20px",
            border:
              "1px solid rgba(91, 76, 240, 0.22)",
            borderRadius: "14px",
            background:
              "rgba(91, 76, 240, 0.06)",
          }}
        >

          <small
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#667085",
              fontSize: "12px",
              fontWeight: 700,
              textTransform:
                "uppercase",
              letterSpacing:
                "0.06em",
            }}
          >
            Selected Package
          </small>


          <strong
            style={{
              display: "block",
              color: "#101828",
              fontSize: "17px",
            }}
          >
            {selectedPackage}
          </strong>


          <span
            style={{
              display: "block",
              marginTop: "5px",
              color: "#667085",
              fontSize: "13px",
            }}
          >
            Complete the details below
            and we&apos;ll prepare the
            appropriate quotation.
          </span>

        </div>

      )}


      {/* ======================================
          CLIENT DETAILS
      ====================================== */}

      <div className="quote-form-grid">

        <label>

          Full Name *

          <input
            type="text"
            value={name}
            onChange={(event) =>
              setName(
                event.target.value
              )
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
              setCompany(
                event.target.value
              )
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
              setEmail(
                event.target.value
              )
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
              setPhone(
                event.target.value
              )
            }
            placeholder="+234..."
            autoComplete="tel"
          />

        </label>

      </div>


      {/* ======================================
          SERVICE
      ====================================== */}

      <label>

        What would you like us to build? *

        <select
          value={service}
          onChange={(event) =>
            setService(
              event.target.value
            )
          }
          required
        >

          <option
            value=""
            disabled
          >
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


      {/* ======================================
          BUDGET & TIMELINE
      ====================================== */}

      <div className="quote-form-grid">

        <label>

          Estimated Budget

          <select
            value={budget}
            onChange={(event) =>
              setBudget(
                event.target.value
              )
            }
          >

            <option value="">
              Select budget range
            </option>


            <option value="Below ₦200,000">
              Below ₦200,000
            </option>


            <option value="₦200,000 - ₦350,000">
              ₦200,000 - ₦350,000
            </option>


            <option value="₦350,000 - ₦500,000">
              ₦350,000 - ₦500,000
            </option>


            <option value="₦500,000 - ₦750,000">
              ₦500,000 - ₦750,000
            </option>


            <option value="₦750,000 - ₦1,000,000">
              ₦750,000 - ₦1,000,000
            </option>


            <option value="₦1,000,000 - ₦1,500,000">
              ₦1,000,000 - ₦1,500,000
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
              setTimeline(
                event.target.value
              )
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


      {/* ======================================
          PROJECT DESCRIPTION
      ====================================== */}

      <label>

        Tell us about your project *

        <textarea
          rows={7}
          value={message}
          onChange={(event) =>
            setMessage(
              event.target.value
            )
          }
          placeholder="Describe the problem you want to solve, the system you need, important features, your current process or any other useful information..."
          required
        />

      </label>


      {/* ======================================
          SUBMIT
      ====================================== */}

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