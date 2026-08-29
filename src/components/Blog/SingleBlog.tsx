import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, author, tags, publishDate, slug } = blog;
  return (
    <div className="group overflow-hidden rounded-xl border border-[#e8e5ed] bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(57,43,102,0.1)]">
      <Link
        href={`/blog/${slug}`}
        className="relative block aspect-[37/22] w-full overflow-hidden rounded-lg"
      >
        <span className="border-primary/15 bg-[#f4efff]/95 text-primary absolute bottom-3 left-3 z-20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold shadow-sm backdrop-blur-sm">
          <svg
            aria-hidden="true"
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 12.5L12.5 20.5L3.5 11.5V3.5H11.5L20.5 12.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <circle cx="7.5" cy="7.5" r="1.25" fill="currentColor" />
          </svg>
          {tags[0]}
        </span>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="px-2 pb-2 pt-5">
        <h3 className="mb-5 min-h-[56px]">
          <Link
            href={`/blog/${slug}`}
            className="text-lg leading-7 font-bold text-[#252132] transition duration-300 hover:text-primary"
          >
            {title}
          </Link>
        </h3>
        <div className="flex items-center justify-between border-t border-[#eeeaf3] pt-4">
          <div className="flex min-w-0 items-center gap-2">
            <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="truncate text-xs text-[#777282]">By {author.name}</span>
          </div>
          <span className="ml-2 shrink-0 text-xs text-[#777282]">{publishDate}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
