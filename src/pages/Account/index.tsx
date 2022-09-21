import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import { CustomTabs } from "../../components/shared/Tabs";
import MyInformation from "../../components/Account/MyInformation";
import { useState } from "react";
import { tabOptions, athleteTabOptions } from "../../helpers/Account";
import Text from "../../components/shared/Text";
import ShippingAddresses from "../../components/Account/ShippingAddresses";
import Orders from "../../components/Account/Orders";
import { ATHLETE_ID } from "../../config/Constants";
import { shallowEqual, useSelector } from "react-redux";
import { IReducer } from "../../redux/Reducers";

const AccountScreen = {
  myInformation: MyInformation,
  shippingAddresses: ShippingAddresses,
  orders: Orders
};

const Account = () => {
  const [value, setValue] = useState("myInformation");
  const ActiveSection = AccountScreen[value];

  const category_id = useSelector(
    (state: IReducer) => state.user_data.category_id,
    shallowEqual
  );
  return (
    <div className="lg:mb-12 lg:my-8">
      <div className="m-5 lg:m-0">
        <Link
          to="/product-list"
          className="text-xs lg:pl-16 lg:text-base text-greyMid1"
        >
          <KeyboardBackspaceIcon className="!w-6 !h-6 lg:!w-8 lg:!h-8" />
          Continue Shopping
        </Link>
        <Text className="text-3xl font-extrabold lg:mb-12 lg:pl-16 lg:text-5xl">
          Account
        </Text>
      </div>

      <div className="flex justify-center text-center lg:mx-auto lg:!mt-16  w-10/12 ">
        <CustomTabs
          value={value}
          setValue={setValue}
          tabOptions={
            category_id === ATHLETE_ID ? athleteTabOptions : tabOptions
          }
        />
      </div>
      <ActiveSection value={value} setValue={setValue} />
    </div>
  );
};

export default Account;
