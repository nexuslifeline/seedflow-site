import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "5 SEO Strategies That Increased Our Client Revenue by 300%",
    paragraph:
      "Discover proven SEO techniques that transform website traffic into measurable business growth. Learn how strategic optimization drives real results.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Jen",
      image: "/images/teams/jen.jpg",
      designation: "SEO Lead",
    },
    tags: ["SEO", "Growth"],
    publishDate: "2025",
    slug: "seo-strategies",
  },
  {
    id: 2,
    title:
      "Why Next.js is the Future of E-commerce Development: Building Scalable Online Stores",
    paragraph:
      "Explore how modern headless architecture with Next.js creates faster, more scalable online stores that convert better and rank higher in search.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Paul",
      image: "/images/teams/paul.jpg",
      designation: "Product Engineering Lead",
    },
    tags: ["Development", "E-commerce"],
    publishDate: "2025",
    slug: "nextjs-ecommerce",
  },
  {
    id: 3,
    title: "Mobile App Development: Native vs Cross-Platform Solutions",
    paragraph:
      "Make informed decisions about your mobile strategy. We break down the pros and cons to help you choose the right approach for your business goals.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Encio",
      image: "/images/teams/denis.jpg",
      designation: "Business Operations Lead",
    },
    tags: ["Mobile", "Development"],
    publishDate: "2025",
    slug: "mobile-development",
  },
];
export default blogData;
