import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2Zm0 2v4h14V5H5Zm0 6v8h14v-8H5Zm2 2h4v2H7v-2Zm6 0h4v2h-4v-2Zm-6 3h4v2H7v-2Zm6 0h4v2h-4v-2Z" />
      </svg>
    ),
    title: "Invoices",
    paragraph: "Create, organize, and track invoices without the paperwork.",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2v2Zm2.07-7.25-.9.92A3.486 3.486 0 0 0 13 13.1V14h-2v-.9a4.421 4.421 0 0 1 1.46-3.08l1.24-1.26A1.994 1.994 0 1 0 10 7.35H8a4 4 0 1 1 6.83 2.4Z" />
      </svg>
    ),
    title: "Expense tracking",
    paragraph: "Keep every business expense visible and organized.",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v2h16V6H4Zm0 4v8h16v-8H4Zm2 2h3v2H6v-2Zm5 0h3v2h-3v-2Zm5 0h2v2h-2v-2Z" />
      </svg>
    ),
    title: "Journal entries",
    paragraph: "Keep your books accurate as transactions happen.",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M4 19h16v2H4v-2Zm1-2h2V9H5v8Zm4 0h2V5H9v12Zm4 0h2v-5h-2v5Zm4 0h2V2h-2v15Z" />
      </svg>
    ),
    title: "Financial reports",
    paragraph: "Understand your numbers and make better decisions.",
  },
];

export default featuresData;
