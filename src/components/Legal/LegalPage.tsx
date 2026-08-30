type LegalSection = {
  title: string;
  paragraphs: string[];
};

const LegalPage = ({
  eyebrow,
  title,
  updatedOn,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updatedOn: string;
  intro: string;
  sections: LegalSection[];
}) => {
  return (
    <section className="bg-white pt-36 pb-16 md:pt-40 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container px-6 md:px-8 lg:px-4">
        <div className="mx-auto max-w-[760px]">
          <span className="border-primary/15 bg-primary/5 text-primary mb-5 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold">
            {eyebrow}
          </span>
          <h1 className="mb-4 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl">
            {title}
          </h1>
          <p className="mb-10 text-sm text-[#8a8695]">Last updated {updatedOn}</p>
          <p className="mb-10 text-base leading-8 text-[#626074]">{intro}</p>
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-3 text-xl font-bold text-[#1e1a2f]">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-3 text-base leading-8 text-[#626074]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
