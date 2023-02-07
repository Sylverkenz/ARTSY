import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useProductContext } from "../contexts/Productcontext";
import { motion, AnimatePresence } from "framer-motion";

const open = {
  hidden: { x: "-100%" },
  show: { x: "0%", transition: { duration: 0.5, ease: "easeOut" } },
  exit: { x: "-100%", transition: { duration: 0.5 } },
};

function SideBar() {
  const { sideBarOpen, closeSideBar } = useProductContext();

  return (
    <AnimatePresence mode="wait">
      {sideBarOpen && (
        <motion.div
          variants={open}
          initial="hidden"
          animate="show"
          exit="exit"
          className="z-50 p-6 mdl:hidden fixed top-0 left-0 right-0 bottom-0 bg-white"
        >
          <header className="header flex justify-between mb-[6rem]">
            <h4 className="logo logotext uppercase text-[2.4rem]">artsy.</h4>
            <span className="text-[4rem]" onClick={closeSideBar}>
              <FaTimes />
            </span>
          </header>
          <nav className="nav">
            <ul className="primary capitalize font-Satoshi font-medium text-[2.8rem] flex flex-col gap-[4rem]">
              <li onClick={closeSideBar}>
                <NavLink to="/">home</NavLink>
              </li>
              <li onClick={closeSideBar}>
                <NavLink to="/market">marketplace</NavLink>
              </li>
              <li onClick={closeSideBar}>
                <NavLink to="/auction">auctions</NavLink>
              </li>
              <li onClick={closeSideBar}>
                <NavLink to="/drop">drop</NavLink>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideBar;
