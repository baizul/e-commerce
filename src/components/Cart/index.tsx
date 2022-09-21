import CloseIcon from "@mui/icons-material/Close";
import CustomModal from "../shared/CustomModal";
import IconButton from "@mui/material/IconButton";
import CartItemCard from "./CartItemCard";
import CartTotalCard from "./CartTotalCard";
import { useSelector } from "react-redux";
import { IReducer } from "../../redux/Reducers";
import { Resources } from "../../config/Resources";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Drawer, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  modalOpen: boolean;
  setModalOpen: (finderModalOpen: boolean) => void;
}

const Cart = ({ modalOpen, setModalOpen }: Props) => {
  const cart = useSelector((state: IReducer) => state.cart);
  const [subTotal, setSubTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    calculateSubTotal();
  }, [cart]);

  const calculateSubTotal = () => {
    const value = cart.reduce((prev, curr) => prev + curr.qty * curr.price, 0);
    setSubTotal(value);
  };

  return (
    <div>
      <Drawer
        open={modalOpen}
        onClose={setModalOpen}
        anchor={"right"}
        hideBackdrop={true}
        PaperProps={{
          style: {
            height: "93vh",
          },
          sx: {
            width: { xs: "100%", sm: 500, md: 400, lg: 500 },
            marginTop: { xs: 7, sm: 7.2, md: 6.6 },
          },
        }}
        className="w-44"
      >
        <div className="w-full h-full overflow-y-hidden">
          {/* Top part of cart section  */}
          <div className="flex justify-between px-4 py-3 align-middle md:py-5 md:px-8">
            <div className="flex ">
              <p className="my-auto mr-4 text-xl font-extrabold md:text-3xl">
                My Cart
              </p>
              <p className="my-auto text-xs font-semibold md:text-base">
                ({cart.length} Items)
              </p>
            </div>
            <IconButton
              aria-label="close"
              className="cursor-pointer"
              onClick={() => setModalOpen(!modalOpen)}
            >
              <CloseIcon sx={{ fontSize: { md: 40 } }} />
            </IconButton>
          </div>
          <div>
            {cart.length < 1 && (
              <div className="text-center ">
                <div className="grid h-[60vh] place-content-center">
                  <img
                    src={Resources.images.Navbar.EmptyCartLogo}
                    alt="Empty Cart"
                    className="mx-auto "
                  />
                  <p className="mt-1 mb-12">Your cart is empty</p>
                  <div className="absolute left-[30%] bottom-5 md:static">
                    <Button
                      className="w-[169px] h-[40px] "
                      variant="contained"
                      color={"primary"}
                      onClick={() => {
                        navigate("/product-list");
                        setModalOpen(!modalOpen);
                      }}
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="overflow-auto secondary-scroll md:px-5 h-[60%] md:h-[50%] lg:h-[45%] xl:h-[55%]">
            {cart.map((Items) => (
              <div className="px-8 py-4" key={Items.id}>
                <CartItemCard Items={Items} />
              </div>
            ))}
          </div>

          <CartTotalCard
            setModalOpen={setModalOpen}
            cartLength={cart.length}
            subTotal={subTotal}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default Cart;
