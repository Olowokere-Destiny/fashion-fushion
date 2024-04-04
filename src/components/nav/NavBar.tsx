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
          <IoSearchOutline
            onClick={() => setIsSearchOpen(true)}
            className="cursor-pointer w-6 h-6"
            title="Search"
          />
          <Link href="/favourites" className={`cursor-pointer w-6 h-6  ${pathname === "/favourites" ? "text-blue" : ""}`}>
          <IoIosHeartEmpty
            className="cursor-pointer w-6 h-6"
            title="Favourites"
          />
          </Link>
          <Link href="/bag" className="">
            <IoBagOutline className={`cursor-pointer w-6 h-6  ${pathname === "/bag" ? "text-blue" : ""}`} title="Bag" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
