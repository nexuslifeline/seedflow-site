import BlogArticle from "@/components/Blog/BlogArticle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Simple Guide to Tracking Business Expenses | Seedflow",
  description:
    "Learn how consistent expense tracking gives you a clearer picture of where your money goes and what your business needs next.",
};

const TrackingBusinessExpensesPage = () => {
  return (
    <BlogArticle
      title="A simple guide to tracking business expenses"
      authorImage="/images/teams/paul.jpg"
      publishDate="18 Aug 2026"
      readTime="7 min read"
      category="Expenses"
      image="/images/blog/expense-tracking.png"
      intro="Every business has expenses, but not every business has a clear view of them. A consistent way to record spending can turn everyday transactions into useful information for better decisions."
      sections={[
        {
          heading: "What to record when an expense happens",
          paragraphs: [
            "Capture the date, amount, category, supplier, and payment method for each expense. Adding a short note or receipt reference makes the transaction easier to understand later and gives you a dependable record when reviewing a period.",
            "The goal is not to create more administration. It is to create one reliable source of information instead of relying on memory or trying to reconstruct spending at the end of the month.",
          ],
          bullets: [
            "Separate business purchases from personal spending",
            "Use categories that make sense for your business",
            "Attach or keep the receipt with the transaction",
            "Review unusual or recurring costs regularly",
          ],
        },
        {
          heading: "Turn expense records into better decisions",
          paragraphs: [
            "Once expenses are recorded consistently, you can see which costs support growth and which ones need attention. This makes it easier to plan upcoming payments, set realistic budgets, and understand how much revenue your business needs to generate.",
          ],
        },
      ]}
      quote="The best expense system is the one simple enough to keep current every day."
      tags={["Expenses", "Finance", "Planning"]}
    />
  );
};

export default TrackingBusinessExpensesPage;
