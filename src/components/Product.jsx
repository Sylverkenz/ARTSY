import React from "react";
import { formatPrice } from "../utils/helpers";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { images } from "../utils/animations";

function Product({ id, url, name, price }) {
  return (
    <motion.div
      variants={images}
      className="product mdl:p-6 mdl:w-[28rem] h-[40rem] bg-[white] rounded-[1.5rem]"
    >
      <Link to={`/market/${id}`} className="group block relative duration-500">
        <img
          src={url}
          alt=""
          className="w-[100%] h-[32rem] mdl:h-[28rem]  mx-auto object-cover mb-4 rounded-[0.8rem] group-hover:opacity-75 duration-500"
        />
        <div className="link absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[#ffffffe4] text-[4rem] rounded-full p-4 opacity-0 group-hover:opacity-100 duration-500">
          <Link to={`/market/${id}`} className="block">
            <FaArrowRight />
          </Link>
        </div>
      </Link>
      <div className="flex mdl:block items-center justify-between">
        <h4 className="font-satoshi font-medium text-[2.2rem] uppercase text-[#333] mdl:mb-4">
          {name}
        </h4>
        <h5 className="pricetext">{formatPrice(price.usd)}</h5>
      </div>
    </motion.div>
  );
}

export default Product;
