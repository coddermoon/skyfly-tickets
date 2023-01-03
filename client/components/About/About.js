import Image from "next/image";
const About = () => {
  return (
    <div className="hero my-44 pb-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2	 relative">
          <Image
            src="/assets/images/2.jpg"
            height={300}
            width={400}
            className=" "
          ></Image>
          <Image
            src="/assets/images/1.jpg"
            height={300}
            width={400}
            className="absolute left-48 -top-20 "
          ></Image>
        </div>
        <div className="w-1/2 ml-24">
          <p className="text-red-600 font-bold w-3/4	mb-4  py-4">About Us</p>
          <h1 className="text-5xl font-bold mb-4">
            <span className="mb-4">A Best Place</span> <br />
            <span className="mb-4"> to enjoy</span>
          </h1>
          <p className="py-6 w-3/4 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            minima in sint distinctio sit! Amet corrupti tempora neque quaerat
            enim deserunt dignissimos sunt necessitatibus! Consectetur doloribus
            harum quis fugit blanditiis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Veritatis, aliquid cum reprehenderit pariatur
            soluta exercitationem. Cupiditate, maiores.
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
              More About us
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
