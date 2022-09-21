import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import { ReviewData } from "../../../../helpers/ProductDetails/ProductDescription";
import { Button } from "@mui/material";
import Text from "../../../shared/Text";

interface Props {
  setisOpen: (val: boolean) => void;
}

const ReviewAccordion = ({ setisOpen }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="font-mulish">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex justify-between w-full">
            <Text className="text-xl font-bold text-eclipse ">Reviews</Text>
            <div className="hidden -m-1 lg:block">
              {expanded === "panel1" && (
                <Button
                  onClick={() => setisOpen(true)}
                  variant="text"
                  className="text-sm font-bold text-crimson sm:hidden !normal-case lg:text-xl "
                >
                  + Add a review
                </Button>
              )}
            </div>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <div className="sm:block lg:hidden">
            <Button
              onClick={() => setisOpen(true)}
              variant="text"
              className="!normal-case text-crimson font-bold text-sm relative bottom-6"
            >
              + Add a review
            </Button>
          </div>
          <div className="!overflow-y-scroll h-150 lg:h-96 customized-scroll">
            {ReviewData.map(({ id, title, desc, name, date }) => (
              <>
                <div key={id}>
                  <div>
                    <div className="flow-root ">
                      <div className="relative float-left m-2 text-xl font-semibold text-nero -top-3">
                        {title}
                      </div>
                      <div className="float-right -mt-1">
                        <Rating
                          name="text-feedback"
                          value={5}
                          sx={{ color: "ffdd2d" }}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="m-2 text-base font-normal">{desc}</div>
                    <div className="flow-root text-matterhorn-2 ">
                      <span className="float-left mx-2 text-base font-normal ">
                        {name}
                      </span>
                      <span className="float-right mr-4 text-base font-normal ">
                        {date}
                      </span>
                    </div>
                  </div>
                  <Divider sx={{ m: 2, backgroundColor: "darkGrey" }} />
                </div>
              </>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ReviewAccordion;
