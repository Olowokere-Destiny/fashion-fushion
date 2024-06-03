"use client";
import { GoArrowLeft } from "react-icons/go";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import icon from "../../assets/icons/icon.svg";
import Image from "next/image";
import navLinks from "@/utils/navlinks";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SidebarContent from "./SidebarContent";
import { arimo } from "@/utils/fontExports";
import SearchOverlay from "../SearchOverlay";
import { useAppSelector } from "@/redux/hooks";

function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleSearchOpen = () => {
    setIsSearchOpen(false);
  };
  const bag = useAppSelector((state) => state.state.bagState.items);
  const cart = useAppSelector((state) => state.state.cartState.items);
  useEffect(() => {
    document.body.style.overflowY = isSearchOpen ? "hidden" : "scroll";
  }, [isSearchOpen]);

  return (
    <>
      <SearchOverlay open={isSearchOpen} toggle={toggleSearchOpen} />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="md:hidden px-4 relative"
        style={{ width: "70%" }}
      >
        <Image
          width={100}
          height={100}
          src={icon}
          alt="icon"
          className="w-[8rem] lg:w-[10rem] absolute top-12"
          unoptimized
        />
        <GoArrowLeft
          className="w-5 h-5 md:w-6 md:h-6 absolute top-[1.5rem] text-[1.2rem] right-[1rem] text-brown cursor-pointer"
          onClick={toggleDrawer}
        />
        <SidebarContent toggle={toggleDrawer} />
      </Drawer>
      <div className="flex items-center py-6 justify-between px-[0.8rem] md:px-[3rem] lg:px-[5rem]">
        <div className="flex gap-x-3 md:w-1/2 lg:w-[45%] justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <RxHamburgerMenu
              className="md:hidden cursor-pointer"
              onClick={toggleDrawer}
            />
            <Link href="/">
              <Image
                width={100}
                height={100}
                src={icon}
                alt="icon"
                className="w-[8rem] lg:w-[10rem]"
                unoptimized
              />
            </Link>
          </div>
          <div
            className={`${arimo.className} flex items-center gap-x-4 text-[0.8rem]`}
          >
            {navLinks.map(({ link, href }) => (
              <Link
                key={href}
                href={href}
                className={`${
                  pathname === href ? "text-blue" : ""
                } hidden md:block font-[700] whitespace-nowrap`}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-4">

          <div
            onClick={() => setIsSearchOpen(true)}
            className="cursor-pointer md:hover:bg-[#efefef] md:flex md:items-center md:gap-x-1 md:px-2 md:py-1 md:rounded-[0.7rem]"
          >
            <IoSearchOutline className="w-6 h-6" title="Search" />
            <p className="hidden md:block font-semibold text-[0.75rem]">Search</p>
          </div>
          
          <Link href="/favourites" className={`${pathname === "/favourites" && "md:bg-[#efefef]"} relative md:hover:bg-[#efefef] md:flex md:items-center md:gap-x-1 md:px-2 md:py-1 md:rounded-[0.7rem]`}>
            {bag.length > 0 && (
              <span className="bg-blue absolute right-0 top-0 w-1 h-1 md:w-2 md:h-2 rounded-full"></span>
              )}
            <IoIosHeartEmpty
              className={`w-6 h-6  ${
                pathname === "/favourites" ? "text-blue" : ""
              }`}
              title="Favourites"
            />
              <p className="hidden md:block font-semibold text-[0.75rem]">Favourites</p>
          </Link>

          <Link href="/bag" className={`${pathname === "/bag" && "md:bg-[#efefef]"} relative md:hover:bg-[#efefef] md:flex md:items-center md:gap-x-1 md:px-2 md:py-1 md:rounded-[0.7rem]`}>
            {cart.length > 0 && (
              <span className="bg-blue absolute right-0 top-0 w-1 h-1 md:w-2 md:h-2 rounded-full"></span>
              )}
            <IoBagOutline
              className={`w-6 h-6  ${
                pathname === "/bag" ? "text-blue" : ""
              }`}
              title="Bag"
            />
              <p className="hidden md:block font-semibold text-[0.75rem]">Bag</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
