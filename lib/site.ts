const whatsappNumber = "2348058427904";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

export const siteConfig = {
  name: "BizFlow",

  fullName: "BizFlow Technologies",

  tagline:
    "Digital Solutions. Smarter Business.",

  description:
    "BizFlow Technologies builds professional websites, custom software, web applications, SaaS products and business automation solutions that solve real business problems.",

  shortDescription:
    "Websites, software and digital solutions built for real business needs.",

  url: siteUrl,

  email: "hello@yourbusiness.com",

  whatsappNumber,

  whatsappUrl:
    `https://wa.me/${whatsappNumber}`,

  location:
    "Nigeria",

  products: {
    whatsOrder:
      "https://whats-order-sable.vercel.app",
  },

  navigation: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Solutions",
      href: "/#solutions",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
} as const;