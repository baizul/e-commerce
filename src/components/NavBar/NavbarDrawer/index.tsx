import { Drawer } from "@mui/material";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { Resources } from "../../../config/Resources";
import { NavBarData } from "../../../helpers/NavBar";
import SignIn from "../../LoginOrSignUp";
import Text from "../../shared/Text";

interface Props {
  menuDrawerActive: boolean;
  setMenuDrawerActive: (menuDrawerActive: boolean) => void;
}

const NavbarDrawer = ({ setMenuDrawerActive, menuDrawerActive }: Props) => {
  return (
    <Drawer
      BackdropProps={{
        classes: {
          root: "!hidden",
        },
      }}
      classes={{
        root: "w-full lg:hidden !z-0 md:w-1/3 mt-14",
        paper: "!relative",
      }}
      anchor="left"
      open={menuDrawerActive}
    >
      <div className="w-screen h-screen bg-white md:w-full no-scrollbar ">
        <ul className="flex flex-col justify-center w-full py-12 pl-8 pr-4 space-y-4 top-50">
          <li
            onClick={() => setMenuDrawerActive(false)}
            className="flex items-center justify-between mb-2"
          >
            <div className="flex items-center space-x-1">
              <img
                src={Resources.images.Navbar.AthleticEstateHeaderIcon}
                alt="AthleticEstateHeaderIcon"
              />
              <Text className="text-2xl font-extrabold">MENU</Text>
            </div>
            <MdOutlineArrowBackIosNew size={24} strokeWidth={0} />
          </li>
          {NavBarData.map((items) => (
            <>
              {((items.id === "registerLogin" &&
                !localStorage.getItem("token")) ||
                items.id !== "registerLogin") && (
                <Link
                  to={items.to}
                  key={items.id}
                  onClick={() => items.to !== "/" && setMenuDrawerActive(false)}
                  className={`${items.classToOverRide} font-medium text-lg flex items-center space-x-4 text-matterhorn-2`}
                >
                  {items.id !== "registerLogin" &&
                    (items.Image ? (
                      <items.Image size={22} />
                    ) : (
                      <></>
                    ))}
                  {items.id === "registerLogin" ? (
                    <SignIn />
                  ) : (
                    <span>{items.Label}</span>
                  )}
                </Link>
              )}
            </>
          ))}
        </ul>
      </div>
    </Drawer>
  );
};

export default NavbarDrawer;
