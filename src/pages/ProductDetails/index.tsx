import ProductPreview from "../../components/ProductDetails/ProductPreview";
import { useState } from "react";
import Accessories from "../../components/ProductDetails/Accessories";
import AddReview from "../../components/ProductDetails/AddReview";
import AthleteDetails from "../../components/ProductDetails/AthleteDetails";
import AthleticEstate from "../../components/ProductDetails/AthleticEstate";
import FanCam from "../../components/ProductDetails/FanCam";
import ProductDescription from "../../components/ProductDetails/ProductDescription";
import ProductImages from "../../components/ProductDetails/ProductImages";
import { Modal } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const ProductDetails = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [reviewOpen, setReviewOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ProductImages setOpen={handleClose} />
      </Modal>
      <AddReview isOpen={reviewOpen} setisOpen={setReviewOpen} />
      <div className="w-full mt-5">
        <ProductPreview handleOpen={handleOpen} />
        <div className="flex flex-col pt-8 lg:flex-row">
          {isDesktop && <FanCam />}
          <div className="flex flex-col w-full pt-10 lg:w-1/2 lg:pt-0">
            <AthleteDetails />
            <AthleticEstate />
          </div>
        </div>
        <ProductDescription setisOpen={setReviewOpen} />
        {!isDesktop && <FanCam />}
        <Accessories />
      </div>
    </>
  );
};
export default ProductDetails;
