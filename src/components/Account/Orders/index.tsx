import { orderDetails } from "../../../helpers/Account/Orders";
import Text from "../../shared/Text";
import classNames from "classnames";
import { MdLocalOffer } from "react-icons/md";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-10 space-y-8 pt-7 md:pt-10 md:pb-3 md:px-16 md:space-y-11">
      {orderDetails.map(
        ({ order_id, order_date, products, delivery_status, ...rest }) => (
          <div
            key={order_id}
            className="pt-4 md:pt-7 pl-3 xsm:pl-6 md:!pl-20 border border-whiteSmoke shadow-base"
          >
            <Text className="text-lg md:text-2xl">
              <span className="font-bold">Order </span>
              <span className="font-normal">{order_id}</span>
            </Text>

            <Text className="text-xs md:text-lg">
              <span className="font-bold">Order Date: </span>
              <span className="font-normal">{order_date}</span>
            </Text>

            <div className="flex flex-col pl-0 pr-3 lg:flex-row lg:justify-between 2xl:justify-start py-7 md:py-11 xsm:pr-6">
              <div className="w-full lg:w-1/2 xl:w-fit">
                <div
                  className={classNames(
                    "overflow-y-auto",
                    products.length > 3
                      ? "h-screen-7/10 pr-10 customized-scroll"
                      : "h-auto"
                  )}
                >
                  {products.map(
                    (
                      { id, image_url, name, size, color, qty, base_price },
                      index
                    ) => (
                      <div
                        key={id}
                        className={classNames(
                          "flex pb-5 md:pl-5 space-x-6 md:space-x-10 border-b border-b-gainsboro",
                          index ? "pt-5" : "pt-1"
                        )}
                      >
                        <img className="h-20 w-14" src={image_url} alt={name} />
                        <div className="flex flex-col sm:flex-row sm:space-x-6">
                          <ul className="font-medium text-md">
                            <li className="font-bold">{name}</li>
                            <li>
                              <span className="inline-block w-12">Size:</span>
                              {size}
                            </li>
                            <li>
                              <span className="inline-block w-12">Color:</span>
                              {color}
                            </li>
                            <li>
                              <span className="inline-block w-12">Qty:</span>
                              {qty}
                            </li>
                          </ul>
                          <Text className="pt-2 font-bold sm:pt-0 text-tiny xsm:text-md">{`$${base_price}`}</Text>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="py-8 space-y-6 font-semibold">
                  <div className="flex items-center justify-between">
                    <div>Shipping</div>
                    <div>{rest.base_shipping_amount || "FREE"}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Tax</div>
                    <div>${rest.base_tax_amount}</div>
                  </div>
                  {rest.promo_code && (
                    <div className="flex items-center justify-between font-bold text-crimson">
                      <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-black">
                            Promo Code:
                          </span>
                          <div className="flex items-center space-x-2">
                            <MdLocalOffer size={20} />
                            {rest.promo_code}
                          </div>
                        </div>
                      </div>
                      <div>-$ {rest.promo_code_discount}</div>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-lg font-bold">
                    <div>Subtotal</div>
                    <div>${rest.base_sub_total}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:justify-around xl:justify-evenly sm:w-full lg:w-1/3 xl:w-7/12 lg:space-y-5 xl:space-y-0">
                <dl>
                  <dt className="text-xl font-bold">Shipping Details</dt>
                  <dd className="pt-2 text-base font-medium whitespace-pre-wrap">
                    {rest.shipping_address}
                  </dd>
                  <dt className="text-xl font-bold pt-7">Payment Method</dt>
                  <dd className="pt-2 text-base font-medium">
                    {rest.payment_method}
                  </dd>
                </dl>

                <div>
                  <dl>
                    <dt className="text-xl font-bold">Billing Details</dt>
                    <dd className="pt-2 text-base font-medium whitespace-pre-wrap">
                      {rest.billing_address}
                    </dd>
                    <dt className="text-xl font-bold pt-7">Delivery Method</dt>
                    <dd className="pt-2 text-base font-medium">
                      {delivery_status}
                    </dd>
                  </dl>
                  {delivery_status === "In Route" && (
                    <Button
                      variant="contained"
                      className="!block w-44 !mt-3.5 !mb-2.5"
                      onClick={() => navigate("/tracking-page")}
                    >
                      Track Order
                    </Button>
                  )}
                  {delivery_status !== "Delivered - Item Returned" && (
                    <Button
                      variant="contained"
                      className={classNames(
                        "!block w-44 !bg-nero",
                        delivery_status !== "In Route" && "!mt-3.5"
                      )}
                      onClick={() => navigate("/product-list")}
                    >
                      Order Again
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Orders;
