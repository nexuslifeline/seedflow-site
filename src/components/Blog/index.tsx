import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-[650px] text-center md:mb-14">
          <span className="border-primary/15 bg-primary/5 text-primary mb-5 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold">
            Our Blog <span className="ml-2">✨</span>
          </span>
          <h2 className="mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl md:text-[45px]">
            Practical insights for clearer finances
          </h2>
          <p className="text-base leading-8 text-[#626074] md:text-lg">
            Simple ideas to help you manage invoices, understand expenses, and
            make better decisions as your business grows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
