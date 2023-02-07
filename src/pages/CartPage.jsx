import React from "react";
import { Shipping, Payment, CartList } from "../components";
import { useProductContext } from "../contexts/Productcontext";
import { motion } from "framer-motion";
import { pageAnim } from "../utils/animations";

function CartPage() {
  const {
    shippingVisible,
    shoppingVisible,
    paymentVisible,
    togglePayment,
    toggleShipping,
    toggleShopping,
  } = useProductContext();
  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className="px-6 md:px-[10rem] overflow-hidden"
    >
      <article className="carttitles basetext capitalize hidden mdl:flex justify-center gap-[8rem] border-b w-fit mx-auto mb-[7rem] ">
        <h5
          className={shoppingVisible ? "active" : null}
          on
          onClick={toggleShopping}
        >
          shopping cart
        </h5>
        <h5
          className={shippingVisible ? "active" : null}
          on
          onClick={toggleShipping}
        >
          shipping details
        </h5>
        <h5
          className={paymentVisible ? "active" : null}
          onClick={togglePayment}
        >
          payment details
        </h5>
      </article>

      <div className="cartpage">
        {shoppingVisible && <CartList toggleShipping={toggleShipping} />}
        {shippingVisible && <Shipping togglePayment={togglePayment} />}
        {paymentVisible && <Payment />}
      </div>
    </motion.div>
  );
}

export default CartPage;
