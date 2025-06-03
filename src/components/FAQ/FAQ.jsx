/* eslint-disable no-unused-vars */
import { useState } from "react";
import SectionTitle from "../SectionTitle";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // first item open

  const toggleOpen = (index) => {
    if (index === 0) return; // only allow interaction with the first item
  };

  // 🔸 All FAQ items in one array
  const faqData = [
    {
      question: "Can I use Landwind in open-source projects?",
      answer: (
        <>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="#"
              class="text-purple-600 dark:text-purple-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </>
      ),
    },
    {
      question: "Is there a Figma file available?",
      answer: (
        <>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="#"
              class="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from
            Landwind.
          </p>
        </>
      ),
    },
    {
      question: "What are the differences between Landwind and Tailwind UI?",
      answer: (
        <>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="#"
              class="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from
            Landwind.
          </p>
          <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="#"
                className="text-purple-600 dark:text-purple-500 hover:underline"
              >
                Landwind Pro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-purple-600 dark:text-purple-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What about browser support?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind supports all modern browsers. If you're using an older
            browser, make sure you test your site thoroughly.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Compatibility may vary with Tailwind CSS features and third-party
            integrations.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <SectionTitle className="mb-6 text-center lg:mb-8 dark:text-white">
          Frequently asked questions
        </SectionTitle>

        <div className="max-w-screen-md mx-auto">
          <div id="accordion-flush" dataAccordion="collapse">
            {faqData.map((item, idx) => (
              <FAQItem
                key={idx}
                id={idx}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === idx}
                toggleOpen={toggleOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
