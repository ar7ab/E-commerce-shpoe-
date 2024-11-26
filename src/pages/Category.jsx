import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import all_products from "../assets/data/all_products";
import Item from "../components/Item";

const Category = ({ category, banner }) => {
  return (
    <section className="max_padd_container py-12 xl:py-28">
      <div>
        {/* Banner Image */}
        <div>
          <img
            src={banner}
            alt={`${category} banner`}
            className="block w-full h-auto my-7 mx-auto"
          />
        </div>

        {/* Sort and Info Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center my-8 mx-2 gap-4">
          <h5 className="text-center sm:text-left">
            <span className="font-bold">Showing 1-12</span> Out of 36 products
          </h5>
          <div className="flex items-center justify-between max-sm:p-4 gap-x-4 px-6 py-3 rounded-5xl ring-1 ring-slate-900/15 w-full sm:w-auto">
            Sort by <MdOutlineKeyboardArrowDown />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {all_products.map((item) => {
            if (category === item.category) {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
          })}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="btn_white_rounded px-6 py-3 text-sm sm:text-base">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
