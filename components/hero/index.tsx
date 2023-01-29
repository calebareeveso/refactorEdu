import { url } from "inspector";
import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";

export default function Main() {
  return (
    <div className="bg-secondary overflow-hidden pt-10 pb-8 sm:pb-20 sm:pt-32 border-b-2 border-black">
      <div className="max-w-5xl mx-auto container px-4 ">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-black text-base font font-medium mb-6">
              refactorEdu.co
            </h3>
            <h1 className="text-black text-4xl font-bold sm:text-5xl md:text-6xl xl:text-8xl">
              Making the journey through education easier
            </h1>
            <h2 className="text-black text-lg md:text-xl  xl:text-3xl my-6 xl:mt-12 sm:mb-14 xl:mb-20">
              Discover student-friendly, interactive roadmaps, guides, and other
              learning materials for STEM subjects
            </h2>
          </div>
        </div>
      </div>
      <div
        className=" w-full sm:w-screen mb-10 h-[16rem] bg-center bg-cover sm:bg-contain  sm:h-[20rem] md:h-[24rem] lg:h-[28rem] relative bg-repeat-x"
        style={{
          backgroundImage: 'url("/static/images/heroillustration.svg")',
        }}
      >
        {/* <Image
          src={"/static/images/heroillustration.svg"}
          alt={"refatoredu"}
          layout={"fill"}
        /> */}
      </div>
    </div>
  );
}
