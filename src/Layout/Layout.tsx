import { Link, Outlet } from "react-router-dom";
// import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PlaceIcon from "@mui/icons-material/Place";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Layout = () => {
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const count = useSelector(({ basket }) => basket.cartQuantity);

  return (
    <>
      <section className="w-[90%] m-auto">
        <br /><br />
        <div className="bg-white fixed top-0 left-0 right-0 h-[9vh] items-center opacity-100 z-[200] blur-effect-theme">
        <div className="w-[90%] m-auto p-[15px] flex justify-between items-center">
          <div>
            <Link to={"/"}>
              <h1 className="text-[40px] font-bold">Online Shop</h1>
            </Link>
          </div>

          <div className="flex">
            <input
              className="border-2 rounded-md p-[3px] w-[300px]"
              type="text"
              placeholder="Search"
            />
            <button className="w-[50px] rounded-md bg-[black]">
              <SearchIcon className="text-[white]" />
            </button>
          </div>

          <div className="flex justify-between w-[150px]">
            <Link to={"/Korzina"}>
              <div className="items-center cursor-pointer ">
                <h1 className="text-center">
                  <StyledBadge badgeContent={count} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </h1>
                <h1 className="">Кoрзина</h1>
              </div>
            </Link>

            <div className="cursor-pointer">
              <h1 className="text-center">
                <PlaceIcon className="" />
              </h1>

              <h1>mesto</h1>
            </div>
          </div>
        </div>
        </div>
        <br />
        <br />
        <br />
        <Outlet />
        <br />
        <br />
        <br />
        <div className="flex justify-between">
          <div>
            <Link to={"/"}>
              <h1 className="text-[30px] font-bold">Online Shop</h1>
            </Link>
          </div>

          <div>
            <ul className="flex gap-6">
              <li className="text-[17px] hover:text-[#585eff]">
                <InstagramIcon />
              </li>
              <li className="text-[17px] hover:text-[#585eff]">
                <TelegramIcon />
              </li>
              <li className="text-[17px] hover:text-[#585eff]">
                <GitHubIcon />
              </li>
            </ul>
            <br />
            <div>
              <input
                type="text"
                className="p-[6px] rounded-xl"
                placeholder="Send..."
              />
              <IconButton>
                <SendIcon />
              </IconButton>
            </div>
          </div>

          <div>
            <ul>
              <Link to={"/"}>
                <li className="text-[19px] cursor-pointer hover:text-[#585eff]">
                  Phone
                </li>
              </Link>
              <br />
              <Link to={"/"}>
                <li className="text-[19px] cursor-pointer hover:text-[#585eff]">
                  About
                </li>
              </Link>
              <br />
              <Link to={"/"}>
                <li className="text-[19px] cursor-pointer hover:text-[#585eff]">
                  Contact
                </li>
              </Link>
              <br />
              <Link to={"/"}>
                <li className="text-[19px] cursor-pointer hover:text-[#585eff]">
                  Shops
                </li>
              </Link>
            </ul>
          </div>

          <div>
            <ul className="">
              <li className="text-[19px] cursor-pointer hover:text-[#585eff]">
                +992-987-65-95-90
              </li>
              <br />
              <li className="text-[19px] cursor-pointer hover:text-[#585eff]">
                Technology
              </li>
              <br />
              <li className="text-[19px] cursor-pointer hover:text-[#585eff]">
                Telegram
              </li>
              <br />
              <li className="text-[19px] cursor-pointer hover:text-[#585eff]">
                Modile
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default Layout;
