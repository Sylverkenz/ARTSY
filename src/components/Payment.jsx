import React from "react";
import { useCartContext } from "../contexts/Cartcontext";
import { useProductContext } from "../contexts/Productcontext";
import CartTotals from "./CartTotals";
import { formatPrice } from "../utils/helpers";
import { motion } from "framer-motion";
import { cartSlide } from "../utils/animations";

function Payment() {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  console.log(day, month, year);
  const { formData } = useProductContext();
  const { totalAmount, shipping, totalItem } = useCartContext();
  return (
    <motion.div
      variants={cartSlide}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex justify-between mb-8"
    >
      <article className="w-[60%]"></article>
      <article className="w-[40%] basetext  text-[#333]">
        <h5 className="font-medium text-[2.2rem] text-black mb-4">
          Purchase Summary
        </h5>
        <div className="paymentdetail py-8 border-y">
          <h5 className="capitalize mb-6 underline font-medium">
            payment detail
          </h5>
          <p className="w-[90%]">
            You are attempting to pay a total of
            <span className="text-black text-[2.2rem]">
              {" "}
              {formatPrice(totalAmount + shipping * totalItem)}{" "}
            </span>
            for
            <span className="text-black text-[2.2rem]">
              {" "}
              {totalItem} items{" "}
            </span>
            (shipping inc.), using your card.
          </p>
        </div>
        <div className="deliverydetail capitalize py-8 border-b">
          <h5 className="mb-6 underline font-medium">delivery detail</h5>
          <p>name : {formData.name}</p>
          <p>address : {formData.shipTo}</p>
          <p>contact : {formData.phone}</p>
          <p>
            Expected arrival date : Between tomorrow <br />
            {`${day + 1} ${month}, ${year} `} and{" "}
            {`${day + 4} ${month}, ${year}`}
          </p>
        </div>
        <CartTotals />
      </article>
    </motion.div>
  );
}

export default Payment;
