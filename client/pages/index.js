import Head from "next/head";
import NavBar from "../components/Navbar/NavBar";
import Slider from "../components/Slider";
import Destinatition from "./destinatition";
import About from "../components/About/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <NavBar />
        <Slider />
        <About></About>
        <Destinatition />
      </main>
    </>
  );
}
