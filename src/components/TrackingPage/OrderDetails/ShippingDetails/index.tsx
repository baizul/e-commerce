import Text from "../../../shared/Text";

const ShippingDetails = () => {
  return (
    <div className="mx-auto mt-5 w-9/10 mb-14 lg:relative lg:bottom-2">
      <div className="lg:flex">
        <div className="lg:w-3/5">
          <Text className="mb-4 text-xl font-bold font-mulish text-nero">
            Shipping Details
          </Text>
          <Text className="text-base font-medium font-mulish text-nero">
            <span>
              Ashley James <br /> 123456 Applewood Lane <br /> New York, New
              York, 10001 <br /> Phone: 123-235-1234
            </span>
          </Text>
        </div>
        <div className="lg:w-2/5">
          <Text className="mt-8 mb-4 text-xl font-bold lg:mt-0 font-mulish text-nero">
            Billing Address
          </Text>
          <Text className="text-base font-medium font-mulish text-nero">
            <span>
              Ashley James <br /> 123456 Applewood Lane <br /> New York, New
              York, 10001 <br /> Phone: 123-235-1234
            </span>
          </Text>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-3/5">
          <Text className="mt-8 mb-4 text-xl font-bold font-mulish text-nero">
            Payment Method
          </Text>
          <Text className="text-base font-medium font-mulish text-nero">
            Visa ending in 8764
          </Text>
        </div>
        <div className="lg:w-2/5">
          <Text className="mt-8 mb-4 text-xl font-bold font-mulish text-nero">
            Delivery Method
          </Text>
          <Text className="text-base italic font-medium font-mulish text-nero">
            In Route
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
