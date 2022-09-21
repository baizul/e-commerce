import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Product } from "./Product";
import { ProductDetail } from "./ProductDetail";
import classNames from "classnames";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

interface Props {
  handleOpen: () => void;
}

const ProductPreview = ({ handleOpen }: Props) => {
  const isTab = useMediaQuery("(max-width: 1000px)");
  return (
    <>
      <Link
        to="/product-list"
        className="!py-3 !pl-5 !text-xs md:!text-sm lg:!text-base lg:!py-6 lg:!my-3 lg:!pl-16 text-matterhorn-2 lg:!mt-8"
      >
        <ArrowBackIcon className="!w-5 !h-5 lg:!w-7 lg:!h-7 pr-1" />
        Back
      </Link>

      <div
        className={classNames(
          "flex flex-col lg:flex-row",
          isTab ? "flex-col" : "flex-row"
        )}
      >
        <Product handleOpen={handleOpen} />
        <Divider className="lg:hidden !w-3/4 !mx-auto" />
        <ProductDetail />
      </div>
    </>
  );
};

export default ProductPreview;
