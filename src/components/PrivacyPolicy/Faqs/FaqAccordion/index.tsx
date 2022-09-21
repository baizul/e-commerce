import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { BsChevronDown } from "react-icons/bs";
import Text from "../../../shared/Text";

const FaqAccordion = () => {
  const [expanded, setExpanded] = React.useState([]);

  return (
    <div>
      {[...Array(5)].map((val, idx) => (
        <Accordion
          key={idx}
          classes={{ root: " !shadow-none !w-3/5 !border-none !my-10 !static" }}
          expanded={expanded.includes(idx) ? true : false}
          onChange={() =>
            expanded.includes(idx)
              ? setExpanded(expanded.filter((item) => item !== idx))
              : setExpanded([...expanded, idx])
          }
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<BsChevronDown className="text-crimson" size={20} />}
          >
            <Text className="text-xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </Text>
          </AccordionSummary>
          <AccordionDetails className="!pr-6">
            <Text className="text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Text>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FaqAccordion;
