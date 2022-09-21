import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import AccountSetup from "../../components/createPassword/AccountSetup";
import PasswordCreated from "../../components/createPassword/PasswordCreated";
import WelcomePage from "../../components/createPassword/WelcomePage";
import CustomModal from "../../components/shared/CustomModal";
import { Box } from "@mui/material";
const component = {
  welcomePage: WelcomePage,
  accountSetup: AccountSetup,
  passwordCreated: PasswordCreated,
};

const CreatePassword = () => {
  const [activeTabIndex, setactiveTabIndex] = useState("welcomePage");
  // const [open,setOpen]=useState("false");

  const handleSwitchtab = (id: string) => {
    setactiveTabIndex(id);
  };
  useEffect(() => {}, [activeTabIndex]);

  const RegisterComponent = component[activeTabIndex];

  return (
    <CustomModal
      open={true}
      classToOverride="!outline-0 !border-0 !bg-transparent"
      classes={{
        root: "bg-gray-400 overflow-y-scroll",
      }}
    >
      <Box className="!outline-0 !h-[85vh]">
        <RegisterComponent
          activeTabIndex={activeTabIndex}
          setactiveTabIndex={handleSwitchtab}
        />
      </Box>
    </CustomModal>
  );
};

export default CreatePassword;
