import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Honeymoon Lashes",
  tagline: "Certified lash technician near Gore Rd and Cottrelle Blvd in Brampton. Classic, hybrid, volume and cat eye sets.",
  category: "Lash extensions",
  schemaType: "BeautySalon",
  area: "Brampton, ON",
  siteUrl: "https://honeymoon-lashes.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#b76e79" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Certified lash tech in Brampton",
    headline: "Lashes that feel like a honeymoon",
    subhead:
      "Classic, hybrid, volume and cat eye sets near Gore Rd and Cottrelle Blvd. All sets are $75 for October. DM to book.",
    images: [
      { src: "/images/post-1.jpg", alt: "October lash promo by Honeymoon Lashes", width: 1080, height: 1334 },
      { src: "/images/post-2.jpg", alt: "Cat eye volume lashes", width: 1080, height: 1920 },
      { src: "/images/post-5.jpg", alt: "Full fluffy hybrid lash set", width: 720, height: 1280 },
    ],
    primaryCta: { label: "DM to book", href: "https://instagram.com/_honeymoonlashes" },
    secondaryCta: { label: "See the sets", href: "#gallery" },
  },

  highlights: [
    "Certified lash technician",
    "Gore Rd and Cottrelle Blvd",
    "All sets $75 in October",
    "Book by Instagram DM",
  ],

  about: {
    title: "Your new favourite lash spot",
    body: [
      "Honeymoon Lashes is a certified lash technician near Gore Rd and Cottrelle Blvd in Brampton, serving clients across Brampton and Vaughan.",
      "Classic, hybrid, volume and cat eye sets customized to your eyes. For October, all sets are $75. Send a DM to book your appointment.",
    ],
    image: { src: "/images/post-7.jpg", alt: "Lash care tips from Honeymoon Lashes", width: 1080, height: 1334 },
  },

  menu: {
    label: "Services",
    title: "Lash menu",
    intro: "October promo: all sets are $75 for the entire month. Spots fill as Halloween gets closer.",
    variant: "list",
    groups: [
      {
        title: "Full sets",
        note: "October promo",
        items: [
          { name: "Classic set", price: "$75", description: "All sets $75 during October." },
          { name: "Hybrid set", price: "$75", description: "Density with texture, without heavy weight." },
          { name: "Volume set", price: "$75", description: "Fuller volume looks." },
          { name: "Cat eye volumes", price: "$75", description: "Lifted cat eye shape." },
        ],
      },
    ],
    footnote: "October promo: all lash sets $75. Regular pricing after the promo is shared when you book.",
  },

  gallery: {
    title: "Recent sets",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1334, alt: "October all sets $75 promo", caption: "All sets $75 in October", href: "https://www.instagram.com/p/Deapn3EuBU6/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1920, alt: "Cat eye volume lashes", caption: "Cat eye volumes", href: "https://www.instagram.com/p/DeTWJlEOVZM/" },
      { src: "/images/post-3.jpg", width: 640, height: 1136, alt: "Classic lash set", caption: "Classics", href: "https://www.instagram.com/p/DeODoHIO1m5/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1334, alt: "Lash retention care tips", caption: "Treat your lashes right", href: "https://www.instagram.com/p/DeBH__3utGJ/" },
      { src: "/images/post-5.jpg", width: 720, height: 1280, alt: "Full fluffy hybrid lashes", caption: "So full, so fluffy", href: "https://www.instagram.com/p/Dd79vAxuDl1/" },
      { src: "/images/post-6.jpg", width: 720, height: 1280, alt: "Hybrid lash set explanation", caption: "Hybrid density", href: "https://www.instagram.com/p/Dd5RcaQu5wC/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1334, alt: "Debunking lash myths", caption: "Lash myths, cleared up", href: "https://www.instagram.com/p/Dd39ZYCC_Jr/" },
      { src: "/images/post-8.jpg", width: 720, height: 1280, alt: "Honeymoon Lashes intro", caption: "Your new favourite spot", href: "https://www.instagram.com/p/Dc43iDQuZMg/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "_honeymoonlashes",
    embeds: [
      "https://www.instagram.com/p/Deapn3EuBU6/",
      "https://www.instagram.com/p/DeTWJlEOVZM/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book your set",
    intro: "Appointments are booked through Instagram DMs. Tap below to copy a starter message.",
    dmMessage:
      "Hi Honeymoon Lashes! I would like to book a lash set.\nPreferred date:\nPreferred time:\nSet type (classic / hybrid / volume / cat eye):\nAny notes about the look:",
    links: [],
    note: "Near Gore Rd and Cottrelle Blvd. October promo: all sets $75.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send an Instagram DM with your preferred date, time, and set type." },
    { q: "Where are you located?", a: "Near Gore Rd and Cottrelle Blvd in Brampton. Exact details are shared when you book." },
    { q: "What sets do you offer?", a: "Classic, hybrid, volume and cat eye sets." },
    { q: "What is the October promo?", a: "All lash sets are $75 for the entire month of October." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Gore Rd and Cottrelle Blvd, Brampton, Ontario",
  },

  seo: {
    title: "Honeymoon Lashes | Lash extensions in Brampton",
    description: "Certified lash technician near Gore Rd and Cottrelle Blvd in Brampton. Classic, hybrid, volume and cat eye sets. All sets $75 in October. DM to book.",
    keywords: ["Brampton lashes", "Vaughan lashes", "lash extensions Brampton", "cat eye lashes GTA"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
