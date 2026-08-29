import { Metadata } from "next";
import HeroSection from "./components/sections/HeroSection";
import ProductImage from "./components/sections/ProductImage";
import KeyFeatures from "./components/sections/KeyFeatures";
import UseCases from "./components/sections/UseCases";
import WhyWeBuiltIt from "./components/sections/WhyWeBuiltIt";
import Roadmap from "./components/sections/Roadmap";
import ProductWaitlistCTA from "@/components/ProductWaitlistCTA";

export const metadata: Metadata = {
  title: "Seedflow Accounting - Simple Accounting for Growing Businesses",
  description:
    "A comprehensive accounting solution designed to streamline financial management for businesses of all sizes. Manage invoices, track expenses, generate reports, and maintain accurate financial records.",
};

const SeedflowAccountingPage = () => {
  return (
    <>
      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <HeroSection />
              <ProductImage />
              <KeyFeatures />
              <UseCases />
              <WhyWeBuiltIt />
              <Roadmap />
            </div>
          </div>
        </div>
      </section>

      <ProductWaitlistCTA
        title={
          <>
            Ready to Transform
            <br />
            <span className="text-primary">Your Business?</span>
          </>
        }
        description="Join our waitlist and be among the first to experience Seedflow Accounting. Get early access to a financial management solution for growing businesses."
        productName="Seedflow Accounting"
      />
    </>
  );
};

export default SeedflowAccountingPage;

