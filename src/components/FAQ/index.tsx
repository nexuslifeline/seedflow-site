"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is Seedflow?",
    answer:
      "Seedflow is a simple accounting web app that helps growing businesses manage invoices, expenses, transactions, and financial records in one place.",
  },
  {
    question: "What can I manage in Seedflow?",
    answer:
      "You can create and organize invoices, track business expenses, record journal entries, and review financial reports.",
  },
  {
    question: "Is Seedflow available now?",
    answer:
      "Seedflow is currently in beta. Beta users can help shape the product while getting early access to the platform.",
  },
  {
    question: "How do I join the beta?",
    answer:
      "Create an account through the Join the beta button. Once your account is ready, you can access your workspace and start exploring Seedflow.",
  },
  {
    question: "Can I use Seedflow immediately after creating an account?",
    answer:
      "Yes. After creating your account, you can open your workspace and begin using the available beta features right away.",
  },
  {
    question: "Who is Seedflow for?",
    answer:
      "Seedflow is designed for individuals, startups, and growing businesses that want a clearer and simpler way to manage their finances.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#faf8ff] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="order-1">
            <span className="border-primary/15 bg-primary/5 text-primary mb-5 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold">
              FAQs <span className="ml-2">✨</span>
            </span>
            <h2 className="mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl md:text-[45px]">
              Questions? We&apos;ve got answers.
            </h2>
            <p className="mb-8 max-w-[530px] text-base leading-8 text-[#626074] md:text-lg">
              Learn how Seedflow works and what to expect while the product is
              in beta.
            </p>

            <div className="max-w-[560px] space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-primary/10 overflow-hidden rounded-xl border bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="text-dark flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold"
                    >
                      {faq.question}
                      <span
                        aria-hidden="true"
                        className={`text-primary shrink-0 text-xl leading-none transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <p className="text-body-color px-5 pb-5 text-sm leading-7">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <Link
              href="/signup"
              className="bg-primary hover:bg-primary/90 mt-8 inline-flex items-center rounded-full px-7 py-4 text-base font-bold text-white transition duration-300"
            >
              Join the beta
              <span aria-hidden="true" className="ml-2 text-lg">
                →
              </span>
            </Link>
          </div>

          <div className="relative order-2 mx-auto w-full max-w-[640px]">
            <div
              aria-hidden="true"
              className="bg-primary/10 absolute top-1/2 left-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
            />
            <div className="border-primary/15 relative z-10 overflow-hidden rounded-2xl border bg-white p-2 shadow-[0_24px_60px_rgba(50,31,110,0.14)]">
              <div className="flex h-8 items-center gap-1 border-b border-[#eeeaff] px-3">
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
                <span className="h-2 w-2 rounded-full bg-[#e5defe]" />
              </div>
              <Image
                src="/images/products/finance-suite.png"
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

export default FAQ;
