import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <Accordion
        title="What is ADS Digital Partner?"
        answer=" (ADS Digital Partner) is an Indonesian IT consulting company that provides digital solutions like SaaS, 
        startup incubation, and training focused on supply chain and MSME sectors. "
      />
      <Accordion
        title="What services does ADS Digital Partner offer?"
        answer="ADS Digital Partner offers IT consulting, SaaS products, a training center, and a startup incubator."
      />
      <Accordion title="Where is ADS Digital Partner located ?" answer="ADS Digital Partner (Adma Digital Solusi) is located in Jakarta, Surabaya, Bandung, and Malang, Indonesia." />
    </div>
  );
};

export default FAQ;
