import React, { useState } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
  id: number;
  isOpen: boolean;
  toggleAccordion: (id: number) => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  id,
  isOpen,
  toggleAccordion,
}) => {
  return (
    <div>
      <h2 id={`accordion-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium border border-[--border-table] border-x-0 ${
            isOpen ? "bg-[--faq-active]" : ""
          }`}
          onClick={() => toggleAccordion(id)}
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${id}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 shrink-0 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div
          id={`accordion-body-${id}`}
          className="p-5 "
          aria-labelledby={`accordion-heading-${id}`}
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "What is Flowbite?",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS.",
    },
    {
      title: "Is there a Figma file available?",
      content:
        "Flowbite is first conceptualized and designed using the Figma software...",
    },
    {
      title: "What are the differences between Flowbite and Tailwind UI?",
      content:
        "The main difference is that the core components from Flowbite are open source...",
    },
  ];

  return (
    <>
      <h2 className="xl:text-[34px] text-[28px] text-[--text-base] font-bold mb-5">
        FAQ
      </h2>

      <div
        id="accordion-collapse"
        className="rounded-lg overflow-hidden border  border-[--border-table]"
      >
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </>
  );
};

export default Accordion;
