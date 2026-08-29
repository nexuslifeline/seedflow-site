import { Metadata } from "next";
import HeroSection from "./components/sections/HeroSection";
import ProductImage from "./components/sections/ProductImage";
import KeyFeatures from "./components/sections/KeyFeatures";
import UseCases from "./components/sections/UseCases";
import WhyWeBuiltIt from "./components/sections/WhyWeBuiltIt";
import Roadmap from "./components/sections/Roadmap";
import ProductWaitlistCTA from "@/components/ProductWaitlistCTA";

export const metadata: Metadata = {
  title: "Seedflow Ad Tracker - Advanced Analytics & Tracking Solution",
  description:
    "Powerful analytics and tracking solution for e-commerce businesses to monitor ad performance, track conversions, and optimize marketing campaigns. Gain insights into customer behavior and maximize your advertising ROI.",
};

const SeedflowAdTrackerPage = () => {
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
            <span className="text-primary">Your Advertising?</span>
          </>
        }
        description="Join our waitlist and be among the first to experience Seedflow Ad Tracker. Get early access to an analytics and tracking solution for e-commerce businesses."
        productName="Seedflow Ad Tracker"
      />
    </>
  );
};

export default SeedflowAdTrackerPage;

