import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className=" max-w-[1303px] w-full ml-auto pl-2 ">
        <div className=" md:py-[76px] sm:py-[65px] py-[50px] flex max-md:flex-col justify-between  ">
          <div>
            <p className=" lg:text-[68px] md:text-[55px] sm:text-[45px] text-[30px]  font-semibold text-white leading-[110%] ">
              <span className="italic">Cold Chain Service now </span>just a
              Click away
            </p>
            <p className=" pt-5 text-white md:text-xl sm:text-lg font-medium max-w-[499px] w-full sm:pb-10 pb-6 ">
              We provide a Plug'n'Play model for temperature-sensitive products,
              empowering our customers with the essential tools to expand their
              business while we ensure the preservation and transportation of
              perishable goods.
            </p>
            <div className=" flex max-sm:flex-col max-sm:items-center gap-3.5 ">
              <Link href="#">
                <button
                  type="submit"
                  className=" bg-white rounded-full px-7.5 py-3.5 text-[#29E0FF] font-bold leading-[120%] cursor-pointer hover:scale-105 duration-300 hover:shadow-lg "
                >
                  Get Started
                </button>
              </Link>
              <Link href="#">
                <button
                  type="submit"
                  className=" bg-transparent border border-white rounded-full px-8 py-3.5 text-white font-bold leading-[120%] cursor-pointer hover:scale-105 duration-300 hover:shadow-lg hover:bg-white hover:text-[#29E0FF] "
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className=" max-w-[520px] w-full md:h-[323px] h-[180px] md:mt-[130px] mt-5  ">
            <Image
              className=" hidden md:flex "
              src="/assets/image/png/hero-truck-img.png"
              width={826}
              height={443}
              alt="hero-truck-img.png"
            />
            <Image
              className=" md:hidden flex "
              src="/assets/image/png/hero-truck-full-img.png"
              width={826}
              height={443}
              alt="hero-truck-img.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
