import Image from "next/image";
import Link from "next/link";

export default function ReadyToHelp() {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="w-full mx-auto text-center" style={{ maxWidth: "570px", marginBottom: "80px" }}>
          <span className="text-primary dark:text-primary relative z-10 mb-2 block text-sm font-semibold tracking-wider uppercase">
            Get Started
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            We are ready to help
          </h2>
          <p className="text-base leading-relaxed text-body-color md:text-lg">
            Ready to transform your business with cutting-edge digital solutions? Let's discuss your project and show you how we can accelerate your growth, reduce costs, and future-proof your technology investments.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
              <div className="relative aspect-77/40 items-center justify-center">
                <Image
                  src="/images/growth.jpg"
                  alt="growth image"
                  className="object-cover object-top"
                  fill
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
          {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] "> */}
          {/* <img src="/images/video/shape.svg" alt="shape" className="w-full" /> */}
        </div>
      </div>
      <div className="container mt-10">
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/80 rounded-xs px-8 py-4 text-center text-base font-semibold text-white duration-300 ease-in-out"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
