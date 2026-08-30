import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Seedflow",
  description:
    "Contact Seedflow with questions about the beta, your workspace, or how to get started.",
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
