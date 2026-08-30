import BlogArticle from "@/components/Blog/BlogArticle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash Flow Basics Every Growing Business Should Know | Seedflow",
  description:
    "Understand what is coming in, what is going out, and how simple cash-flow habits support healthier business growth.",
};

const CashFlowBasicsPage = () => {
  return (
    <BlogArticle
      title="Cash flow basics every growing business should know"
      authorImage="/images/teams/denis.jpg"
      publishDate="25 Aug 2026"
      readTime="8 min read"
      category="Cash Flow"
      image="/images/blog/cash-flow-basics.png"
      intro="Profit and cash flow are connected, but they are not the same. Cash flow shows whether your business has enough money moving in and out to cover what needs to happen next."
      sections={[
        {
          heading: "Look at the money moving through your business",
          paragraphs: [
            "Start by listing expected income and upcoming payments. Include customer invoices, operating costs, subscriptions, supplier bills, and other regular commitments. Seeing these items together makes timing gaps easier to spot.",
            "A business can have strong sales and still feel tight if customers pay later than expenses are due. Reviewing your cash position regularly helps you plan before a shortfall becomes urgent.",
          ],
          bullets: [
            "Track incoming payments and their expected dates",
            "Keep upcoming bills and recurring costs visible",
            "Follow up on overdue customer balances",
            "Set aside money for regular obligations",
          ],
        },
        {
          heading: "Make cash-flow reviews a regular habit",
          paragraphs: [
            "A short weekly review is often enough to stay aware of changes. Compare what you expected with what actually happened, then update your next few weeks. The more current your records are, the more useful they become when making decisions about hiring, purchasing, or growth.",
          ],
        },
      ]}
      quote="Cash-flow clarity gives you more time to make thoughtful decisions instead of reacting to surprises."
      tags={["Cash Flow", "Planning", "Growth"]}
    />
  );
};

export default CashFlowBasicsPage;
