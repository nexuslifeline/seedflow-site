import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AppAdvantage from "@/components/AppAdvantage";
import ProductOverview from "@/components/ProductOverview";
import FAQ from "@/components/FAQ";
import Brands from "@/components/Brands";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import UpcomingProducts from "@/components/UpcomingProducts";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seedflow | Simple Accounting for Growing Businesses",
  description:
    "Seedflow helps growing businesses create invoices, track expenses, manage transactions, and keep their finances organized in one simple platform.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <AppAdvantage />
      <ProductOverview />
      <FAQ />
      <Brands />
      <Teams />
      <Testimonials />
      <UpcomingProducts />
      <Contact />
      <Blog />
      <CTA />
    </>
  );
}
