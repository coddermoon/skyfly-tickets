import Link from "next/link";


const Card = ({ card }) => {
    const { img, name, price } = card;
    return (
        <div>
            <a href="#" class="group relative block bg-black">
                <img
                    alt="Developer"
                    src={img}
                    class="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-20"
                />

                <div class="relative p-8">
                    <p class="text-sm uppercase md:text-2xl tracking-widest text-pink-600 font-bold">
                        {name}
                    </p>

                    <p class="text-2xl font-semibold text-white">{price} $ / Per day</p>

                    <div class="mt-64 w-full">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <Link href="/" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-pink-700 rounded-xl group w-full text-center">
                                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-900 rounded group-hover:-mr-4 group-hover:-mt-4">
                                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-pink-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                <span className="relative w-full  text-white text-xl transition-colors duration-200 ease-in-out group-hover:text-white text-center">View more</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    );
};

export default Card;