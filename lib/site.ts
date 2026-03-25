export const siteConfig = {
  name: "Social Intelligence Cheat Sheet",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  price: "$19",
  description:
    "A simple cheat sheet that helps you speak more confidently, say no politely, and handle awkward moments with ease.",
  productHeadline: "50 Phrases That Make Conversations Easier Instantly",
  supportEmail: "hello@example.com",
  nav: [
    { label: "What’s Inside", href: "#inside" },
    { label: "Why It Works", href: "#why" },
    { label: "FAQ", href: "#faq" }
  ]
};

export const seoConfig = {
  title: "Social Intelligence Cheat Sheet | 50 Practical Phrases for Better Conversations",
  description:
    "A premium, practical PDF with 50 ready-to-use phrases to start conversations, say no politely, negotiate calmly, and handle awkward moments with more confidence.",
  ogTitle: "50 Practical Phrases for Better Conversations",
  ogDescription:
    "Instantly useful language for confidence, conversations, negotiation, and awkward moments. One-time purchase. Instant download.",
  keywords: [
    "social intelligence phrases",
    "how to start conversations",
    "polite ways to say no",
    "confidence phrases",
    "negotiation phrases",
    "social skills cheat sheet"
  ]
};
