import Link from "next/link";
import { ReactNode } from "react";

interface ProductWaitlistCTAProps {
  title: string | ReactNode;
  description: string;
  productName: string;
}

const ProductWaitlistCTA = ({ title, description, productName }: ProductWaitlistCTAProps) => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light border-body-color/[.15] relative z-10 overflow-hidden border-t py-16 md:py-20 lg:py-28 dark:border-white/[.15]">
      {/* Decorative Circles - Top Left */}
      <div className="absolute top-0 left-0 z-0 opacity-20 lg:opacity-30">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="120" fill="url(#paint0_linear_cta_waitlist)" />
          <circle cx="50" cy="80" r="25" fill="url(#paint1_radial_cta_waitlist)" />
          <circle cx="80" cy="220" r="40" fill="url(#paint2_radial_cta_waitlist)" />
          <circle
            opacity="0.8"
            cx="200"
            cy="100"
            r="90"
            transform="rotate(-30 200 100)"
            stroke="url(#paint3_linear_cta_waitlist)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_cta_waitlist"
              x1="30"
              y1="30"
              x2="270"
              y2="270"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_cta_waitlist"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(50 80) rotate(90) scale(25)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.12" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_cta_waitlist"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(80 220) rotate(90) scale(40)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.12" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_cta_waitlist"
              x1="200"
              y1="10"
              x2="200"
              y2="190"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative Wavy Lines */}
      <div className="absolute right-0 bottom-0 z-0 opacity-10 dark:opacity-5">
        <svg
          width="400"
          height="300"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400 200C350 180 300 160 250 170C200 180 150 200 100 190C50 180 0 160 -50 150"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <path
            d="M400 220C350 200 300 180 250 190C200 200 150 220 100 210C50 200 0 180 -50 170"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <path
            d="M400 240C350 220 300 200 250 210C200 220 150 240 100 230C50 220 0 200 -50 190"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <path
            d="M400 260C350 240 300 220 250 230C200 240 150 260 100 250C50 240 0 220 -50 210"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <path
            d="M400 280C350 260 300 240 250 250C200 260 150 280 100 270C50 260 0 240 -50 230"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="relative z-10 container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Column - Text Content */}
          <div className="w-full px-4 lg:w-[65%]">
            <h2 className="mb-5 text-left text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
              {title}
            </h2>
            <p className="text-body-color dark:text-body-color-dark mb-0 text-left text-base leading-relaxed sm:text-lg md:text-xl">
              {description}
            </p>
          </div>

          {/* Right Column - Email Input & CTA Button */}
          <div className="mt-8 w-full px-4 lg:mt-0 lg:w-[35%]">
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xs border border-body-color/20 bg-white px-6 py-4 text-base text-black placeholder:text-body-color focus:border-primary focus:outline-none dark:border-white/20 dark:bg-gray-dark dark:text-white dark:placeholder:text-body-color-dark dark:focus:border-primary"
              />
              <Link
                href="/#contact"
                className="bg-primary hover:bg-primary/80 block w-full rounded-xs px-8 py-4 text-center text-base font-semibold text-white transition duration-300 ease-in-out"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductWaitlistCTA;

