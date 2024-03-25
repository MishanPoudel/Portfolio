import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { socialMediaLinks } from "../data/data";
import Link from "next/link";

const Footer = () => {
  return (
    React.createElement("div", { className: "text-self flex items-center gap-x-4" },
      React.createElement(Link, { href: socialMediaLinks['github'], target: "_blank", className: "pt-6 hover:text-white duration-150 ease-in-out flex items-center" },
        "GitHub",
        React.createElement(GoArrowUpRight, { size: 20 })
      ),
      React.createElement(Link, { href: socialMediaLinks['linkedin'], target: "_blank", className: "pt-6 hover:text-white duration-150 ease-in-out flex items-center" },
        "LinkedIn",
        React.createElement(GoArrowUpRight, { size: 20 })
      )
    )
  );
};

export default Footer;
