import { siteConfig } from "@/lib/site";

export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.fullName,
    url: siteConfig.url,
    description: siteConfig.description,

    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${siteConfig.whatsappNumber}`,
      contactType: "customer service",
      availableLanguage: "English",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.fullName,
    url: siteConfig.url,
    description: siteConfig.shortDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
    </>
  );
}