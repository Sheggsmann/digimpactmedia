"use client";
import styles from "@/styles";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import menu from "@/assets/menu.svg";
import close from "@/assets/close.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`${styles.flexCenter} ${styles.paddingX} bg-white z-50`}>
      <div className={`${styles.boxWidth}`}>
        <div className="w-full flex items-center justify-between py-6">
          {/* Logo */}
          <div>
            <Link href="/">
              <span className="font-bold text-2xl text-[#377DFF]">
                DIGIMPACT
              </span>
            </Link>
          </div>

          <ul className="list-none sm:flex hidden justify-end items-center">
            <Link
              href="/"
              className="font-semibold text-base mr-10 cursor-pointer text-[#213053]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-semibold text-base mr-10 cursor-pointer text-[#213053]"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="font-semibold text-base mr-10 cursor-pointer text-[#213053]"
            >
              Pricing
            </Link>
          </ul>

          <div className="hidden sm:flex">
            <Link href="/contact">
              <span className="px-10 py-3 font-bold text-white rounded-full bg-[#377DFF] shadow-xs shadow-[#377DFF]">
                Contact Us
              </span>
            </Link>
          </div>

          <div className="sm:hidden flex flex-1 justify-end items-center z-50">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[24px] h-[24px] object-contain color-[#000] cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } bg-[#fff] shadow-2xl p-6 absolute top-16 right-0 my-2 w-full rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col gap-4 justify-end flex-1">
                <Link
                  href="/"
                  className="font-normal text-base mb-2 cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="font-normal mb-2 text-base cursor-pointer"
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="font-normal mb-4 text-base cursor-pointer"
                >
                  Pricing
                </Link>

                <Link href="/contact">
                  <span className="px-10 py-3 font-bold text-white rounded-full bg-[#377DFF] shadow-xs shadow-[#377DFF]">
                    Contact Us
                  </span>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
