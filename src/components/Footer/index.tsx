import Image from "next/image";
import Link from "next/link";

const linkClass =
  "mb-3 inline-block text-sm text-[#6d6978] transition duration-300 hover:text-primary";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#f4f3f6] pt-16 md:pt-20 lg:pt-24">
      <div
        aria-hidden="true"
        className="absolute top-[-90px] left-[-90px] h-64 w-64 rounded-full bg-[#e9e3ff]"
      />
      <div
        aria-hidden="true"
        className="absolute top-[-65px] right-[-40px] h-72 w-72 rounded-full bg-[#e9e3ff]/70"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-150px] left-[-30px] h-72 w-72 rounded-full bg-[#e9e3ff]/80"
      />

      <div className="container relative z-10">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.7fr_1.15fr] lg:gap-8">
          <div className="max-w-[330px]">
            <Link href="/" className="mb-7 inline-block">
              <Image
                src="/images/logo/seed-logo.png"
                alt="Seedflow"
                width={180}
                height={41}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-7 text-sm leading-7 text-[#6d6978]">
              Seedflow helps growing businesses manage invoices, expenses, and
              financial records in one simple workspace.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-base font-bold text-[#252132]">Product</h2>
            <ul>
              <li>
                <Link href="/#features" className={linkClass}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className={linkClass}>
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/blog" className={linkClass}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className={linkClass}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-base font-bold text-[#252132]">Legal</h2>
            <ul>
              <li>
                <Link href="/terms" className={linkClass}>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-[0_14px_35px_rgba(57,43,102,0.08)]">
            <p className="text-primary mb-2 text-xs font-semibold">
              Support
            </p>
            <h2 className="mb-3 text-xl font-bold text-[#252132]">
              Need a hand?
            </h2>
            <p className="mb-4 text-sm leading-6 text-[#6d6978]">
              Questions about the beta or your workspace? We&apos;re here to
              help.
            </p>
            <ul>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/signup" className={linkClass}>
                  Join the beta
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#d9d6df] py-7">
          <p className="text-sm text-[#6d6978]">
            © {new Date().getFullYear()} Seedflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
