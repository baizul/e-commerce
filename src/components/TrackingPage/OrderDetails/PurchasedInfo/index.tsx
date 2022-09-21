import { trackingPageData } from "../../../../helpers/TrackingPage";
import { orderDetailsData } from "../../../../mockData/TrackingPage";
import OrderCard from "../OrderCard";
import OrderAmount from "../OrderAmount";
import ShippingDetails from "../ShippingDetails";
import TrackCard from "../TrackCard";

const PurchasedInfo = () => {
  return (
    <div className="lg:flex lg:w-9/10 lg:mx-auto">
      <div className="lg:w-5.5/12">
        <div className="lg:w-9/10 lg:mx-auto">
          {orderDetailsData.map(
            ({ id, image, name, size, color, quantity, price }) => (
              <OrderCard
                key={id}
                image={image}
                name={name}
                size={size}
                color={color}
                quantity={quantity}
                price={price}
              />
            )
          )}
        </div>
        <div>
          <OrderAmount />
        </div>
      </div>
      <div className="lg:w-6.5/12">
        <div>
          <ShippingDetails />
        </div>
        <div>
          <TrackCard />
        </div>
      </div>
    </div>
  );
};

export default PurchasedInfo;
