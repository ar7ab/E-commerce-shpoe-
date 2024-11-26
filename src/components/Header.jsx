import { Link, NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo.svg";
import logout from "../assets/imgs/logout.svg";
import user from "../assets/imgs/user.svg";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <header className="fixed top-0 left-0 w-full bg-white ring-1 ring-slate-900/5 z-10">
      {/* Logo Section */}
      <div className="flex justify-between items-center px-4 py-3 md:px-8 max-xs:px-2">
        <Link to="/">
          <img src={logo} alt="logo" height={66} width={88} />
        </Link>

        {/* Navbar Desktop */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15 "}
        />

        {/* Navbar Mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? `flex item-start 
                 flex-col gap-y-12 fixed top-20 right-8
                 p-12 bg-white rounded-3xl shadow-md w-64
                 medium-16 ring-1 ring-slate-900/5
                 transition-all duration-300`
              : `hidden md:hidden`
          }`}
        />

        {/* Buttons Section */}
        <div className="flex justify-center items-center sm:gap-x-3 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          )}
          <div className="flex justify-center items-center sm:gap-x-6">
            <NavLink to="cart-page" className="flex">
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full hover:text-secondary hover:ring-secondary" />
              <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-3">
                {getTotalCartItems()}
              </span>
            </NavLink>
            <NavLink
              to={"logout"}
              className={
                "btn_secondary_rounded flex justify-center items-center gap-x-2 medium-16 hidden"
              }
            >
              <img src={logout} alt="logout" width={19} height={19} />
              Logout
            </NavLink>
            <NavLink
              to={"login"}
              className={
                "btn_secondary_rounded flex justify-center items-center gap-x-2 medium-16"
              }
            >
              <img src={user} alt="userIcon" height={19} width={19} />
              <span className="hidden sm:inline">Login</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
