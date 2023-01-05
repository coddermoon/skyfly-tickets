import Image from "next/image";
const About = () => {
  return (
    <div className="hero my-20 pb-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-3/5	 relative">
          <img src="/assets/images/2.jpg" alt="" className="w-4/5   h-full " />
          <img
            src="/assets/images/1.jpg"
            alt=""
            className="absolute  w-3/4 -right-8 -top-16	"
          />
        </div>
        <div className="w-2/5	 ml-32 my-32 ">
          <p className="text-pink-600 font-bold py-4 ">About Us</p>
          <h1 className="text-5xl font-bold my-6">
            <span className=""> A Best Place</span> <br /> <span>to Enjoy</span>
          </h1>
          <p className="py-6 w-9/12	 mb-6  text-xl text-gray-800 font-medium	">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quasi
            quos animi quia sit, iure repndae dolorem cupiditate vel suscipit
            repellendus? Distinctio ab error officiis aut suscipit! Impedit,
            dicta architecto.
          </p>

          <a
            href="#_"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-pink-700 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-900 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-pink-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white text-xl transition-colors duration-200 ease-in-out group-hover:text-white">
              Get Started
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
