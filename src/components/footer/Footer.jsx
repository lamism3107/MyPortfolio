"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import "./footer.css";
import { ThemeContext } from "@/context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full ${
        theme === "light"
          ? `text-secondary bg-primary`
          : "text-gray-300 bg-secondary"
      }`}
    >
      <div
        className={`footer wrapper mt-[72px]  py-7 flex items-center justify-between `}
      >
        <div className={`footer-info flex-1 flex flex-col gap-[14px]`}>
          <div className={`footer-logo flex items-center gap-3`}>
            <Image
              src="/my-picture.jpg"
              alt="lama blog"
              width={50}
              height={50}
            />
            <h1 className={`footer-logo-text text-2xl`}>Lamablog</h1>
          </div>
          <p className={`footer-desc font-light`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
            porro sequi, totam minima consequuntur, aspernatur deleniti vero
            repellendus dorales.
          </p>
          <div className={`footer-social flex mt-3 gap-3`}>
            <Image src="/facebook.png" alt="" width={18} height={18} />
            <Image src="/instagram.png" alt="" width={18} height={18} />
            <Image src="/tiktok.png" alt="" width={18} height={18} />
            <Image src="/youtube.png" alt="" width={18} height={18} />
          </div>
        </div>
        <div className={`footer-link-list flex-1 flex justify-end gap-[100px]`}>
          <div className={`footer-links flex flex-col gap-3 font-light`}>
            <span className={`footer-links__title font-bold`}>Links</span>
            <Link href="/">Homepage</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={`footer-links flex flex-col gap-3 font-light`}>
            <span className={`footer-links__title font-bold`}>Tags</span>
            <Link href="/">Style</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Coding</Link>
            <Link href="/">Travel</Link>
          </div>
          <div className={`footer-links flex flex-col gap-3 font-light`}>
            <span className={`footer-navlist__title font-bold`}>Social</span>
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Github</Link>
            <Link href="/">Linkedin</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
