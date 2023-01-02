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

          <a href="#_" class="relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">Button Text</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
