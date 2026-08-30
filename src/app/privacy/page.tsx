import LegalPage from "@/components/Legal/LegalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Seedflow",
  description:
    "Learn how Seedflow collects and uses information when you contact us or join the beta.",
};

const PrivacyPage = () => {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updatedOn="August 30, 2026"
      intro="This page explains what information Seedflow collects and how we use it. Seedflow is currently in beta, so we keep this as simple and direct as we can."
      sections={[
        {
          title: "Information we collect",
          paragraphs: [
            "When you contact us or create a beta account, we may collect your name, email address, phone number, company name, and the message you send. We also collect the information you add to your workspace, such as invoices, expenses, and other financial records you choose to enter.",
          ],
        },
        {
          title: "How we use it",
          paragraphs: [
            "We use this information to respond to your questions, create and support your account, improve Seedflow, and send service-related messages. We do not sell your information.",
          ],
        },
        {
          title: "How we store it",
          paragraphs: [
            "We store information only as long as it is needed to operate the product or respond to you. Access is limited to people who need it to run Seedflow.",
          ],
        },
        {
          title: "Your choices",
          paragraphs: [
            "You can ask us to update or delete your information by contacting us. If you join the beta, you can also stop using your account at any time.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "If you have a privacy question, reach us through the contact form on this website.",
          ],
        },
      ]}
    />
  );
};

export default PrivacyPage;
