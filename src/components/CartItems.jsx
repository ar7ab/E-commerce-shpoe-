import { useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <section className="max_padd_container pt-28">
      <div className="overflow-x-auto">
        <table className="hidden sm:table w-full mx-auto">
          <thead>
            <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
              <th className="p-1 py-2 text-sm sm:text-base">Products</th>
              <th className="p-1 py-2 text-sm sm:text-base">Title</th>
              <th className="p-1 py-2 text-sm sm:text-base">Price</th>
              <th className="p-1 py-2 text-sm sm:text-base">Quantity</th>
              <th className="p-1 py-2 text-sm sm:text-base">Total</th>
              <th className="p-1 py-2 text-sm sm:text-base">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                  <tr
                    key={product.id}
                    className="border-b border-slate-900/20 text-gray-30 p-6 medium-14 text-center"
                  >
                    <td className="flexCenter">
                      <img
                        src={product.image}
                        alt={product.name}
                        height={43}
                        width={43}
                        className="rounded-lg ring-1 ring-slate-900/5 my-1"
                      />
                    </td>
                    <td>
                      <div className="line-clamp-3 text-sm sm:text-base">
                        {product.name}
                      </div>
                    </td>
                    <td className="text-sm sm:text-base">
                      ${product.new_price.toFixed(2)}
                    </td>
                    <td className="w-16 h-16 bg-white text-sm sm:text-base">
                      {cartItems[product.id]}
                    </td>
                    <td className="text-sm sm:text-base">
                      ${(product.new_price * cartItems[product.id]).toFixed(2)}
                    </td>
                    <td>
                      <div className="bold-22 pl-14 cursor-pointer">
                        <TbTrash onClick={() => removeFromCart(product.id)} />
                      </div>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>

        {/* Mobile View */}
        <div className="block sm:hidden">
          {all_products.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <div
                  key={product.id}
                  className="grid grid-cols-2 gap-4 border-b border-slate-900/20 py-4 text-sm text-gray-30"
                >
                  <div className="font-medium">Product</div>
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      height={43}
                      width={43}
                      className="rounded-lg ring-1 ring-slate-900/5"
                    />
                  </div>
                  <div className="font-medium">Title</div>
                  <div>{product.name}</div>
                  <div className="font-medium">Price</div>
                  <div>${product.new_price.toFixed(2)}</div>
                  <div className="font-medium">Quantity</div>
                  <div>{cartItems[product.id]}</div>
                  <div className="font-medium">Total</div>
                  <div>
                    ${(product.new_price * cartItems[product.id]).toFixed(2)}
                  </div>
                  <div className="font-medium">Remove</div>
                  <div>
                    <TbTrash
                      className="text-lg cursor-pointer"
                      onClick={() => removeFromCart(product.id)}
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Cart Details */}
      <div className="flex flex-col gap-6 sm:gap-20 my-8 p-4 sm:p-8 rounded-md bg-white w-full max-w-[666px]">
        <div className="flex flex-col gap-4 sm:gap-10 w-full">
          <h4 className="bold-20 text-center sm:text-left text-sm sm:text-base">
            Summary
          </h4>
          <div>
            <div className="flex justify-between items-center py-2 sm:py-4 text-sm sm:text-base">
              <h4 className="medium-16">Subtotal:</h4>
              <h4 className="text-gray-30 font-semibold">
                ${totalAmount.toFixed(2)}
              </h4>
            </div>
            <hr />
            <div className="flex justify-between items-center py-2 sm:py-4 text-sm sm:text-base">
              <h4 className="medium-16">Shipping Fee:</h4>
              <h4 className="text-gray-30 font-semibold">Free</h4>
            </div>
            <hr />
            <div className="flex justify-between items-center py-2 sm:py-4 text-sm sm:text-base">
              <h4 className="bold-18">Total:</h4>
              <h4 className="bold-18">${totalAmount.toFixed(2)}</h4>
            </div>
          </div>
          <button className="btn_dark_rounded w-full sm:w-44 mt-4 sm:mt-0">
            Checkout
          </button>
          <div className="flex flex-col gap-4 sm:gap-10 mt-6 sm:mt-10">
            <h4 className="bold-20 capitalize text-center sm:text-left text-sm sm:text-base">
              Enter your coupon code here:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <input
                type="text"
                placeholder="Coupon code"
                className="bg-primary bg-opacity-10 border border-slate-300 rounded-md p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn_dark_rounded w-full sm:w-auto">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
