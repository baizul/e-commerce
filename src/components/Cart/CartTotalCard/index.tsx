import Text from "../../shared/Text";
import { Resources } from "../../../config/Resources";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  cartLength: number;
  subTotal: number;
  setModalOpen: (val: boolean) => void;
}

const CartTotalCard = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      {/* shipping, total and payment section  */}
      {props.cartLength > 0 && (
        <div className="absolute bottom-0 w-full pt-4 bg-white border border-whiteSmoke drop-shadow-md ">
          <div className="grid grid-cols-2 px-5 text-sm font-medium lg:px-10 sm:mx-0">
            <Text className="">Shipping</Text>
            <Text className="text-right md:mr-4">FREE</Text>
          </div>
          <div className="grid grid-cols-2 px-5 my-5 text-xl font-bold lg:px-10">
            <Text>Subtotal</Text>
            <Text className="text-right ">{`$${props.subTotal}`}</Text>
          </div>
          <div className="grid grid-cols-2 mx-5 space-x-2 lg:mx-10">
            <img src={Resources.images.Navbar.PayPal} alt="Item" className="cursor-pointer" />
            <div className="flex justify-end">
              <Button
                className="w-[169px] h-[40px] flex"
                variant="contained"
                color={"primary"}
                onClick={() => {
                  navigate("/checkout");
                  props.setModalOpen(false);
                }}
              >
                Check Out
              </Button>
            </div>
          </div>
          <div className="mx-5 my-4 text-xs font-medium md:mx-10 text-matterhorn-2">
            Legal text here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ut feugiat imperdiet ut ipsum facilisi ut.
          </div>
        </div>
      )}
    </>
  );
};

export default CartTotalCard;
