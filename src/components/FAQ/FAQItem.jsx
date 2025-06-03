import SectionTitle from "../SectionTitle";
import BottomArrow from "../SVG/BottomArrow";
import TopArrow from "../SVG/TopArrow";



const FAQItem  =({ id, question, answer, isOpen, toggleOpen }) => {
  const ArrowIcon = isOpen ? TopArrow : BottomArrow;






  
  return (
    <>
      <h3 id={`accordion-heading-${id}`}>
        <button
          onClick={() => toggleOpen(id)}
          type="button"
          className={`flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 dark:border-gray-700 ${
            isOpen
              ? "text-gray-900 bg-white dark:bg-gray-900 dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          ariaExpanded={isOpen}
          ariaControls={`accordion-body-${id}`}
        >
          <span>{question}</span>
          <ArrowIcon />
        </button>
      </h3>

      <div
        id={`accordion-body-${id}`}
        className={`${isOpen ? "block" : "hidden"}`}
        ariaLabelledby={`accordion-heading-${id}`}
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          {answer}
        </div>
      </div>
    </>
  );
};

export default FAQItem