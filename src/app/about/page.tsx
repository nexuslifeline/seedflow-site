import AboutStory from "@/components/About/AboutStory";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Seedflow",
  description:
    "Learn about Seedflow's vision to make business finance simpler and help growing businesses move forward.",
};

const AboutPage = () => {
  return (
    <>
      <AboutStory />
    </>
  );
};

export default AboutPage;
