import { url } from "inspector";
import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";

export default function Main() {
  return (
    <div className="bg-white overflow-hidden py-10 sm:py-20 border-b-2 border-black">
      <div className="max-w-5xl mx-auto container px-4 ">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-black text-base font font-medium mb-6">
              For the Community
            </h3>
            <h1 className="text-black text-4xl font-bold sm:text-5xl md:text-6xl xl:text-8xl">
              Discover, Share and Contribute
            </h1>
            <h2 className="text-black text-lg md:text-xl  xl:text-3xl my-6 ">
              We believe education is for everyone, not just students. That's
              why we're on a mission to refactor education for the better. We
              create roadmaps and guides to help people of all ages navigate
              their learning journey and achieve their goals.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
