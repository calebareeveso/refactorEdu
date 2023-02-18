import Head from "next/head";
import Image from "next/image";
// import styles from "@/styles/Home.module.css";
import { Navbar, Hero, About, Roadmap, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>RefactorEdu</title>
        <meta name="description" content="..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>refactorEdu - Making the journey through education easier</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roadmap />
        <Footer />
      </main>
    </>
  );
}
