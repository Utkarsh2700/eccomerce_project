import { Separator } from "@radix-ui/react-separator";
import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser, CiStar, CiLogout } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaHamburger, FaMoon, FaSun } from "react-icons/fa";
import "../../index.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
import Wishlist from "../wishlist/Wishlist";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Header = () => {
  const navigate = useNavigate();
  // updating the the no of products in header
  const cart = useSelector((store) => store.cart);
  const wishlist = useSelector((store) => store.wishlist);
  console.log(wishlist);
  // console.log("bag contains", cart.items);
  // console.log("length", cart.items.length);
  // Icons
  const sunIcon = useRef(null);
  const moonIcon = useRef(null);

  //Theme vars

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("prefers-color-scheme: dark").matches;

  // Icon toggle
  const iconToggle = () => {
    moonIcon.current.classList.toggle("display-none");
    sunIcon.current.classList.toggle("display-none");
  };

  // Initial theme check

  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      moonIcon.current.classList.add("display-none");
      return;
    }
    // sunIcon.classList.add("display-none");
    sunIcon.current.classList.add("display-none");
  };

  // Manual Theme Switch

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      iconToggle();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
  };

  // call theme switch on clicking buttons
  // in their individual buttons //

  // invoke theme check on initial load
  useEffect(() => {
    themeCheck();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.log("Error logging out:", error.message);
    }
  }

  const [query, setQuery] = useState("");
  const searchOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${query}`);
    }
  };
  return (
    <header>
      <div className="dealsHeader bg-black text-white flex justify-evenly w-full text-sm h-[30px] items-center">
        <div className="dealBanner justify-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="shopNow underline px-2">ShopNow</span>
        </div>
        <div className="selectLang">
          <select className="bg-black justify-end border-none" name="" id="">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="french">French</option>
            <option value="Spansish">Spanish</option>
          </select>
        </div>
        <div className="mode">
          <span className="moonicon" ref={moonIcon}>
            <FaMoon className="moon cursor-pointer" onClick={themeSwitch} />
          </span>
          <span ref={sunIcon}>
            <FaSun className="sun cursor-pointer" onClick={themeSwitch} />
          </span>
        </div>
      </div>
      <nav className="dark:text-white dark:bg-black flex justify-evenly items-center h-[40px] border">
        <NavLink className="logo font-bold" to={"/"}>
          Exclusive
        </NavLink>
        <div className="navigationItems hidden md:flex justify-evenly">
          <span className="px-4">Home</span>
          <span className="px-4">Contact</span>
          <span className="px-4">About</span>
          <span className="px-4">Sign Up</span>
        </div>
        <div className="flex items-center h-full">
          <div className="searchBar  flex items-center dark:bg-black bg-[#EFF0F6] h-3/4">
            <input
              className="border-none text-xs h-full w-[150px] mr-9 dark:bg-black  bg-[#EFF0F6]"
              type="search"
              placeholder="What are you looking for?"
              name="searchbar"
              id=""
              onChange={searchOnChange}
              onKeyDown={handleKeyPress}
            ></input>
            <FiSearch />
          </div>
          <div className="navIcons flex items-center h-3/4">
            <span className="heart mx-2 relative">
              <span className="absolute -top-2 -right-2 text-white text-xs bg-red-600 rounded-full h-4 w-4 text-center">
                {wishlist.items.length}
              </span>
              <span className="flex items-center">
                <Wishlist />
              </span>
            </span>
            <span className="shopingCart mx-2 relative">
              <span className="absolute -top-2 -right-2 text-white text-xs bg-red-600 rounded-full h-4 w-4 text-center">
                {cart.items.length}
              </span>
              <NavLink to="/bag">
                <PiShoppingCartLight />
              </NavLink>
            </span>
            <span className="flex about mx-2 active:bg-red-600 rounded-full cursor-pointer">
              <DropdownMenu className="bg-gray-300 text-white opacity-25">
                <DropdownMenuTrigger className="transition-all ease-in-out duration-1000">
                  <CiUser />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black opacity-65  dark:opacity-85 text-white sm:mx-4 md:mx-0 blur-[0.5px] sm">
                  <DropdownMenuLabel className="flex items-center">
                    <span className="pr-2">
                      <CiUser />
                    </span>
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span className="pr-2">
                      <RiShoppingBag3Line />
                    </span>
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="mr-2">
                      <IoIosCloseCircleOutline />
                    </span>
                    My Cancellations
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="mr-2">
                      <CiStar />
                    </span>
                    My Reviews
                  </DropdownMenuItem>
                  <div className="logout" onClick={handleLogout}>
                    <DropdownMenuItem>
                      <span className="mr-2">
                        <CiLogout />
                      </span>
                      Logout
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </div>
          <div className="hamburger md:hidden absolute right-0">
            <Sheet>
              <SheetTrigger>
                <RxHamburgerMenu />
              </SheetTrigger>
              <SheetContent>
                <div className="p-4">
                  {/* <h2 className="text-xl font-bold">Your Wishlist</h2> */}
                  <ul className="list-none flex flex-col justify-center items-center">
                    <li className="px-4 py-4">Home</li>
                    <li className="px-4 py-4">Contact</li>
                    <li className="px-4 py-4">About</li>
                    <li className="px-4 py-4">Sign Up</li>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <Separator />
      </nav>
    </header>
  );
};

export default Header;
