import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine, RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Img from "../lazyLoadImage/Img";

const Footer = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white bg-primary text-primary-foreground py-4">
      <ContentWrapper>
        <div className="flex justify-between flex-wrap">
          <ul className="mx-2 my-2 sm:w-1/3 lg:w-1/6">
            <span className="font-bold text-xl">Exclusive</span>
            <li className="my-2 text-lg">Subscribe</li>
            <li className="my-2 text-sm">Get 10% off on your first order</li>
            <li className="flex border text-sm border-white items-center my-2">
              <input
                className="dark:bg-gray-800 bg-primary text-primary-foreground"
                type="text"
                placeholder="Enter your email"
              />
              <PiPaperPlaneRightLight className="dark:bg-gray-800 text-white bg-primary mx-2" />
            </li>
          </ul>
          <ul className="mx-2 my-2 sm:w-1/3 lg:w-1/6">
            <span className="text-lg font-semibold">Support</span>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>exclusive@gmail.com</li>
            <li>+91 696-969-6969</li>
          </ul>
          <ul className="mx-2 my-2 sm:w-1/3 lg:w-1/6">
            <span className="text-lg font-semibold  hover:text-red-600 transition-all ease-in-out duration-300 cursor-pointer">
              Account
            </span>
            <li className="my-2 text-sm hover:text-red-600 transition-all ease-in-out duration-300">
              <Link to="/account">My Account</Link>
            </li>
            <li className="my-2 text-sm hover:text-red-600 transition-all ease-in-out duration-300">
              <Link to="/login">Login / Register</Link>
            </li>
            <li className="my-2 text-sm hover:text-red-600 transition-all ease-in-out duration-300">
              <Link to="/bag">Cart</Link>
            </li>
            <li className="my-2 text-sm hover:text-red-600 transition-all ease-in-out duration-300">
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="my-2 text-sm hover:text-red-600 transition-all ease-in-out duration-300">
              Shop
            </li>
          </ul>
          <ul className="mx-2 my-2 sm:w-1/3 lg:w-1/6">
            <span className="text-lg font-semibold">Quick Link</span>
            <li className="my-2 text-sm">Privacy Policy</li>
            <li className="my-2 text-sm">Terms Of Use</li>
            <li className="my-2 text-sm">FAQ</li>
            <li className="my-2 text-sm">Contact</li>
          </ul>
          <ul className="mx-2 my-2 sm:w-1/3 lg:w-1/6">
            <span className="text-lg font-semibold">Download App</span>
            <li>Save $3 with App New User Only</li>
            <li>
              <div className="logos flex">
                <Img className="w-[100px] " src="/qr/qr.png" alt="" />
                <Img width={"100px"} src="/qr/dwnld.png" alt="" />
              </div>
            </li>
            <li>
              <div className="flex justify-between my-2 items-center">
                <span className="icon">
                  <BiLogoFacebook
                    className="cursor-pointer hover:text-red-500 hover:shadow-3xl rounded-full transition-all ease-in-out duration-300"
                    size={"24px"}
                  />
                </span>
                <RiTwitterXLine
                  className="cursor-pointer hover:text-red-500 hover:shadow-3xl rounded-full transition-all ease-in-out duration-300"
                  size={"24px"}
                />
                <FaInstagram
                  className="cursor-pointer hover:text-red-500 hover:shadow-3xl rounded-full transition-all ease-in-out duration-300 p-0.5"
                  size={"32px"}
                />
                <RiLinkedinLine
                  className="cursor-pointer hover:text-red-500 hover:shadow-3xl rounded-full transition-all ease-in-out duration-300"
                  size={"24px"}
                />
              </div>
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
