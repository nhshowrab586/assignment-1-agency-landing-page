import SectionDescription from "../SectionDescription";
import SectionTitle from "../SectionTitle";
import PricingCard from "./Card";

const pricingData = [
  {
    title: "Starter",
    price: 29,
    description: "Best option for personal use & for your next project.",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: <span class='font-semibold'>1 developer</span>",
      "Premium support: <span class='font-semibold'>6 months</span>",
      "Free updates: <span class='font-semibold'>6 months</span>",
    ],
    buttonText: "Get started",
  },
  {
    title: "Company",
    price: 99,
    description: "Relevant for multiple users, extended & premium support.",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: <span class='font-semibold'>10 developers</span>",
      "Premium support: <span class='font-semibold'>24 months</span>",
      "Free updates: <span class='font-semibold'>24 months</span>",
    ],
    buttonText: "Get started",
  },
  {
    title: "Enterprise",
    price: 499,
    description:
      "Best for large scale uses and extended redistribution rights.",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: <span class='font-semibold'>100+ developers</span>",
      "Premium support: <span class='font-semibold'>36 months</span>",
      "Free updates: <span class='font-semibold'>36 months</span>",
    ],
    buttonText: "Get started",
  },
];

const Pricing = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <SectionTitle className="dark:text-white">
            Designed for business teams like yours
          </SectionTitle>
          <SectionDescription className="mb-5 sm:text-xl">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </SectionDescription>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingData.map((card, idx) => (
            <PricingCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
