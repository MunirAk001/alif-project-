import React, { useEffect, useState } from "react";
import Switcher from "../components/Swicher";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../assets/hhhhh.jpeg";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import SearchIcon from "@mui/icons-material/Search";

import "../App.css";
import { useDispatch } from "react-redux";
import { getData } from "../counters/counter";

// import { darkMode, setDarkMode } from "../Pages/Home/Home";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { search, setSearch } from "../Pages/Home/Home";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 2,
    top: 2,
    padding: "0 4px",
  },
}));

export let Cnt;
export let setCnt;

const Layout = () => {
  // const handleDarkModeToggle = () => {
  //   setDarkMode(!darkMode);
  // };

  [Cnt, setCnt] = useState(0); // Export setCnt
  const [burger, setBurger] = useState(false);

  return (
    <div className="dark:bg-gray-900 dark:text-[white]">
      <div className="flex justify-between items-center  pt-4 border-b-[2px] dark:border-gray-900 pl-[100px] pr-[100px] sm:p-[10px] sticky top-0 z-10 dark:bg-gray-900 bg-[white]">
        <div className="sm:block hidden sm:w-[10%]">
          <IconButton onClick={() => setBurger(true)}>
            <MenuIcon />
          </IconButton>
        </div>
        <Link to={"/"}>
          <div className=" sm:w-[30%]    h-[60px]  flex  items-center  w-[40%] ">
            <img className="h-[100%]  " src={logo} alt="" />

            <p className="h-[100%] w-[52%]   text-[25px] font-semibold  flex justify-between items-center  ">
              alif <span className="font-normal">shop</span>
            </p>
          </div>
        </Link>

        <div className="flex gap-[30px] bg-[whitesmoke]  mr-5 w-[70%] rounded-lg items-center sm:hidden">
          <div className="search w-[100%] m-[auto] dark:bg-gray-700    rounded-lg sm:hidden ">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="What are you looking for?"
              className="w-[90%] dark:bg-gray-700 dark:text-[white] bg-transparent  text-[gray] h-[50px] text-[18px] font-[400] rounded-lg pl-[10px]  outline-none"
              type="search"
            />
            <SearchIcon sx={{ width: "5%" }} />
          </div>
        </div>

        <div className="flex w-[10%] dark:text-white  sm:w-[30%] justify-center items-center">
          <div className=" sm:w-[30%] m-[auto] gap-[30px] flex">
            {/* <Link to={"/registration"}> */}
            <h1 className="h-[40px] w-[40px]  text-[20px]  pl-2 pt-[2px] rounded-full font-[400] hover:bg-gray-100">
              <ExitToAppIcon sx={{ color: "#fbb64e" }} />
            </h1>
            {/* </Link> */}

            {
              <Link to={"/korzina"}>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={Cnt} color="secondary">
                    <ShoppingCartIcon sx={{ color: "#fbb64e" }} />
                  </StyledBadge>
                </IconButton>
              </Link>
            }

            <div onClick={""} className=" mt-[7px]">
              <Switcher />
            </div>
          </div>
        </div>
      </div>
      <Outlet />

      <div className="p-[20px] dark:bg-gray-900 bg-[black] border-t-[1px] border-[gray]">
        <h1 className="text-[gray] text-center ">
          Copyright Rimel 2022. All right reserved
        </h1>
      </div>
    </div>
  );
};

export default Layout;
