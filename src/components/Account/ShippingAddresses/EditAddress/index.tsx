import { useEffect, useState } from "react";
import Text from "../../../shared/Text";
import AddressForm from "../AddressForm";

interface Props {
  editAddressesData: {
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

  addresses: {
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

  setAddress: ({}) => void;
  addressId: string;
  setEditAddressesData: (val: any) => void;
}

const EditAddress = ({
  addresses,
  addressId,
  setAddress,
  editAddressesData,
  setEditAddressesData,
}: Props) => {
  const [editAddress, setEditAddress] = useState(null);

  useEffect(() => {
    const addressIndex = editAddressesData.findIndex(
      (obj) => obj.id === addressId
    );
    const add = [...editAddressesData];
    const address = add[addressIndex];
    setEditAddress(address);
  }, []);

  const updateAddressHandle = (addresses: Props) => {
    setAddress(addresses);
    cancelHandle();
  };

  const cancelHandle = () => {
    const addressIndex = editAddressesData.findIndex(
      (obj) => obj.id === addressId
    );
    const editAddr = [...editAddressesData];
    editAddr.splice(addressIndex, 1);
    setEditAddressesData(editAddr);
  };

  return (
    <>
      <Text className="font-semibold text-md text-nero font-mulish mb-7 lg:mb-4 lg:text-2xl lg:font-extrabold ">
        Edit Shipping Address
      </Text>
      <AddressForm
        call="Edit"
        address={editAddress}
        addresses={addresses}
        setAddress={updateAddressHandle}
        addressId={addressId}
        cancelHandle={cancelHandle}
      />
    </>
  );
};

export default EditAddress;
