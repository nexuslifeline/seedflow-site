import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";

type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type BlogArticleProps = {
  title: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
  intro: string;
  sections: ArticleSection[];
  quote: string;
  tags: string[];
};

const BlogArticle = ({
  title,
  authorImage,
  publishDate,
  readTime,
  category,
  image,
  intro,
  sections,
  quote,
  tags,
}: BlogArticleProps) => {
  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <div className="mx-auto max-w-[820px]">
          <h1 className="mb-8 text-3xl leading-tight font-bold text-[#1e1a2f] sm:text-4xl sm:leading-tight md:text-5xl">
            {title}
          </h1>

          <div className="mb-10 flex flex-wrap items-center justify-between gap-5 border-b border-[#e8e5ed] pb-5">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={authorImage}
                  alt="Seedflow Team"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium text-[#6d6978]">
                By Seedflow Team
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#6d6978]">
              <span>{publishDate}</span>
              <span>{readTime}</span>
              <span className="bg-primary inline-flex rounded-full px-3 py-1.5 text-xs font-semibold text-white">
                {category}
              </span>
            </div>
          </div>

          <p className="mb-10 text-base leading-8 font-medium text-[#626074] sm:text-lg">
            {intro}
          </p>

          <div className="mb-10 w-full overflow-hidden rounded-xl">
            <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="text-base leading-8 font-medium text-[#626074] sm:text-lg">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-6 text-2xl leading-tight font-bold text-[#1e1a2f] sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-8">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mb-10 list-inside list-disc">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="mb-3">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="bg-primary/10 mb-10 rounded-xl p-8 md:p-9">
              <p className="text-center text-base font-medium italic text-[#514d61]">
                &quot;{quote}&quot;
              </p>
            </div>

            <p className="mb-10">
              Good financial habits become more valuable as your business grows.
              Start with one clear process, keep your records current, and use
              the information you collect to make the next decision with
              confidence.
            </p>
          </div>

          <div className="items-center justify-between border-t border-[#e8e5ed] pt-8 sm:flex">
            <div className="mb-5">
              <h3 className="mb-3 text-sm font-medium text-[#6d6978]">
                Popular Tags:
              </h3>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <TagButton key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="mb-5">
              <h3 className="mb-3 text-sm font-medium text-[#6d6978] sm:text-right">
                Share this post:
              </h3>
              <div className="flex items-center sm:justify-end">
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
