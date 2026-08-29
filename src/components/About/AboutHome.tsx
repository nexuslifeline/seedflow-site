import Image from "next/image";
import Link from "next/link";

const AboutHome = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 md:py-20 lg:py-28"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 z-0">
        <svg
          width="60"
          height="200"
          viewBox="0 0 60 200"
          className="text-primary/20 dark:text-primary/10"
          fill="none"
          stroke="currentColor"
        >
          <path d="M0,0 Q15,50 0,100 T0,200" strokeWidth="2" />
          <path d="M10,0 Q25,50 10,100 T10,200" strokeWidth="2" />
          <path d="M20,0 Q35,50 20,100 T20,200" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute top-10 right-1/4 z-0 hidden lg:block">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Large Circle */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="url(#paint0_radial_about_top)"
          />
          {/* Medium Circle - Overlapping Outside Top Right */}
          <circle
            cx="140"
            cy="60"
            r="50"
            fill="url(#paint1_radial_about_top)"
          />
          {/* Small Circle - Overlapping Outside Bottom Left */}
          <circle
            cx="50"
            cy="150"
            r="35"
            fill="url(#paint2_radial_about_top)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_about_top"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(100 100) rotate(90) scale(80)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.15" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_about_top"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(140 60) rotate(90) scale(50)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.12" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_about_top"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(50 150) rotate(90) scale(35)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-20 left-1/4 z-0 hidden lg:block">
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="80"
            cy="80"
            r="80"
            fill="url(#paint0_radial_about_bottom)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_about_bottom"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(80 80) rotate(90) scale(80)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.15" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left Column - Image Collage */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 max-w-[550px] lg:mb-0">
              {/* Top Left Square Image */}
              <div className="relative mr-6 mb-6 aspect-[3/4] w-[45%] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/about/about-1.jpg"
                  alt="About Us"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Bottom Left Square Image */}
              <div className="relative mr-6 aspect-[3/4] w-[45%] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/about/about-2.jpg"
                  alt="About Us"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Right Middle Larger Vertical Image */}
              <div className="absolute top-1/2 right-0 z-10 aspect-[3/4] w-[48%] -translate-y-1/2 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/about/about-3.jpg"
                  alt="About Us"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative max-w-[570px] lg:ml-auto">
              {/* Decorative Blue Circle */}
              <div className="absolute top-1/2 -right-8 z-0 hidden -translate-y-1/2 lg:block">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="60"
                    fill="url(#paint0_radial_about)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_about"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(60 60) rotate(90) scale(60)"
                    >
                      <stop
                        offset="0.145833"
                        stopColor="#4A6CF7"
                        stopOpacity="0"
                      />
                      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.15" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-primary dark:text-primary relative z-10 mb-2 block text-sm font-semibold tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="relative z-10 mb-4 text-3xl leading-tight font-bold text-black sm:text-4xl md:text-[45px] dark:text-white">
                The Beginning of Something Bigger
              </h2>
              <p className="text-body-color dark:text-body-color-dark relative z-10 mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                What started as a simple idea in 2015 has grown into a vision
                for transforming businesses through technology. Back then, we
                were just college students attending night classes — Paul,
                Encio, Pao, and Jei — united by a shared passion for innovation.
                Together, we dreamed of creating a company that could empower
                businesses to grow, streamline processes, and thrive in the
                digital world.
              </p>
              <div className="relative z-10 flex items-center gap-4">
                <Link
                  href="/about"
                  className="bg-primary hover:bg-primary/80 group flex h-14 w-14 items-center justify-center rounded-full text-white transition duration-300 ease-in-out"
                >
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    className="ml-1 fill-current"
                  >
                    <path d="M19.5 10.13397C20.1667 10.51888 20.1667 11.48112 19.5 11.86602L6 19.6603C5.33333 20.0452 4.5 19.564 4.5 18.7942L4.5 3.20577C4.5 2.43597 5.33333 1.95485 6 2.33975L19.5 10.13397Z" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="text-body-color dark:text-body-color-dark hover:text-primary dark:hover:text-primary text-sm font-semibold tracking-wider uppercase transition duration-300 ease-in-out"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
