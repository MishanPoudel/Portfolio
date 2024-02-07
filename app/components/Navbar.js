import React from "react";
import Image from 'next/image';
import "../globals.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 lg:mx-64 z-50">
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-circle btn-ghost shadow-inset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <Image
              src="/images/png/WhiteLogo.png"
              alt="logo"
              width="120"
              height="120"
            />
          </a>
        </div>
        <div className="flex-none">
          <ThemeToggle/>
        </div>
      </div>
    </nav>
  );
}
