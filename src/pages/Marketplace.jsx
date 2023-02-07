import React from "react";
import {
  Sort,
  Filters,
  FiltersMobile,
  ProductList,
  Footer,
  NewsLetter,
} from "../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnim } from "../utils/animations";
import { useFilterContext } from "../contexts/Filtercontext";

function Marketplace() {
  const { filters } = useFilterContext();
  return (
    <>
      <motion.div
        variants={pageAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        className="market flex flex-col mdl:flex-row  gap-x-[4rem] px-8 mdl:px-[10rem]"
      >
        <Filters />
        <article className="w-full h-auto duration-500">
          <div className="baseBtext text-[#BCB7B7] capitalize mdl:hidden">
            <Link to="/">home</Link> /<Link>marketplace</Link> /
            <p className="inline-block text-[#333]">{filters.category}</p>
          </div>
          <Sort />
          <FiltersMobile />
          <ProductList />
        </article>
      </motion.div>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Marketplace;
