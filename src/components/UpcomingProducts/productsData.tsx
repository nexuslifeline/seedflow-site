import { Product } from "@/types/product";

const productsData: Product[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M8 0H32C36.418 0 40 3.582 40 8V32C40 36.418 36.418 40 32 40H8C3.582 40 0 36.418 0 32V8C0 3.582 3.582 0 8 0Z"
        />
        <path d="M10 6H30V10H10V6ZM10 14H30V18H10V14ZM10 22H18V26H10V22ZM22 22H30V26H22V22ZM10 30H18V34H10V30ZM22 30H30V34H22V30Z" />
      </svg>
    ),
    title: (
      <>
        <span className="text-primary dark:text-primary">Seedflow</span> Accounting
      </>
    ),
    paragraph:
      "A complete accounting solution to simplify financial management. Manage invoices, track expenses, and generate reports—all in one place.",
    image: "/images/products/accounting-system.png",
    features: [
      "Invoice Management",
      "Expense Tracking",
      "Financial Reports",
      "Journal Entries",
    ],
    stats: [],
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M8 0H32C36.418 0 40 3.582 40 8V32C40 36.418 36.418 40 32 40H8C3.582 40 0 36.418 0 32V8C0 3.582 3.582 0 8 0Z"
        />
        <path d="M8 32L12 24L16 28L20 18L24 22L28 14L32 20V32H8ZM12 12C13.105 12 14 12.895 14 14C14 15.105 13.105 16 12 16C10.895 16 10 15.105 10 14C10 12.895 10.895 12 12 12Z" />
      </svg>
    ),
    title: (
      <>
        <span className="text-primary dark:text-primary">Ad</span> Tracker
      </>
    ),
    paragraph:
      "Analytics and tracking for e-commerce. Monitor ad performance, track conversions, and optimize campaigns to maximize ROI.",
    image: "/images/products/ad-tracking.png",
    features: [
      "Real-time Analytics",
      "Conversion Tracking",
      "Campaign Optimization",
      "ROI Analysis",
    ],
    stats: [
      { label: "Performance", value: "92%" },
      { label: "ROI Increase", value: "78%" },
    ],
  },
];

export default productsData;

