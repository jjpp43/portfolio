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
  Divider,
} from "@nextui-org/react";
import { useClickScroll } from "./components/scrollContext";
import { MenuIcon } from "./components/menuIcon";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useReducer(
    (current) => !current,
    false
  );
  const { aboutRef, projectsRef, contactRef } = useClickScroll();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const menuItems = ["About", "Projects", "Contact"];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="relative pt-6 z-40 sm:fixed md:fixed lg:fixed xl:fixed sm:px-20 md:px-24 lg:px-28 xl:px-32 bg-transparent w-screen"
    >
      <div className="">
        {[...Array(33)].map((_, index) => (
          <div
            key={index}
            className="absolute h-[2px] w-full"
            style={{
              bottom: `${index * 2}px`, // Dynamic bottom
              backdropFilter: `blur(${Math.min(index * 0.2, 12)}px)`, // Gradual blur, max blur 12px
              backgroundColor: `rgba(0, 0, 0, ${Math.min(index * 0.02, 1)})`,
            }}
          ></div>
        ))}
      </div>
      <NavbarContent className="sm:hidden block px-8">
        <NavbarMenuToggle
          srOnlyText=" "
          icon={MenuIcon}
          onClick={setIsMenuOpen}
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarItem>
          <Link
            className="z-20 focus:outline-none cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            <div className="relative flex flex-col group overflow-hidden">
              <div className="z-10 p-2 group-hover:px-4 transition-all duration-300 group-hover:text-background">
                About
              </div>
              <div className="absolute inset-[1px] bg-foreground rounded-t-lg transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="focus:outline-none cursor-pointer"
            onClick={() => scrollToSection(projectsRef)}
          >
            <div className="relative flex flex-col group overflow-hidden">
              <div className="z-10 p-2 group-hover:px-4 transition-all duration-300 group-hover:text-background">
                Projects
              </div>
              <div className="absolute inset-[1px] bg-foreground rounded-t-lg transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="focus:outline-none cursor-pointer"
            onClick={() => scrollToSection(contactRef)}
          >
            <div className="relative flex flex-col group overflow-hidden">
              <div className="z-10 p-2 group-hover:px-4 transition-all duration-300 group-hover:text-background">
                Contact
              </div>
              <div className="absolute inset-[1px] bg-foreground rounded-t-lg transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
            </div>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={"#"}
              size="lg"
              onClick={setIsMenuOpen}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
