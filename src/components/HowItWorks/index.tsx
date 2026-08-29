import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Create your account",
    description: "Sign up for the Seedflow beta in just a few moments.",
  },
  {
    number: "02",
    title: "Open your workspace",
    description: "Access your workspace right after creating your account.",
  },
  {
    number: "03",
    title: "Start managing",
    description: "Create invoices, track expenses, and keep your books organized.",
  },
];

const StepContent = ({
  step,
  className = "",
}: {
  step: (typeof steps)[number];
  className?: string;
}) => (
  <div className={`text-center ${className}`}>
    <span className="bg-primary/10 text-primary inline-flex rounded-full px-3 py-1 text-xs font-bold tracking-wide">
      STEP - {step.number}
    </span>
    <h3 className="mt-4 mb-3 text-xl font-bold text-[#1e1a2f]">{step.title}</h3>
    <p className="mx-auto max-w-[230px] text-sm leading-7 text-[#6b6877]">
      {step.description}
    </p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#faf8ff] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-[650px] text-center">
          <span className="border-primary/15 bg-primary/5 text-primary inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold">
            How it works <span className="ml-2">👋</span>
          </span>
          <h2 className="mt-5 mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl md:text-[45px]">
            Get started and keep things flowing.
          </h2>
          <p className="text-base leading-8 text-[#626074] md:text-lg">
            Seedflow is currently in beta. Create your account, open your
            workspace, and start managing your finances right away.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-[1080px] lg:mt-24">
          <div className="relative hidden h-[340px] lg:block">
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 220"
              preserveAspectRatio="none"
              className="pointer-events-none absolute top-0 left-0 h-[260px] w-full"
            >
              <path
                d="M0 95C80 95 75 190 160 190C245 190 255 35 500 35C745 35 755 190 840 190C925 190 920 95 1000 95"
                fill="none"
                stroke="#ece7ff"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <circle cx="160" cy="190" r="6" fill="#7332fe" />
              <circle cx="500" cy="35" r="6" fill="#7332fe" />
              <circle cx="840" cy="190" r="6" fill="#7332fe" />
            </svg>

            <StepContent
              step={steps[0]}
              className="absolute top-0 left-[16%] w-[230px] -translate-x-1/2"
            />
            <StepContent
              step={steps[1]}
              className="absolute top-[78px] left-1/2 w-[230px] -translate-x-1/2"
            />
            <StepContent
              step={steps[2]}
              className="absolute top-0 left-[84%] w-[230px] -translate-x-1/2"
            />
          </div>

          <div className="relative ml-3 grid gap-10 border-l-2 border-[#ece7ff] pl-8 lg:hidden">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="bg-primary absolute top-1.5 -left-[41px] h-3 w-3 rounded-full ring-8 ring-[#faf8ff]" />
                <StepContent step={step} className="text-left" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center lg:mt-0">
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
      </div>
    </section>
  );
};

export default HowItWorks;
