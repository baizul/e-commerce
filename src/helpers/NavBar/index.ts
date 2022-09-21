import { Resources } from "../../config/Resources";
import { AiOutlineSearch, AiOutlineTrophy } from "react-icons/ai";
import { TbInfoCircle } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { FiTag } from "react-icons/fi";
export const NavBarData = [
  {
    id: "registerLogin",
    Label: "Register | Login",
    Image: BiUserCircle,
    to: "/",
    classToOverRide: "lg:ml-auto",
  },
  {
    id: "findAthlete",
    Label: "Find",
    Image: AiOutlineSearch,
    to: "/",
    classToOverRide: "",
  },
  {
    id: "shop",
    Label: "Shop",
    Image: FiTag,
    to: "/product-list",
    classToOverRide: "bg-nero bg-opacity-10 rounded-sm px-2 py-1",
  },
  {
    id: "top",
    Label: "Top 100",
    Image: AiOutlineTrophy,
    to: "/top",
    classToOverRide: "",
  },
  {
    id: "about",
    Label: "About",
    Image: TbInfoCircle,
    to: "/about-us",
    classToOverRide: "",
  }
];
