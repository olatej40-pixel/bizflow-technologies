import type { Metadata } from "next";

import "./globals.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import SiteAnalytics from "@/components/SiteAnalytics";
import StructuredData from "@/components/StructuredData";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "BizFlow Technologies | Websites, Software & Digital Solutions",

    template:
      "%s | BizFlow Technologies",
  },

  description:
    siteConfig.description,

  applicationName:
    siteConfig.fullName,

  authors: [
    {
      name: siteConfig.fullName,
    },
  ],

  creator:
    siteConfig.fullName,

  publisher:
    siteConfig.fullName,

  category:
    "Technology",

  keywords: [
    "BizFlow Technologies",
    "website development",
    "web development",
    "software development",
    "custom software",
    "web applications",
    "SaaS development",
    "business automation",
    "software customization",
    "business software",
    "website developer Nigeria",
    "software developer Nigeria",
    "technology solutions Nigeria",
  ],

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_NG",

    url:
      siteConfig.url,

    siteName:
      siteConfig.fullName,

    title:
      "BizFlow Technologies | Digital Solutions. Smarter Business.",

    description:
      siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",

    title:
      "BizFlow Technologies",

    description:
      siteConfig.shortDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />

        {children}

        <GoogleAnalytics />
        <SiteAnalytics />
      </body>
    </html>
  );
}