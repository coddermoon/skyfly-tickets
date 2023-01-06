
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

const Main = ({ children }) => {
  return (
    <div data-theme="light">
      <NavBar />
      <main className="container mx-auto">{children}</main>
      <Footer/>
    </div>
  );
};

export default Main;
