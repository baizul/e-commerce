import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  MockData,
  ReviewData,
} from "../../../../helpers/ProductDetails/ProductDescription";
import Text from "../../../shared/Text";

const AccordionData = () => {
  return (
    <div>
      {MockData.map(({ id, title, desc1, desc2 }) => (
        <div key={id} className="py-2 text-eclipse-1">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Text className="text-xl font-bold text-eclipse">{title}</Text>
            </AccordionSummary>
            <AccordionDetails>
              <Text className="m-2 text-base font-normal">{desc1}</Text>
              <Text className="m-2 mt-4 text-base font-normal">{desc2}</Text>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default AccordionData;
