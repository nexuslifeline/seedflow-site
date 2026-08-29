import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Product",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Features",
        path: "/#features",
        newTab: false,
      },
      {
        id: 12,
        title: "How It Works",
        path: "/#how-it-works",
        newTab: false,
      },
      {
        id: 13,
        title: "Benefits",
        path: "/#app-advantage",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "About",
        path: "/#about",
        newTab: false,
      },
      {
        id: 22,
        title: "Blog",
        path: "/#blog",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Contact",
    path: "/#contact",
    newTab: false,
  },
];
export default menuData;
