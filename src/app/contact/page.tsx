import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Seedflow",
  description: "Get in touch with Seedflow and learn how we can help you manage your business finances.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Contact isPage />
    </>
  );
};

export default ContactPage;
