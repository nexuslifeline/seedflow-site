import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Seedflow",
  description:
    "Stay updated with insights to help you manage your business finances and keep growing.",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-40 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container px-6 md:px-8 lg:px-4">
          <div className="mx-auto mb-12 max-w-[650px] text-center md:mb-14">
            <span className="border-primary/15 bg-primary/5 text-primary mb-5 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold">
              Blog <span className="ml-2">✨</span>
            </span>
            <h1 className="mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-balance text-[#1e1a2f] sm:text-4xl md:text-[45px]">
              Practical insights for clearer finances
            </h1>
            <p className="text-base leading-8 text-[#626074] md:text-lg">
              Simple ideas to help you manage invoices, understand expenses, and
              make better decisions as your business grows.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {blogData.map((blog) => (
              <SingleBlog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
