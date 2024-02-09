"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../globals.css";
import ThemeToggle from "./ThemeToggle";
import Cursor from "./Cursor";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [magnetActive, setMagnetActive] = useState(false);

  return (
    <nav className="sticky top-0 lg:px-80 lg:my-2 z-50">
      <Cursor hideCursor={magnetActive} />
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button
          className={`btn btn-circle btn-ghost shadow-inset relative rounded-full`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={() => setMagnetActive(true)}
            onMouseLeave={() => setMagnetActive(false)}
          >
            <div
              className={`h-[2px] mb-[-20px] transition-all duration-300 bg-primary z-[10] ${
                !isMenuOpen ? "w-6" : "w-6 mb-[-27px] rotate-45"
              }`}
            ></div>
            <div
              className={`h-[2px] mt-[-20px] transition-all duration-300 bg-primary z-[10] ${
                !isMenuOpen ? "w-6" : "w-6 mt-[-27px] -rotate-45"
              }`}
            ></div>
            {magnetActive ? (
              <motion.div
                layoutId="cursor"
                className="absolute inset-0 bg-primary rounded-full"
              ></motion.div>
            ) : null}
          </button>
          <motion.nav
            transition={{
              type: "spring",
              damping: 200,
              stiffness: 500,
            }}
            initial={{
              y: "-100%",
            }}
            animate={{
              y: isMenuOpen ? "0%" : "-100%",
            }}
            className="fixed inset-0 bg-base backdrop-blur z-[-1]"
          >
            <div className="flex px-[5%] flex-col justify-center h-full text-primary">
              <Link className="text-5xl mb-6" href="/">
                Home
              </Link>
              <Link className="text-5xl mb-6" href="/about">
                About
              </Link>
              <Link className="text-5xl mb-6" href="/work">
                Work
              </Link>
              <Link className="text-5xl mb-6" href="/contact">
                Contact
              </Link>
            </div>
          </motion.nav>
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
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
