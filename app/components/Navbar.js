"use client";
import React from "react";
import Link from "next/link";
import { navLinks } from "../data/data";
import { usePathname } from "next/navigation";
import { GoDownload } from "react-icons/go";

const Navbar = () => {
  const pathName = usePathname();

  return React.createElement(
    "nav",
    { className: "py-16 select-none" },
    React.createElement(
      "div",
      { className: "flex gap-4" },
      navLinks.map((navLink) =>
        React.createElement(
          Link,
          {
            key: navLink.key,
            href: navLink.url,
            className: `${
              pathName === navLink.url ? "text-neutral-200" : ""
            } nav-link`,
          },
          navLink.link
        )
      ),
      React.createElement(
        Link,
        {
          href: "https://i.pinimg.com/564x/3a/a1/7c/3aa17c61bc6d4a0ad1e34eae30c2059a.jpg",
          className: "nav-link ml-auto flex items-center",
          target: "_blank",
          download: "virus.exe ",
        },
        "resume ",
        React.createElement(GoDownload, null)
      )
    )
  );
};

export default Navbar;
