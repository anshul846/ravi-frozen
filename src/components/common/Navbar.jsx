"use client";
import Image from "next/image";
import Link from "next/link";
import Hero from "../Hero";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-[url(/assets/image/png/hero-bg.png)] bg-center bg-cover bg-no-repeat py-3 relative ">
        <div className="max-w-[1140px] w-full mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="#">
              <Image
                src="/assets/image/png/nav-logo.png"
                width={176}
                height={74}
                alt="nav-logo.png"
              />
            </Link>

            <div className="md:flex gap-7.5 items-center justify-center hidden">
              {/*  */}
              <Link
                href="#"
                className="text-white text-lg capitalize font-medium leading-[120%] duration-300 hover:scale-105 "
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-white text-lg capitalize font-medium leading-[120%] duration-300 hover:scale-105 "
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-white text-lg capitalize font-medium leading-[120%] duration-300 hover:scale-105 "
              >
                WHY US
              </Link>
              <Link
                href="#"
                className="text-white text-lg capitalize font-medium leading-[120%] duration-300 hover:scale-105 "
              >
                Services
              </Link>
              {/*  */}
            </div>

            <Link href="#">
              <button
                type="submit"
                className="bg-white rounded-full px-6.5 py-3.5 text-[#29E0FF] font-bold leading-[120%] cursor-pointer hover:scale-105 duration-300 hover:shadow-lg max-sm:hidden"
              >
                Customer Login
              </button>
            </Link>
            <div
              onClick={() => setOpen(true)}
              className="cursor-pointer md:hidden"
            >
              <p className="mt-1 bg-white h-[4px] rounded-[50px] w-[30px]"></p>
              <p className="mt-1 bg-white h-[4px] rounded-[50px] w-[30px]"></p>
              <p className="mt-1 bg-white h-[4px] rounded-[50px] w-[30px]"></p>
            </div>
          </div>
        </div>

        <Hero />

        {/* Sidebar */}
        <section>
          <div
            className={`fixed top-0 left-0 h-screen sm:w-[300px] w-full bg-[#29E0FF] px-4 z-50 shadow-lg transform transition-transform duration-500 md:hidden ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
              <Link href="#">
                <Image
                  src="/assets/image/png/nav-logo.png"
                  width={140}
                  height={60}
                  alt="nav-logo"
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="text-black text-2xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-5 px-6 mt-6">
              <Link
                href="#"
                className="text-white text-lg capitalize font-medium leading-[120%] hover:underline duration-300 hover:text-black"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-white text-lg capitalize font-medium leading-[120%] hover:underline duration-300 hover:text-black"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-white text-lg capitalize font-medium leading-[120%] hover:underline duration-300 hover:text-black"
              >
                WHY US
              </Link>
              <Link
                href="#"
                className="text-white text-lg capitalize font-medium leading-[120%] hover:underline duration-300 hover:text-black"
              >
                Services
              </Link>
            </div>
            <button
              type="submit"
              className="bg-white rounded-full px-6.5 py-3.5 text-[#29E0FF] font-bold leading-[120%] cursor-pointer hover:scale-105 duration-300 hover:shadow-lg sm:hidden mt-3"
            >
              Customer Login
            </button>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
