import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Text from "../../shared/Text";

interface Props {
  PageName: string;
}

const HeaderSection = ({ PageName }: Props) => {
  return (
    <>
      <Link to="/product-list" className="flex items-center w-fit text-davyGrey">
        <ArrowBackIcon
          classes={{
            root: "stroke-1",
          }}
        />
        <span className="mx-1 text-base">Continue Shopping</span>
      </Link>
      <div className="mt-2">
        <Text className="text-3xl font-extrabold lg:text-5xl">{PageName}</Text>
      </div>
    </>
  );
};

export default HeaderSection;
