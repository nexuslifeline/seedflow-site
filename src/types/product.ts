import type { JSX } from "react";
export type Product = {
  id: number;
  icon: JSX.Element;
  title: string | JSX.Element;
  paragraph: string;
  image: string;
  features?: string[];
  stats?: { label: string; value: string }[];
};

