import Image from "next/image";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="overflow-hidden bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(300px,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div className="relative order-2 flex min-h-[430px] items-end justify-center sm:min-h-[500px] lg:order-1">
            <div
              aria-hidden="true"
              className="bg-primary/10 absolute bottom-0 left-1/2 h-[330px] w-[330px] -translate-x-1/2 rounded-full sm:h-[400px] sm:w-[400px]"
            />
            <div
              aria-hidden="true"
              className="bg-primary/10 absolute top-16 right-6 h-20 w-20 rounded-3xl rotate-12 sm:right-10"
            />
            <Image
              src="/images/features/seedflow-user.png"
              alt="Person using Seedflow on a mobile phone"
              width={335}
              height={425}
              sizes="(max-width: 767px) 80vw, (max-width: 1199px) 40vw, 335px"
              className="relative z-10 h-auto w-full max-w-[335px] object-contain"
            />
            <div className="border-primary/15 absolute bottom-16 left-0 z-20 rounded-2xl border bg-white/95 px-4 py-3 shadow-[0_12px_28px_rgba(42,24,92,0.1)] sm:left-4">
              <p className="text-primary text-xs font-bold">Stay organized</p>
              <p className="mt-1 text-xs text-[#6b6877]">Every number in one place</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary mb-3 block text-sm font-semibold tracking-wider uppercase">
              Features
            </span>
            <h2 className="mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl md:text-[45px]">
              Everything you need to keep it flowing.
            </h2>
            <p className="mb-9 max-w-[560px] text-base leading-8 text-[#626074] md:text-lg">
              From invoices to financial reports, Seedflow keeps the work behind
              your business organized in one simple place.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
