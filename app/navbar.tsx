"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useScroll } from "./components/scrollContext";
import menuIcon from "../public/menu.svg";
import { MenuIcon } from "./components/menuIcon";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { aboutRef, projectsRef } = useScroll();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const menuItems = ["About", "Projects", "Contact"];

  return (
    <Navbar
      className="py-6 z-50 sm::fixed md::fixed lg:fixed xl:fixed sm:px-20 md:px-24 lg:px-28 xl:px-32 bg-transparent"
      onMenuOpenChange={setIsMenuOpen}
      disableAnimation
    >
      <NavbarContent className="sm:hidden block px-8">
        <NavbarMenuToggle icon={MenuIcon} srOnlyText=" " />
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-12 underline underline-offset-8 mix-blend-difference"
        justify="center"
      >
        <NavbarItem>
          <Link
            className="focus:outline-none cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            <div className="">About</div>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="focus:outline-none cursor-pointer"
            onClick={() => scrollToSection(projectsRef)}
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="focus:outline-none cursor-pointer"
            onClick={() => scrollToSection(projectsRef)}
          >
            <div className="">Contact</div>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            ></Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
