import {
  Button,
  CircularProgress,
  Divider,
  useMediaQuery,
} from "@mui/material";
import className from "classnames";
import { useState } from "react";
import { useMutation } from "react-query";
import { myInfoFormfields } from "../../../../helpers/Account";
import CustomSelect from "../../../shared/CustomSelect";
import CustomTooltip from "../../../shared/CustomTooltip";
import RedditTextField from "../../../shared/redditInput";
import { TooltipText } from "../TooltipText";
import { deleteAccountFn } from "../../../../services/Account";
import { useNavigate } from "react-router-dom";
type Props = {
  formik: any;
  readOnly: boolean;
  setReadOnly: (readOnly) => void;
  loading?: boolean;
  changePasswordScreen: boolean;
  setChangePasswordScreen: (changePasswordScreen: boolean) => void;
};

export const UpdateForm = ({
  formik,
  readOnly,
  setReadOnly,
  loading,
  setChangePasswordScreen,
}: Props) => {
  const isPhone = useMediaQuery("(max-width: 500px)");
  const [deleteAccount, setDeleteAccount] = useState<boolean>(false);
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(deleteAccountFn, {
    onSuccess: (response: any) => {
      setDeleteAccount(false);
      localStorage.removeItem("token");
      navigate("/");
    },
  });

  console.log("loading", loading);
  const handleDelete = () => mutate({});
  return (
    <form onSubmit={formik.handleSubmit}>
      {myInfoFormfields.map((item) => (
        <div key={item.id} className="flex justify-between">
          <div
            className={className(
              "!my-3 ",
              item.id === "password" ? "!w-1/2 lg:!w-60" : "!w-full lg:!w-96"
            )}
          >
            {item.id === "gender" ? (
              <CustomSelect
                id={item.id}
                label={item.label}
                name={item.name}
                menuItem={item.MenuItem}
                onBlur={formik.handleBlur}
                value={formik.values[item.id]}
                onChange={formik.handleChange}
                isGender={true}
              />
            ) : (
              <RedditTextField
                fullWidth
                label={item.id !== "password" && item.label}
                id={item.id}
                InputProps={{
                  readOnly: item.id === "password" ? true : readOnly,
                }}
                name={item.name}
                className={
                  item.id === "birthYear" &&
                  formik.values.birthYear === 0 &&
                  " !border-y-matterhorn-1 !border-x-matterhorn-1 !border-opacity-50"
                }
                size="small"
                variant="filled"
                onBlur={readOnly ? () => {} : formik.handleBlur}
                value={
                  item.id === "password" ? "00000000" : formik.values[item.id]
                }
                onChange={formik.handleChange}
                error={
                  formik.errors[item.id] && formik.touched[item.id]
                    ? true
                    : false
                }
                type={item.type}
                helperText={formik.touched[item.id] && formik.errors[item.id]}
              />
            )}
          </div>
          {item.id === "password" && (
            <Button
              variant="contained"
              onClick={() => setChangePasswordScreen(true)}
              type="submit"
              classes={{
                root: "!bg-black p-3  !mt-3 !h-10 !w-28 lg:!w-1/3 !text-base lg:!ml-12 !capitalize lg:!ml-0 lg:!mt-3",
              }}
            >
              Change
            </Button>
          )}
        </div>
      ))}

      {readOnly ? (
        <Button
          variant="contained"
          classes={{
            root: `${
              formik?.isValid && "!bg-black"
            } p-3 !mt-5 !h-10 !w-2/3 lg:!w-2/5 !text-base !capitalize`,
          }}
          disabled={!formik?.isValid}
          onClick={() => {
            readOnly && setReadOnly(false);
          }}
        >
          Edit
        </Button>
      ) : (
        <div className="flex items-center justify-between mt-5 ">
          <Button
            variant="text"
            classes={{
              root: "lg:!p-3 !w-2/5 !h-12 lg:!w-2/5 !text-base !capitalize !text-matterhorn-2",
            }}
            onClick={() => setReadOnly(true)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={!formik?.isValid}
            type="submit"
            classes={{
              root: "lg:!p-3 !w-3/5 lg:!w-2/5 !h-9 lg:!h-11 lg:!px-8 !text-base !capitalize",
            }}
          >
            {loading ? <CircularProgress className="!text-white" /> : "Save"}
          </Button>
        </div>
      )}
      <Divider className="!mt-24 !mb-8 h-5" />
      <CustomTooltip
        placement={isPhone ? "top" : "bottom"}
        open={deleteAccount}
        title={
          <TooltipText
            setDeleteAccount={setDeleteAccount}
            isLoading={isLoading}
            handleDelete={handleDelete}
          />
        }
        isFullArrow={true}
        arrow
      >
        <Button
          variant="contained"
          classes={{
            root: `${"!bg-black"} p-3 !mt-16 !mb-12 lg:!mt-12 !h-10 !w-full !text-base !capitalize`,
          }}
          onClick={() => {
            setDeleteAccount(!deleteAccount);
          }}
        >
          Delete My Account
        </Button>
      </CustomTooltip>
    </form>
  );
};
