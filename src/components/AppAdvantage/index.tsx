import Image from "next/image";
import Link from "next/link";

const advantages = [
  "All your finances in one place",
  "Less manual bookkeeping",
  "Clear financial visibility",
  "Start right away in beta",
];

const AppAdvantage = () => {
  return (
    <section id="app-advantage" className="bg-[#faf8ff] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 max-w-[560px]">
            <span className="border-primary/15 bg-primary/5 text-primary mb-5 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold">
              App advantage <span className="ml-2">✨</span>
            </span>
            <h2 className="mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl md:text-[45px]">
              Stay on top of your business finances.
            </h2>
            <p className="mb-8 text-base leading-8 text-[#626074] md:text-lg">
              Seedflow brings your invoices, expenses, journal entries, and
              reports into one clear workspace—so you can spend less time
              piecing together your numbers and more time growing.
            </p>

            <div className="mb-9 grid gap-4 sm:grid-cols-2">
              {advantages.map((advantage) => (
                <div
                  key={advantage}
                  className="flex items-center gap-3 text-sm font-medium text-[#4e4a5d]"
                >
                  <span className="bg-primary/10 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                    ✓
                  </span>
                  {advantage}
                </div>
              ))}
            </div>

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

          <div className="relative order-2 mx-auto min-h-[380px] w-full max-w-[600px] sm:min-h-[480px]">
            <div
              aria-hidden="true"
              className="bg-primary/10 absolute top-1/2 left-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl sm:h-[390px] sm:w-[390px]"
            />

            <div className="absolute top-6 left-0 w-[82%] -rotate-6 overflow-hidden rounded-xl border border-[#e1d9ff] bg-white shadow-[0_18px_40px_rgba(50,31,110,0.12)] sm:top-8">
              <div className="flex h-7 items-center gap-1 border-b border-[#eeeaff] px-3">
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
              </div>
              <Image
                src="/images/products/finance-suite-black.png"
                alt="Seedflow accounting dashboard"
                width={900}
                height={600}
                className="h-auto w-full"
              />
            </div>

            <div className="absolute right-0 bottom-2 z-10 w-[82%] rotate-3 overflow-hidden rounded-xl border border-[#e1d9ff] bg-white shadow-[0_24px_50px_rgba(50,31,110,0.18)] sm:bottom-4">
              <div className="flex h-7 items-center gap-1 border-b border-[#eeeaff] px-3">
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
              </div>
              <Image
                src="/images/products/finance-suite.png"
                alt="Seedflow accounting dashboard overview"
                width={900}
                height={600}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppAdvantage;
