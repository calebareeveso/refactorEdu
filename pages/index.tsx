import Head from "next/head";
import Image from "next/image";
// import styles from "@/styles/Home.module.css";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>RefactorEdu</title>
        <meta name="description" content="..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <div className="max-w-5xl mx-auto container px-4 my-10 sm:my-36">
          <div className="container mx-auto">
            <div className="text-center">
              <h1 className="text-black text-2xl sm:text-4xl md:text-5xl">
                Making the journey through education easier
              </h1>
              <h2 className="text-black text-base sm:text-lg md:text-xl my-6">
                Discover student-friendly, interactive roadmaps, guides, and
                other learning materials for STEM subjects
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
