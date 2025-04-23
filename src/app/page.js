import Navbar from "@/components/common/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url(/assets/image/png/hero-bg.png)] bg-center bg-cover bg-no-repeat md:h-[836px] ">
      <Navbar />
      <Hero />
    </div>
  );
}
