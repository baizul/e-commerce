import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import {
  addressesData,
  updateAdresses,
} from "../../../mockData/Account/ShippingAddresses";
import Text from "../../shared/Text";
import AddAddress from "./AddAddress";
import EditAddress from "./EditAddress";
import ViewAddress from "./ViewAddress";

type Address = {
  id?: string;
  name?: string;
  email?: string;
  address?: string;
  apartment?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  defaultAddress?: boolean;
  active: boolean;
}[];

const ShippingAddresses = () => {
  const [addresses, setAddresses] = useState([...addressesData]);
  const [isAddAddress, setAddAddresses] = useState(false);
  const [editAddressesData, setEditAddressesData] = useState([]);

  useEffect(() => {
    //GET ADDRESS API
    setAddresses(addressesData);
  }, []);

  useEffect(() => {
    updateAdresses(addresses);
  }, [addresses]);

  const editAddressHandle = (addressId: string) => {
    // const [activeAddress, setActiveAddress] = useState();
    const addressIndex = addresses.findIndex((obj) => obj.id === addressId);
    const add = [...addresses];
    const edit_AddressesData = [...editAddressesData];
    edit_AddressesData.push(add[addressIndex]);
    setEditAddressesData(edit_AddressesData);
  };

  const removeAddressHandle = (addressId: string) => {
    const addressIndex = addresses.findIndex((obj) => obj.id === addressId);
    const addr = [...addresses];
    addr.splice(addressIndex, 1);
    setAddresses(addr);
  };

  const defaultAddressHandle = (addressId: string) => {
    const addr = addresses.map((address) =>
      addressId === address.id
        ? { ...address, defaultAddress: !address.defaultAddress }
        : { ...address, defaultAddress: false }
    );
    setAddresses(addr);
  };

  const activeAddressHandle = (addressId: string) => {
    const addr = addresses.map((address) =>
      addressId === address.id
        ? { ...address, active: true }
        : { ...address, active: false }
    );
    setAddresses(addr);
  };

  const setAddress = (address: Address) => {
    const addr = [...address];
    setAddresses(addr);
    setAddAddresses(false);
  };

  return (
    <div className="p-10 lg:mt-4 lg:mx-24 lg:flex">
      <div className="w-full lg:relative">
        {addresses.length !== 0 && editAddressesData.length === 0 && (
          <Text className="font-semibold text-md text-nero font-mulish mb-7 lg:mb-5 lg:text-2xl lg:font-extrabold ">
            Saved Shipping Address
          </Text>
        )}

        {addresses.map((address) =>
          editAddressesData.find(({ id }) => id === address.id) ? (
            <div className="lg:w-3/4 mb-7" key={address.id}>
              <EditAddress
                editAddressesData={editAddressesData}
                addresses={addresses}
                setAddress={setAddress}
                addressId={address.id}
                setEditAddressesData={setEditAddressesData}
              />
            </div>
          ) : (
            <div className="mb-5" key={address.id}>
              <ViewAddress
                address={address}
                editAddressHandle={editAddressHandle}
                removeAddressHandle={removeAddressHandle}
                defaultAddressHandle={defaultAddressHandle}
                activeAddressHandle={activeAddressHandle}
              />
            </div>
          )
        )}

        {isAddAddress || addresses.length === 0 ? (
          <div className="lg:w-3/4">
            <AddAddress addresses={addresses} setAddress={setAddress} />
          </div>
        ) : (
          <div className="lg:absolute lg:top-0 lg:right-0">
            <Button
              variant="contained"
              color="secondary"
              className="text-base !font-semibold !font-mulish !capitalize !leading-5 !h-10 w-44 !mt-7 lg:!mt-0"
              onClick={() => setAddAddresses(true)}
            >
              Add Address
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingAddresses;
