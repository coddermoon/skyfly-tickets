

import Head from 'next/head'
import About from "../components/About/About";
import Footer from '../components/Footer/Footer';
import NavBar from "../components/Navbar/NavBar";
import Slider from "../components/Slider";
import Subcribe from '../components/Subscribe/Subcribe';
import Video from '../components/Video/Video';

import Destinatition from "./destinatition";
<<<<<<< HEAD
import About from "../components/About/About";
import Video from "../components/Video/Video";
import Subcribe from "../components/Subscribe/Subcribe";
import Footer from "../components/Footer/Footer";
=======
>>>>>>> 83c9aba715c683e2dc2558c03a122ec5a336b5f7


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
<<<<<<< HEAD
        <Video></Video>
        <Subcribe></Subcribe>
        <Footer></Footer>
=======

        <Video></Video>
        <Subcribe></Subcribe>
        <Footer></Footer>

>>>>>>> 83c9aba715c683e2dc2558c03a122ec5a336b5f7
      </main>
    </>
  );
}
