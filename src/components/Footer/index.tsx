import { footerLayout } from "../../helpers/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import Text from "../shared/Text";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="w-full tracking-wide text-center text-white bg-nero">
        <ul className="flex flex-col pt-10 space-y-5 md:flex-row md:justify-center md:space-y-0 md:space-x-8">
          {footerLayout.map(({ id, title, redirectTo }) => (
            <li
              key={id}
              className="text-lg font-normal md:text-xl"
            >
              <Link to={redirectTo}>{title}</Link>
            </li>
          ))}
          <li className="text-lg font-normal md:hidden">
            <Link to="/">Register/Log in</Link>
          </li>
        </ul>

        <div className="flex justify-center py-12 space-x-6 md:py-6">
          <a href="/">
            <AiFillFacebook size={28} />
          </a>
          <a href="/">
            <AiFillInstagram size={28} />
          </a>
          <a href="/">
            <AiFillLinkedin size={28} />
          </a>
        </div>

        <Text className="text-sm font-normal text-whiteSmoke">
          © 2022. All Rights Reserved.
        </Text>
        <Text className="pt-2 pb-10 text-sm font-normal text-whiteSmoke">
          <>
            <Link to="/privacy-policy"> Privacy Policy</Link> |
            <Link to="/terms"> Terms and Conditions</Link>
          </>
        </Text>
      </footer>
    </>
  );
};

export default Footer;
