import {
  AddNewShippingFormFields,
  AddressFormValidationSchema,
  addressInitialValues,
} from "../../../../helpers/Account/ShippingAddresses";
import RedditTextField from "../../../shared/redditInput";
import Text from "../../../shared/Text";
import { useFormik } from "formik";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CustomSelect from "../../../shared/CustomSelect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import Form from "./Form";

interface Props {
  address?: {
    id?: string;
    name: string;
    email: string;
    address: string;
    apartment: string;
    city: string;
    state: string;
    zipCode: string;
    defaultAddress: boolean;
    active: false;
  };
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
  call?: string;
  addressId?: string;
  cancelHandle?: () => void;
}

const AddressForm = ({
  address,
  addresses,
  setAddress,
  call,
  addressId,
  cancelHandle,
}: Props) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: addressInitialValues(address),
    validationSchema: AddressFormValidationSchema,
    onSubmit: async (values) => {
      switch (call) {
        case "Add":
          const value = {
            ...values,
            id: (Date.now()).toString()
          }
          
          let add_addr = [...addresses]
          if(values.defaultAddress){
            add_addr = add_addr.map((address)=> {return {...address, defaultAddress:false}})
          }

          const addressData = [...add_addr, value];
          setAddress(addressData);
          break;
        case "Edit":
          const addressIndex = addresses.findIndex(
            (obj) => obj.id === addressId
          );
          
          let edit_addr = [...addresses]
          if(values.defaultAddress){
            edit_addr = edit_addr.map((address)=> address.id === values.id ? {...address, defaultAddress:true} : {...address, defaultAddress:false})
          }

          const addr = [...edit_addr];
          addr[addressIndex] = values;
          setAddress(addr);
          break;
      }
    },
  });

  return (
    <>
      <Form formik={formik}/>
      <div>
        {call === "Edit" && (
          <Button
            variant="text"
            className="w-44 !mt-8 !h-10 !capitalize !text-base !font-semibold !font-mulish !mr-3"
            onClick={() => cancelHandle()}
            color="secondary"
          >
            Cancel
          </Button>
        )}

        <Button
          variant="contained"
          className="w-44 !mt-8 !h-10 !capitalize !text-base !font-semibold !font-mulish"
          onClick={() => formik.handleSubmit()}
          color="primary"
        >
          Save
        </Button>
      </div>
    </>
  );
};
export default AddressForm;
