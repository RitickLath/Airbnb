// Using the native <details> and <summary> elements allows for server-side
// toggle functionality without needing client-side JavaScript.

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// FAQ data
const faqs = [
  {
    question: "What is Airbnb and how does it work?",
    answer:
      "We verify personal profiles and listings to make sharing easy, enjoyable and safe for millions of Hosts and travelers worldwide.",
  },
  {
    question: "How do I use search filters?",
    answer:
      "It’s easy to use our search filters to only show the listings that have the accessibility features you need. Learn more about using search filters and discover more flexible ways to search.",
  },
  {
    question: "Do I need to meet my Host?",
    answer:
      "Options like self check-in or booking an entire home allow you to interact with your Host mainly through in-app messaging – you can message them anytime if something comes up.",
  },
  {
    question:
      "What if I need to cancel due to a problem with the listing or Host?",
    answer:
      "In most cases, you can resolve any issues directly by messaging your Host. If they can't help, simply contact Airbnb within 24 hours of discovering the issue.",
  },
  {
    question: "Need more information?",
    answer:
      "Visit our Help Centre to get additional answers to your questions.",
  },
];

// Style constants
const containerStyles = "px-12 lg:px-20 p-4 lg:flex justify-between mt-10";
const headingStyles = "text-4xl lg:text-5xl font-bold lg:w-[60%] lg:-mt-4 mb-4";
const faqContainerStyles = "lg:w-[70%]";
const faqItemStyles = "border-b border-gray-300 py-4";
const faqSummaryStyles =
  "flex justify-between items-center cursor-pointer text-lg font-medium";
const faqAnswerStyles = "mt-4 text-gray-600";
const iconContainerStyles = "ml-2";

const FAQs = () => {
  return (
    <div className={containerStyles}>
      <h1 className={headingStyles}>Your questions, answered</h1>
      <div className={faqContainerStyles}>
        {faqs.map((faq, index) => (
          <details key={index} className={faqItemStyles}>
            <summary className={faqSummaryStyles}>
              {faq.question}
              <span className={iconContainerStyles}>
                <FaChevronDown className="icon-default icon-open" />
                <FaChevronUp className="icon-hidden icon-close" />
              </span>
            </summary>
            <p className={faqAnswerStyles}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
