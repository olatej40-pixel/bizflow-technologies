"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

export default function SiteAnalytics() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target =
        event.target as HTMLElement;

      const link =
        target.closest("a");

      if (!link) {
        return;
      }

      const href =
        link.getAttribute("href");

      if (!href) {
        return;
      }

      const linkText =
        link.textContent
          ?.replace(/\s+/g, " ")
          .trim()
          .slice(0, 100) || "unknown";

      /*
       * WhatsApp clicks
       */
      if (
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com")
      ) {
        trackEvent(
          "whatsapp_click",
          {
            link_text: linkText,
            page_path:
              window.location.pathname,
          }
        );

        return;
      }

      /*
       * Start Project / Contact clicks
       */
      if (
        href === "/contact" ||
        href.startsWith("/contact?")
      ) {
        trackEvent(
          "start_project_click",
          {
            link_text: linkText,
            page_path:
              window.location.pathname,
          }
        );
      }
    }

    document.addEventListener(
      "click",
      handleClick
    );

    return () => {
      document.removeEventListener(
        "click",
        handleClick
      );
    };
  }, []);

  return null;
}