import { useState, useEffect } from "react";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { Resources } from "../../config/Resources";
import NavbarDrawer from "./NavbarDrawer";
import { NavBarData } from "../../helpers/NavBar";
import { VscBell } from "react-icons/vsc";
import SignIn from "../LoginOrSignUp";
import Text from "../shared/Text";
import Cart from "../Cart";
import { useSelector } from "react-redux";
import { IReducer } from "../../redux/Reducers";
import AthleteFinderModal from "../AthleteFinderModal";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const NavBar = () => {
  const [menuDrawerActive, setMenuDrawerActive] = useState(false);
  const [finderModalOpen, setFinderModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const cartLength = useSelector((state: IReducer) => state.cart.length);
  const [headerMenu, setHeaderMenu] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [localStorage.getItem("token")]);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    setIsLogin(false);
  };
  const handleClick = (event) => {
    setHeaderMenu(event.currentTarget);
  };
  const handleClose = () => {
    setHeaderMenu(null);
  };
  return (
    <>
      {finderModalOpen && (
        <AthleteFinderModal
          finderModalOpen={finderModalOpen}
          setFinderModalOpen={setFinderModalOpen}
        />
      )}
     
      <NavbarDrawer
        menuDrawerActive={menuDrawerActive}
        setMenuDrawerActive={setMenuDrawerActive}
      />
      <nav className="sticky top-0 z-20 flex items-center justify-between w-full p-3 space-x-2 bg-white shadow-md lg:px-14 ">
        <div className="flex items-center">
          <Button
            classes={{ root: "lg:!hidden text-black" }}
            onClick={() => setMenuDrawerActive(!menuDrawerActive)}
          >
            <AiOutlineMenu className="text-black" stroke="1" size={20} />
          </Button>
          <Link to="/">
            <img
              src={Resources.images.Navbar.AthleticEstateHeaderIcon}
              alt="AthleticEstateHeaderIcon"
            />
          </Link>
        </div>
        <div className="hidden w-full font-light lg:flex md:hidden">
          <ul className="flex w-full mr-8 space-x-12">
            {NavBarData.filter((data) => data.id !== "registerLogin").map(
              ({ Label, to, id, Image, classToOverRide }) => {
                return (
                  <NavLink
                    to={to}
                    key={id}
                    className={({ isActive }) =>
                      classNames(
                        "space-x-2 font-medium text-sm flex items-center hover:text-crimson",
                        classToOverRide,
                        isActive ? "text-crimson" : "text-eclipse-1"
                      )
                    }
                    onClick={
                      id === "findAthlete"
                        ? () => setFinderModalOpen(true)
                        : id === "joinAe"
                        ? () => {}
                        : () => {}
                    }
                  >
                    {Image && id === "findAthlete" && <Image size={22} />}

                    <Text>{Label}</Text>
                  </NavLink>
                );
              }
            )}
          </ul>
          {isLogin ? (
            <>
              <div
                className={`gap-x-4 ml-auto ${
                  isLogin ? "w-fit" : "w-1/5"
                }  font-medium text-sm flex items-center justify-center text-eclipse-1 cursor-pointer`}
              >
                <VscBell size={34} />
                <img src={Resources.images.Navbar.Transport} alt="transport" />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center ml-auto mr-6 text-sm font-medium w-fit text-eclipse-1">
              <SignIn />
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <IconButton size="small" onClick={() => setModalOpen(!modalOpen)}>
            <Badge badgeContent={cartLength} color="error">
              <FiShoppingCart className="stroke-1" size={22} />
            </Badge>
          </IconButton>
          {isLogin && (
            <>
              <div
                className="w-full h-full !cursor-pointer"
                onClick={handleClick}
              >
                <Avatar classes={{ root: "!h-8 !w-8" }} />
              </div>
              <Menu
                id="basic-menu"
                anchorEl={headerMenu}
                open={Boolean(headerMenu)}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => navigate("/account")}>
                  Account
                </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </div>
      </nav>
      {modalOpen && <Cart modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </>
  );
};

export default NavBar;
