import Main from "../components/layouts/Main";
import UserContext from "../components/contexts/UserContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <UserContext>
      <Main>
        <Toaster></Toaster>
        <Component {...pageProps} />
      </Main>
    </UserContext>
  );
}
