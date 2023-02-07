import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart, FiLogIn, FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useProductContext } from "../contexts/Productcontext";
import { useCartContext } from "../contexts/Cartcontext";
import { useAuthContext } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import { routings } from "../utils/data";

function Navbar() {
  const { openSideBar } = useProductContext();
  const { totalItem } = useCartContext();
  const { pathname } = useLocation();
  const { currentUser, logOut } = useAuthContext();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="header flex items-center justify-between py-[2rem] mdl:py-[4rem] px-8 mdl:px-[10rem]">
        <span className="text-[2.8rem] mdl:hidden" onClick={openSideBar}>
          <FaBars />
        </span>
        <h4 className="logo logotext uppercase ">artsy.</h4>
        <nav className="nav hidden mdl:block ">
          <ul className="primary capitalize basetext flex gap-[4rem]">
            {routings.map((route, index) => {
              const { url, name } = route;
              return (
                <li key={index}>
                  <Link to={url}>
                    {name}
                    <motion.span
                      initial={{ width: "0%" }}
                      animate={{
                        width: pathname === url ? "100%" : "0%",
                      }}
                      transition={{
                        type: " tween",
                        ease: "easeOut",
                      }}
                    ></motion.span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav>
          <ul className="secondary flex items-center gap-[2rem] mdl:gap-[3rem] text-[2rem] sm:text-[2.4rem]">
            <li className="group duration-200 relative cursor-pointer">
              {currentUser ? (
                <Link onClick={handleLogOut}>
                  <FiLogOut />
                </Link>
              ) : (
                <Link to="/login">
                  <FiLogIn />
                </Link>
              )}
              <p className="hidden font-Satoshi group-hover:block text-[1.2rem] absolute -left-2 -bottom-3">
                {currentUser ? "LogOut" : "LogIn"}
              </p>
            </li>
            <li className="relative pr-0">
              <Link to="/cart">
                <FiShoppingCart />
              </Link>
              <span className="absolute font-medium text-[1rem] text-white bg-black px-2 rounded-full right-[-1rem]">
                {totalItem}
              </span>
            </li>
            <li className="text-[2.8rem] hidden mdl:block">
              <Link to="/">
                <IoMdNotificationsOutline />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
