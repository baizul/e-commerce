import { useFormik } from "formik";
import {
  myInfoInitialValues,
  ProfileDataValidationSchema,
} from "../../../helpers/Account";
import { useSelector, shallowEqual } from "react-redux";
import { ChangeEvent, useState } from "react";
import { validImageFormats } from "../../../config/Constants";
import { updateUserDetails } from "../../../services/Account";
import { uploadFile } from "../../../services/DocumentUpload";
import { IReducer } from "../../../redux/Reducers";
import { useMutation, useQueryClient } from "react-query";
import { UpdateForm } from "./UpdateForm";
import { ImageUpload } from "./ImageUpload";
import ChangedPassword from "./ChangedPassword";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const MyInformation = (props: Props) => {
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [image, setImage] = useState<File | null>();
  const [changePasswordScreen, setChangePasswordScreen] = useState(false);
  const userData = useSelector(
    (state: IReducer) => state.user_data,
    shallowEqual
  );

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(updateUserDetails, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("currentUser");
      setImage(null);
      setReadOnly(true);
    },
  });

  const formik = useFormik({
    initialValues: myInfoInitialValues(userData || {}),
    validationSchema: ProfileDataValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      onFormSubmit(values);
    },
  });

  const fileChangedHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (validImageFormats.includes(file.type)) {
      setImage(file);
    } else {
      console.log("Error in file upload | MyInformation");
    }
  };

  const onFormSubmit = async (values: any) => {
    let user_data = { ...values };
    if (image) {
      const imageURL = await uploadFile(image);
      mutate({ ...user_data, profileImageURL: imageURL });
    } else {
      mutate(user_data);
    }
  };

  return changePasswordScreen ? (
    <ChangedPassword
      changePasswordScreen={changePasswordScreen}
      setChangePasswordScreen={setChangePasswordScreen}
    />
  ) : (
    <div className="flex flex-col items-center my-12 lg:justify-center lg:flex-row">
      <ImageUpload
        readOnly={readOnly}
        formik={formik}
        fileChangedHandle={fileChangedHandle}
        userData={userData}
        image={image}
        setImage={setImage}
        isAeMemberShip={false}
      />
      <div className="flex flex-col items-center w-4/5 lg:ml-20 md:ml-0 lg:w-1/3 lg:mt-16">
        <UpdateForm
          formik={formik}
          readOnly={readOnly}
          setReadOnly={setReadOnly}
          loading={isLoading}
          changePasswordScreen={changePasswordScreen}
          setChangePasswordScreen={setChangePasswordScreen}
        />
      </div>
    </div>
  );
};

export default MyInformation;
