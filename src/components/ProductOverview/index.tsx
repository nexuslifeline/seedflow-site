import Image from "next/image";

const benefits = [
  {
    title: "Easy to use",
    description: "Get started without a complicated setup.",
    icon: "✦",
  },
  {
    title: "One clear workspace",
    description: "Keep your financial work together in one place.",
    icon: "◈",
  },
  {
    title: "Less manual work",
    description: "Spend less time piecing numbers together.",
    icon: "↗",
  },
  {
    title: "Organized records",
    description: "Keep important details easy to find.",
    icon: "▤",
  },
  {
    title: "Clear insights",
    description: "Understand the numbers behind your growth.",
    icon: "◌",
  },
  {
    title: "Built to grow",
    description: "A simpler foundation for your next stage.",
    icon: "⌁",
  },
];

const Benefit = ({
  benefit,
}: {
  benefit: (typeof benefits)[number];
}) => (
  <div className="flex items-start gap-4">
    <span className="border-primary/20 bg-primary/5 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-lg">
      {benefit.icon}
    </span>
    <div>
      <h3 className="mb-1 text-base font-bold text-[#1e1a2f]">{benefit.title}</h3>
      <p className="text-sm leading-6 text-[#6b6877]">{benefit.description}</p>
    </div>
  </div>
);

const ProductOverview = () => {
  return (
    <section id="product-overview" className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-[680px] text-center">
          <span className="border-primary/15 bg-primary/5 text-primary inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold">
            Why Seedflow <span className="ml-2">✨</span>
          </span>
          <h2 className="mt-5 mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl md:text-[45px]">
            Simple tools for every stage of growth.
          </h2>
          <p className="text-base leading-8 text-[#626074] md:text-lg">
            Seedflow gives you one clear place to manage invoices, expenses,
            records, and financial insights as your business grows.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1120px] items-center gap-12 lg:mt-20 lg:grid-cols-[1fr_1.35fr_1fr] lg:gap-10">
          <div className="order-2 grid gap-8 lg:order-1">
            {benefits.slice(0, 3).map((benefit) => (
              <Benefit key={benefit.title} benefit={benefit} />
            ))}
          </div>

          <div className="order-1 relative mx-auto w-full max-w-[620px] lg:order-2">
            <div
              aria-hidden="true"
              className="bg-primary/10 absolute top-1/2 left-1/2 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            />
            <div className="border-primary/15 relative z-10 overflow-hidden rounded-2xl border bg-white p-2 shadow-[0_24px_60px_rgba(50,31,110,0.14)]">
              <div className="flex h-8 items-center gap-1 border-b border-[#eeeaff] px-3">
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
              </div>
              <Image
                src="/images/products/finance-suite.png"
                alt="Seedflow accounting dashboard"
                width={900}
                height={600}
                className="h-auto w-full rounded-b-xl"
              />
            </div>
          </div>

          <div className="order-3 grid gap-8">
            {benefits.slice(3).map((benefit) => (
              <Benefit key={benefit.title} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
