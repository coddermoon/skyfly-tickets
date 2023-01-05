

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
                    <p class="text-sm uppercase md:text-2xl tracking-widest text-white font-bold">
                        {name}
                    </p>

                    <p class="text-2xl font-semibold text-white">{price} $</p>

                    <div class="mt-64">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <button className="">Check Details</button>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    );
};

export default Card;