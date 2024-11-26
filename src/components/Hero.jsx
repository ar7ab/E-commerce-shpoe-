import { MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-no-repeat bg-cover bg-center h-screen w-full">
      <div className="max_padd_container relative top-32 sm:top-52 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold capitalize max-w-[37rem] leading-tight">
          Digital Shopping Hub Junction
        </h1>
        <p className="text-gray-50 regular-16 mt-6 max-w-[33rem] text-sm sm:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          omnis esse tempore, rerum, ratione quaerat harum aspernatur nobis
          ipsum corrupti ex distinctio nesciunt suscipit cupiditate dolor soluta
          similique. Illum, voluptatem.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4 my-10">
          <div className="flex items-center gap-x-3 text-xl sm:text-2xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="font-bold text-lg sm:text-xl">
            176k{" "}
            <span className="regular-16 sm:regular-20">Excellent Reviews</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-0">
            <NavLink
              to={""}
              className="btn_dark_rounded flex justify-center items-center py-2 px-4 text-sm sm:text-base"
            >
              Shop Now
            </NavLink>
            <NavLink
              to={""}
              className="btn_dark_rounded flex justify-center items-center gap-x-2 py-2 px-4 text-sm sm:text-base"
            >
              <MdOutlineLocalOffer className="text-xl sm:text-2xl" />
              Offers
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
