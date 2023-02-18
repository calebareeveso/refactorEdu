import { url } from "inspector";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { RoadmapURL } from "./url";
export default function Main() {
  return (
    <div className="bg-white overflow-hidden border-b-2 border-black">
      <div className="">
        <div className=" grid lg:grid-cols-2 gap-3 sm:gap-6">
          <div
            className="h-[20em] sm:h-[50em] lg:h-auto border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-center bg-cover "
            style={{
              backgroundImage: 'url("/static/images/mathematics_banner.svg")',
            }}
          ></div>
          <div className="text-left p-6 sm:p-10 lg:py-40 ">
            <h3 className="text-black text-base font font-medium mb-6">
              SCIENCE
            </h3>
            <h1 className="underline text-black text-3xl font-bold sm:text-4xl md:text-5xl xl:text-7xl">
              <Link
                href={`https://github.com/TalalAlrawajfeh`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Mathematics</span>
                <br />
                <span>Roadmap</span>
              </Link>
            </h1>
            <h2 className="text-black text-lg md:text-xl  xl:text-2xl my-6 ">
              <span>
                This roadmap is mostly intended for math students. This is
                because the roadmap was created (by{" "}
                <Link
                  href={`https://github.com/TalalAlrawajfeh`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline">@TalalAlrawajfeh</span>
                </Link>
                ) to be comprehensive enough to cover the wide range of topics
                in mathematics and might be overwhelming for other students who
                are not studying mathematics
              </span>
            </h2>
            <Link
              href={RoadmapURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-2 items-center"
            >
              <span>View Roadmap</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
