import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Why organized invoices matter as your business grows",
    paragraph:
      "A clear invoice process helps you get paid on time, keep better records, and spend less time searching for financial details.",
    image: "/images/blog/invoice-management.png",
    author: {
      name: "Seedflow Team",
      image: "/images/teams/jen.jpg",
      designation: "Product Education",
    },
    tags: ["Invoicing", "Growth"],
    publishDate: "Aug 2026",
    slug: "seo-strategies",
  },
  {
    id: 2,
    title: "A simple guide to tracking business expenses",
    paragraph:
      "Learn how consistent expense tracking gives you a clearer picture of where your money goes and what your business needs next.",
    image: "/images/blog/expense-tracking.png",
    author: {
      name: "Seedflow Team",
      image: "/images/teams/paul.jpg",
      designation: "Product Education",
    },
    tags: ["Expenses", "Finance"],
    publishDate: "Aug 2026",
    slug: "nextjs-ecommerce",
  },
  {
    id: 3,
    title: "Cash flow basics every growing business should know",
    paragraph:
      "Cash flow is easier to manage when you understand what is coming in, what is going out, and what needs your attention next.",
    image: "/images/blog/cash-flow-basics.png",
    author: {
      name: "Seedflow Team",
      image: "/images/teams/denis.jpg",
      designation: "Product Education",
    },
    tags: ["Cash Flow", "Planning"],
    publishDate: "Aug 2026",
    slug: "mobile-development",
  },
  {
    id: 4,
    title: "How to prepare your business for a smoother tax season",
    paragraph:
      "Better records make tax time easier. Learn the simple financial habits that help you stay organized throughout the year.",
    image: "/images/blog/tax-season-planning.png",
    author: {
      name: "Seedflow Team",
      image: "/images/teams/paul.jpg",
      designation: "Product Education",
    },
    tags: ["Tax Planning", "Records"],
    publishDate: "Aug 2026",
    slug: "tax-season-planning",
  },
];
export default blogData;
