import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="px-4 py-16 md:py-20 lg:py-28">
      <div className="relative container overflow-hidden rounded-[28px] bg-[#7332FE] px-6 py-12 sm:px-10 md:py-16 lg:px-16">
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-20 h-64 w-64 rounded-full border border-white/15"
        />
        <div
          aria-hidden="true"
          className="absolute right-[35%] bottom-[-100px] h-64 w-64 rotate-12 border border-white/15"
        />
        <div
          aria-hidden="true"
          className="absolute top-8 right-8 h-12 w-28 rotate-[-12deg] bg-white/10"
        />
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          <div className="max-w-[570px]">
            <span className="mb-5 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
              Seedflow beta <span className="ml-2">✨</span>
            </span>
            <h2 className="mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-white sm:text-4xl md:text-[46px]">
              Simpler finances. More room to grow.
            </h2>
            <p className="mb-8 max-w-[500px] text-base leading-8 text-white/75 md:text-lg">
              Create your account and explore a simpler way to manage invoices,
              expenses, and the money moving through your business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#7332FE] transition duration-300 hover:bg-white/90"
              >
                Join the beta
                <span aria-hidden="true" className="ml-2 text-lg">
                  →
                </span>
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-white/10"
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[580px] lg:translate-x-4">
            <div className="absolute -top-4 right-3 z-20 rounded-xl bg-white px-4 py-3 shadow-xl sm:right-8">
              <p className="text-[10px] font-semibold text-[#858091]">Invoices this month</p>
              <p className="mt-1 text-lg font-bold text-[#242033]">₱86,420.00</p>
              <span className="text-[10px] font-semibold text-[#21834b]">↑ 12.8%</span>
            </div>
            <div className="relative rotate-[-3deg] overflow-hidden rounded-2xl border border-white/20 bg-white p-2 shadow-[0_24px_50px_rgba(38,11,102,0.28)]">
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
        </div>
      </div>
    </section>
  );
};

export default CTA;
