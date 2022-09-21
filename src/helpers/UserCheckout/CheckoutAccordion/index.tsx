import ConfirmOrder from "../../../components/UserCheckout/CheckoutDetails/ConfirmOrder";
import PaymentMethods from "../../../components/UserCheckout/CheckoutDetails/PaymentMethods";
import DeliveryMethod from "../../../components/UserCheckout/CheckoutDetails/DeliveryMethod";
import ShippingAddress from "../../../components/UserCheckout/CheckoutDetails/ShippingAddress";

export const CheckoutAccordionData = [
  {
    id: "shippingAddress",
    title: "Shipping Address",
    Component: ShippingAddress,
  },
  {
    id: "deliveryMethod",
    title: "Delivery Method",
    Component: DeliveryMethod,
  },
  {
    id: "paymentMethod",
    title: "Payment Method",
    Component: PaymentMethods,
  },
  {
    id: "cnfOrder",
    title: "Confirm Your Order",
    Component: ConfirmOrder,
  },
];
