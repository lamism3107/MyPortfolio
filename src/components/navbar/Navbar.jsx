"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLink from "../authLink/AuthLink";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";
import { ThemeContext } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const pathname = usePathname();
  const navRef = useRef();
  useEffect(() => {
    const container = document.querySelector(".container");
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        if (theme === "light") {
          navRef.current.classList.add("shadow-md");
        }
      } else {
        navRef.current.classList.remove("shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AnimatePresence>
      <div
        ref={navRef}
        className={`fixed top-0 -right-1 left-0 navbar-container w-full h-[80px] ref={navRef} shadow-md  ${
          theme === "light" ? "bg-primary" : "bg-secondary"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className=" wrapper w-full flex items-center justify-between h-[80px] ">
          <div className="logo text-3xl font-bold flex-1 flex items-center ">
            LamDev
          </div>
          {/* <div className="social flex-1 flex gap-2">
        <Link href="/">
          <FaFacebook className="w-6 h-6 " />
        </Link>
        <Link href="/">
          <FaInstagram className="w-6 h-6 " />
        </Link>
        <Link href="/">
          <FaGithub className="w-6 h-6 " />
        </Link>
      </div> */}
          <ul className="navlink flex-2 flex items-center justify-center  gap-8 text-xl">
            <li>
              <Link
                className={` hover:text-prime transition-all ease-out duration-200 ${`link ${
                  pathname === "/" ? "text-prime font-bold " : "text-primary "
                }`}`}
                href="/"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                className={` hover:text-prime transition-all ease-out duration-200 ${`link ${
                  pathname === "/about"
                    ? "text-prime font-bold "
                    : "text-primary "
                }`}`}
                href="/about"
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                className={` hover:text-prime transition-all ease-out duration-200 ${`link ${
                  pathname === "/contact"
                    ? "text-prime font-bold"
                    : "text-primary "
                }`}`}
                href="/contact"
              >
                Liên hệ
              </Link>
            </li>
            <li>
              <Link
                className={` hover:text-prime transition-all ease-out duration-200 ${`link ${
                  pathname === "/blog"
                    ? "text-prime font-bold "
                    : "text-primary "
                }`}`}
                href="/blog"
              >
                Blog
              </Link>
            </li>
            {/* <li>
          <AuthLink />
        </li> */}
          </ul>
          <div className="burger flex-1 flex items-center gap-5 justify-end cursor-pointer">
            <ThemeToggle />

            <FiMenu
              className="text-3xl"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          {open && (
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              initial={{ opacity: 1, right: "-400px" }}
              animate={{ opacity: 1, right: "0" }}
              exit={{ opacity: 0, right: "-400px" }}
              className="responsiveMenu w-screen h-screen absolute inset-0"
            >
              <div
                className="overlay fixed inset-0 "
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              ></div>
              <motion.div className="sidbar-menu p-6 absolute  z-10000 right-0 bg-soft h-screen w-1/4">
                <span
                  className=" text-2xl w-max text-primary cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <IoCloseSharp />
                </span>
                <div className="  flex flex-col items-center justify-start text-2xl gap-[50px] ">
                  <Link onClick={() => setOpen(!open)} href="/">
                    Home
                  </Link>
                  <Link onClick={() => setOpen(!open)} href="/">
                    Contact
                  </Link>
                  <Link onClick={() => setOpen(!open)} href="/">
                    About
                  </Link>
                  <div onClick={() => setOpen(!open)}>
                    <AuthLink />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}
export default Navbar;
