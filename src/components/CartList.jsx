import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/Cartcontext";
import { Empty, CartContent, CartTotals } from ".";
import { motion } from "framer-motion";
import { cartSlide } from "../utils/animations";

function CartList({ toggleShipping }) {
  const { cart } = useCartContext();

  if (cart.length === 0) return <Empty />;
  return (
    <motion.div
      variants={cartSlide}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <CartContent />
      <article className="py-[6rem] capitalize flex flex-col-reverse mdl:flex-row mdl:justify-between ">
        <div className="checkout mdl:w-[32%]">
          <button type="button" onClick={toggleShipping}>
            proceed to checkout
          </button>
          <Link to="/market">continue shopping</Link>
        </div>
        <CartTotals />
      </article>
    </motion.div>
  );
}

export default CartList;
