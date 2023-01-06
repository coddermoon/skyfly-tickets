
import Head from 'next/head'
import About from "../components/About/About";
import Footer from '../components/Footer/Footer';
import NavBar from "../components/Navbar/NavBar";
import Slider from "../components/Slider";
import Subcribe from '../components/Subscribe/Subcribe';
import Video from '../components/Video/Video';
import Destinatition from "./destinatition";
import Rooms from './rooms'




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
        <Slider />

        <About></About>
        <Destinatition />
        <Rooms />
        <Video></Video>
        <Subcribe></Subcribe>
        <Footer></Footer>
      </main>
    </>
  );
}
