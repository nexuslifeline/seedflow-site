import LegalPage from "@/components/Legal/LegalPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Seedflow",
  description:
    "The terms for using Seedflow while the product is in beta.",
};

const TermsPage = () => {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      updatedOn="August 30, 2026"
      intro="These terms apply when you visit Seedflow, contact us, or create a beta account. Seedflow is an early product, and features may change as we improve it."
      sections={[
        {
          title: "Using Seedflow",
          paragraphs: [
            "You may use Seedflow to explore the beta, manage your own business records, and give feedback. You are responsible for the information you enter and for keeping your account details secure.",
          ],
        },
        {
          title: "The beta",
          paragraphs: [
            "Seedflow is provided as a beta. Features, availability, and data handling may change. We may update, pause, or discontinue parts of the product as we continue building.",
          ],
        },
        {
          title: "Your content",
          paragraphs: [
            "You keep ownership of the records you add. By using Seedflow, you give us permission to store and process that information so the product can work.",
          ],
        },
        {
          title: "Acceptable use",
          paragraphs: [
            "Do not misuse the service, attempt to access other accounts, or use Seedflow for anything unlawful. We may suspend accounts that put the product or other users at risk.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "Questions about these terms can be sent through the contact form on this website.",
          ],
        },
      ]}
    />
  );
};

export default TermsPage;
