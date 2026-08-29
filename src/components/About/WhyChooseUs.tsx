import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="relative z-10 overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="500"
          height="600"
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="120"
            cy="80"
            r="200"
            fill="url(#paint0_linear_about_section)"
          />
          <circle
            cx="80"
            cy="250"
            r="40"
            fill="url(#paint1_radial_about_section)"
          />
          <circle
            cx="200"
            cy="380"
            r="180"
            transform="rotate(35 200 380)"
            fill="url(#paint2_linear_about_section)"
          />
          <circle
            opacity="0.8"
            cx="350"
            cy="200"
            r="140"
            transform="rotate(-45 350 200)"
            stroke="url(#paint3_linear_about_section)"
          />
          <circle
            opacity="0.8"
            cx="450"
            cy="450"
            r="160"
            transform="rotate(25 450 450)"
            stroke="url(#paint4_linear_about_section)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_about_section"
              x1="-80"
              y1="-120"
              x2="120"
              y2="280"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_about_section"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(80 250) rotate(90) scale(40)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint2_linear_about_section"
              x1="20"
              y1="200"
              x2="380"
              y2="560"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_about_section"
              x1="350"
              y1="60"
              x2="350"
              y2="340"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_about_section"
              x1="450"
              y1="290"
              x2="450"
              y2="610"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="420"
          height="380"
          viewBox="0 0 420 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400 100C375 95 320 93 280 125C230 165 215 170 190 175C165 180 135 190 110 215"
            stroke="url(#paint0_linear_about_bottom)"
          />
          <path
            d="M430 100C405 95 350 93 310 125C260 165 245 170 220 175C195 180 165 190 140 215"
            stroke="url(#paint1_linear_about_bottom)"
          />
          <path
            d="M360 50C340 48 300 50 270 80C240 110 230 120 220 130C210 140 200 155 190 175"
            stroke="url(#paint2_linear_about_bottom)"
          />
          <circle
            opacity="0.8"
            cx="250"
            cy="60"
            r="55"
            transform="rotate(20 250 60)"
            stroke="url(#paint3_linear_about_bottom)"
          />
          <circle
            cx="245"
            cy="58"
            r="48"
            fill="url(#paint4_radial_about_bottom)"
          />
          <circle
            opacity="0.6"
            cx="320"
            cy="280"
            r="65"
            transform="rotate(-30 320 280)"
            stroke="url(#paint5_linear_about_bottom)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_about_bottom"
              x1="255"
              y1="97"
              x2="255"
              y2="215"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_about_bottom"
              x1="285"
              y1="97"
              x2="285"
              y2="215"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_about_bottom"
              x1="275"
              y1="48"
              x2="275"
              y2="175"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_about_bottom"
              x1="250"
              y1="5"
              x2="250"
              y2="115"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint4_radial_about_bottom"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(245 58) rotate(90) scale(48)"
            >
              <stop offset="0.145833" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint5_linear_about_bottom"
              x1="320"
              y1="215"
              x2="320"
              y2="345"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container">
        <div className="w-full mx-auto text-center" style={{ maxWidth: "570px", marginBottom: "80px" }}>
          <span className="text-primary dark:text-primary relative z-10 mb-2 block text-sm font-semibold tracking-wider uppercase">
            Why Us
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Why Choose Seedflow
          </h2>
          <p className="text-base leading-relaxed text-body-color md:text-lg">
            We deliver exceptional value through rapid development, reliable support, and future-ready technology that scales with your business.
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Faster Time to Market
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Launch your digital solutions faster with our proven
                  development process. We deliver production-ready applications
                  in weeks, not months, so you can start generating revenue and
                  serving customers sooner.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Peace of Mind Support
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Focus on growing your business while we handle all technical
                  concerns. Our 24/7 support team ensures your applications run
                  smoothly, with proactive monitoring and instant issue
                  resolution.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Future-Proof Technology
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Invest in technology that grows with your business. Our
                  modern, scalable architecture ensures your applications can
                  handle increased traffic, new features, and business expansion
                  without costly rebuilds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
