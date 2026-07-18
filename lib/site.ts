export const site = {
  name: "Betterlife",
  tagline: "A real plan for people who started later than they wanted to.",
  description:
    "Betterlife is a personal finance blog about budgeting, investing, debt payoff, and building a second income, written by someone who has actually done it.",
  url: "https://betterlife.vercel.app",
  twitter: "@betterlifemoney",
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "budgeting-saving",
    name: "Budgeting & Saving",
    shortName: "Budgeting",
    description:
      "Spending plans, saving challenges, and the small money habits that quietly decide everything else.",
  },
  {
    slug: "investing-basics",
    name: "Investing Basics",
    shortName: "Investing",
    description:
      "Index funds, retirement accounts, and risk explained in plain language, for people starting from zero.",
  },
  {
    slug: "debt-payoff",
    name: "Debt Payoff",
    shortName: "Debt",
    description:
      "Snowball versus avalanche, credit card strategy, and student loans, without the shame spiral.",
  },
  {
    slug: "money-mindset",
    name: "Money Mindset & Habits",
    shortName: "Mindset",
    description:
      "The psychology behind why you spend, save, and avoid your bank app, and how to work with it instead of against it.",
  },
  {
    slug: "side-income",
    name: "Side Income",
    shortName: "Side Income",
    description:
      "Freelancing, side hustles, and digital products, with real numbers and real timelines attached.",
  },
  {
    slug: "printables",
    name: "Printables & Trackers",
    shortName: "Printables",
    description:
      "Free, downloadable budget trackers and worksheets you can print or use today.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
