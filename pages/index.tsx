import Head from "next/head";
import Image from "next/image";
// import styles from "@/styles/Home.module.css";
import { Navbar, Hero } from "@/components";

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
        <Hero />
      </main>
    </>
  );
}
