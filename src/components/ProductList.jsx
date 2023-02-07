import React from "react";
import { Product } from "../components";
import { useFilterContext } from "../contexts/Filtercontext";
import { motion } from "framer-motion";
import { productList } from "../utils/animations";

function ProductList() {
  const { filteredProducts: products } = useFilterContext();
  return (
    <motion.div
      variants={productList}
      initial="hidden"
      animate="show"
      exit="exit"
      className="grid sm:grid-cols-2 mdl:grid-cols-3 gap-x-[6rem] gap-y-[4rem]"
    >
      {products.map((product, index) => {
        return <Product key={index} {...product} />;
      })}
    </motion.div>
  );
}

export default ProductList;
