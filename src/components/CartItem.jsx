import React from "react";
import { useCartContext } from "../contexts/Cartcontext";
import { SlClose } from "react-icons/sl";
import { AmountButtons } from ".";
import { formatPrice } from "../utils/helpers";
import { motion } from "framer-motion";
import { cartItemr } from "../utils/animations";

function CartItem({ id, name, img, price, creator, size, amount, category }) {
  const { toggleAmount, deleteItem } = useCartContext();
  return (
    <motion.article className="flex justify-between py-[3.5rem] mdl:py-[4rem] h-[20rem] mdl:h-[27rem] border-y">
      <div className="flex items-center gap-6 mdl:gap-12">
        <img
          src={img}
          alt={name}
          className="w-[12rem] mdl:w-[19rem] rounded-[5px]"
        />
        <div className="cartDesc basetext capitalize">
          <h4 className="font-Cardo text-[1.8rem] mdl:hidden">{category}</h4>
          <h5 className="text-[#000] font-medium text-[2rem]">{name}</h5>
          <h5 className="text-[#999]">{creator}</h5>
          <h5 className="text-[#999]">
            size: <span className="text-[#000]">{size.ft} ft</span>
          </h5>
          <AmountButtons
            increase={() => toggleAmount(id, "inc")}
            decrease={() => toggleAmount(id, "dec")}
            amount={amount}
          />
        </div>
      </div>
      <div className="price flex flex-col justify-between items-center">
        <button
          className="text-[3rem] text-[#999]"
          onClick={() => deleteItem(id)}
        >
          <SlClose />
        </button>
        <h5 className="font-STIX text-[1.9rem] mdl:text-[2.6rem]">
          {formatPrice(amount * price)}
        </h5>
      </div>
    </motion.article>
  );
}

export default CartItem;
