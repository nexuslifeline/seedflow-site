import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="w-full mx-auto text-center" style={{ maxWidth: "570px", marginBottom: "100px" }}>
          <span className="text-primary dark:text-primary relative z-10 mb-2 block text-sm font-semibold tracking-wider uppercase">
            Blog
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Our Latest Blogs
          </h2>
          <p className="text-base leading-relaxed text-body-color md:text-lg">
            Stay ahead with insights and strategies that help your business grow. Discover how modern technology solves real business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
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
