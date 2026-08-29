import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#faf8ff] pt-[120px] pb-16 sm:pt-[150px] sm:pb-20 lg:min-h-[760px] lg:pt-[155px] lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 -z-10 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-56 -z-10 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl"
      />

      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-4">
          <div className="relative z-10 max-w-[620px]">
            <div className="border-primary/20 text-primary mb-6 inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 text-sm font-semibold shadow-sm">
              <span className="bg-primary h-2 w-2 rounded-full" />
              Business finances, made simple
            </div>

            <h1 className="mb-6 text-4xl leading-[1.08] font-bold tracking-[-0.03em] text-[#1e1a2f] sm:text-5xl sm:leading-[1.06] lg:text-[62px]">
              Grow your business.
              <span className="text-primary block">Keep it flowing.</span>
            </h1>

            <p className="mb-9 max-w-[560px] text-base leading-8 text-[#626074] sm:text-lg">
              Built to help you track money, manage invoices, and keep your
              books organized—so you can spend less time managing finances and
              more time growing.
            </p>

            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(115,50,254,0.24)] transition duration-300 hover:shadow-[0_12px_28px_rgba(115,50,254,0.32)]"
              >
                Get early access
                <span aria-hidden="true" className="ml-2 text-lg">
                  →
                </span>
              </Link>
              <Link
                href="/#how-it-works"
                className="border-primary/25 text-primary hover:border-primary/50 inline-flex items-center justify-center rounded-full border bg-white/60 px-7 py-4 text-base font-bold transition duration-300 hover:bg-white"
              >
                See how it works
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#6b6877]">
              <span className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                  ✓
                </span>
                Invoices
              </span>
              <span className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                  ✓
                </span>
                Expense tracking
              </span>
              <span className="flex items-center gap-2">
                <span className="bg-primary/10 text-primary flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                  ✓
                </span>
                Financial reports
              </span>
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[540px] lg:-mr-12 lg:min-h-[630px]">
            <div
              aria-hidden="true"
              className="bg-primary/10 absolute top-1/2 left-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-[390px] sm:w-[390px]"
            />
            <div
              aria-hidden="true"
              className="absolute top-[42%] left-[48%] h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-2xl sm:h-[260px] sm:w-[260px]"
            />
            <Image
              src="/images/hero/seedflow-phone.png"
              alt="Seedflow accounting app on a mobile phone"
              width={577}
              height={565}
              priority
              sizes="(max-width: 767px) 90vw, (max-width: 1199px) 52vw, 600px"
              className="relative z-10 h-auto w-full max-w-[590px] object-contain drop-shadow-[0_24px_28px_rgba(30,26,47,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
