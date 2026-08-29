import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    title: "Clarity first",
    description:
      "Financial tools should help you understand what is happening, not make things harder to follow.",
  },
  {
    title: "Built for real work",
    description:
      "We focus on practical workflows that help businesses manage the details of everyday finance.",
  },
  {
    title: "Always improving",
    description:
      "Seedflow is in beta, so feedback from early users directly shapes what we build next.",
  },
];

const AboutStory = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-[730px] text-center">
          <span className="border-primary/15 bg-primary/5 text-primary mb-5 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold">
            About Seedflow <span className="ml-2">✨</span>
          </span>
          <h1 className="mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl md:text-[50px]">
            Helping businesses keep their finances moving.
          </h1>
          <p className="text-base leading-8 text-[#626074] md:text-lg">
            Seedflow is building a simpler way for growing businesses to
            organize invoices, expenses, transactions, and the financial details
            behind their next stage of growth.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1120px] items-center gap-12 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div
              aria-hidden="true"
              className="bg-primary/10 absolute top-1/2 left-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            />
            <div className="border-primary/15 relative z-10 overflow-hidden rounded-2xl border bg-white p-2 shadow-[0_24px_60px_rgba(50,31,110,0.14)]">
              <div className="flex h-8 items-center gap-1 border-b border-[#eeeaff] px-3">
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
              </div>
              <Image
                src="/images/products/finance-suite.jpg"
                alt="Seedflow accounting dashboard"
                width={900}
                height={600}
                className="h-auto w-full rounded-b-xl"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary mb-3 block text-sm font-semibold tracking-wider uppercase">
              Why Seedflow exists
            </span>
            <h2 className="mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl">
              A stronger financial foundation for growth.
            </h2>
            <p className="mb-5 text-base leading-8 text-[#626074]">
              As a business grows, financial information can quickly become
              scattered across spreadsheets, messages, and disconnected tools.
              That makes simple questions harder to answer and important tasks
              easier to miss.
            </p>
            <p className="text-base leading-8 text-[#626074]">
              Seedflow brings those everyday workflows into one clear workspace,
              helping you spend less time managing financial details and more
              time making decisions with confidence.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-[1050px] border-t border-[#eeeaf3] pt-16 lg:mt-28">
          <div className="mx-auto mb-10 max-w-[650px] text-center">
            <span className="text-primary mb-3 block text-sm font-semibold tracking-wider uppercase">
              What guides us
            </span>
            <h2 className="mb-4 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl">
              Simple by design. Useful by default.
            </h2>
            <p className="text-base leading-8 text-[#626074] md:text-lg">
              We believe financial software should feel approachable, practical,
              and ready to support the way businesses actually work.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="border-primary/10 rounded-xl border bg-[#faf8ff] p-6"
              >
                <span className="bg-primary/10 text-primary mb-5 flex h-10 w-10 items-center justify-center rounded-xl text-lg">
                  ✦
                </span>
                <h3 className="mb-2 text-lg font-bold text-[#1e1a2f]">
                  {principle.title}
                </h3>
                <p className="text-sm leading-7 text-[#6b6877]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 mx-auto mt-16 max-w-[900px] rounded-2xl px-6 py-10 text-center md:mt-24 md:px-12">
          <span className="text-primary mb-3 block text-sm font-semibold tracking-wider uppercase">
            Building in beta
          </span>
          <h2 className="mb-4 text-2xl leading-tight font-bold text-[#1e1a2f] sm:text-3xl">
            Help shape what Seedflow becomes.
          </h2>
          <p className="mx-auto mb-7 max-w-[620px] text-base leading-8 text-[#626074]">
            Early users get access to the product while helping us improve the
            workflows that matter most to growing businesses.
          </p>
          <Link
            href="/signup"
            className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-full px-7 py-4 text-base font-bold text-white transition duration-300"
          >
            Join the beta
            <span aria-hidden="true" className="ml-2 text-lg">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
