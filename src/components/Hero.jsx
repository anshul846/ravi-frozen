import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="  w-full mt-2 mb-5 sm:mb-7 md:mb-11 lg:mb-[61px] sm:mt-8  md:mt-[50px] lg:mt-[76px] ">
        <div className="@container max-w-[1320px] w-full ml-auto relative ">
          <div>
            <h1 className="max-w-[873px] w-full text-white  font-semibold leading-[110%] text-3xl sm:text-5xl  md:text-[60px] lg:text-[75px] sm:px-4 px-3  ">
              <i> Cold Chain Service</i> now just a Click away
            </h1>
          </div>
          <div className="  @max-5xl:flex-col flex justify-between mt-3 sm:mt-5 gap-4">
            <div className=" sm:px-4 px-3 ">
              <p className="max-w-full lg:max-w-[535px] w-full leading-[150%]  text-white font-medium text-xs sm:text-lg md:text-xl">
                We provide a Plug'n'Play model for temperature-sensitive
                products, empowering our customers with the essential tools to
                expand their business while we ensure the preservation and
                transportation of perishable goods.
              </p>

              <div className="flex items-center mt-5 sm:mt-10 gap-[14px]">
                <Link href="#">
                  <div className="bg-white rounded-full cursor-pointer hover:scale-105 duration-300 hover:shadow-lg ">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#29E0FF] to-[#1FB0FF]  bg-clip-text group-hover:text-white! rounded-full px-6.5 py-3.5 text-transparent font-bold leading-[120%] max-sm:hidden"
                    >
                      Get Started
                    </button>
                  </div>
                </Link>
                <button className="w-[100px] sm:w-[120px] md:w-[150px]  bg-transparent border border-white rounded-[100px] font-medium text-white h-8 sm:h-9 md:h-12  text-sm sm:text-base leading-[120%] cursor-pointer hover:bg-white hover:text-[#21B7FF] hover:shadow-md hover:scale-101 transition duration-300 ease-in-out ">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex justify-end shrink-0!">
              <Image
                className=" w-[350px] sm:w-[550px] lg:w-[600px] xl:w-[712px]! h-[200px] sm:h-[300px] md:h-[380px] lg:h-[400px] xl:h-[443px]  duration-300 ease-in-out absolute top-"
                src="/assets/image/png/hero-truck-img.png"
                width={712}
                height={443}
                alt="hero truck.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
