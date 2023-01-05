import Main from "../components/layouts/Main";
import UserContext from "../contexts/UserContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  );
}
