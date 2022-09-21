import Text from "../../../shared/Text";
import AddressForm from "../AddressForm";

interface Props {
  addresses?: {
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
  setAddress?: ({}) => void;
}

interface Address {
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
}
[];

const AddAddress = ({ addresses, setAddress }: Props) => {
  const addAddressHandle = (address: Address) => {
    setAddress(address);
  };

  return (
    <>
      <Text className="font-semibold text-md text-nero font-mulish mb-7 lg:mb-4 lg:text-2xl lg:font-extrabold ">
        Add New Shipping Address
      </Text>
      <AddressForm
        call="Add"
        addresses={addresses}
        setAddress={addAddressHandle}
      />
    </>
  );
};
export default AddAddress;
