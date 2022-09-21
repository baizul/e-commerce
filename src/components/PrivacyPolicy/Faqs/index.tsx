import React from "react";
import Text from "../../shared/Text";
import FaqAccordion from "./FaqAccordion";

const Faqs = () => {
  return (
    <div className="hidden pb-60 lg:block">
      <Text className="pb-4 text-3xl font-extrabold lg:text-4xl text-nero">
        Frequently Asked Questions (FAQs)
      </Text>
      <FaqAccordion />
    </div>
  );
};

export default Faqs;
