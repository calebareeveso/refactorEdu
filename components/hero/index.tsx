import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";

export default function Main() {
  return (
    <div className="bg-secondary">
      <div className="max-w-5xl mx-auto container px-4 py-10 sm:py-36">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-black text-4xl font-bold sm:text-5xl md:text-6xl">
              Making the journey through education easier
            </h1>
            <h2 className="text-black text-base sm:text-lg md:text-xl my-6">
              Discover student-friendly, interactive roadmaps, guides, and other
              learning materials for STEM subjects
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
