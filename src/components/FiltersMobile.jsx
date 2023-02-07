import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { useFilterContext } from "../contexts/Filtercontext";
import { getUniqueValues } from "../utils/helpers";

function FiltersMobile() {
  const {
    allProducts: products,
    filters,
    mobileFilter,
    filterProducts,
  } = useFilterContext();

  const categories = getUniqueValues(products, "category");

  return (
    <AnimatePresence mode="wait">
      {mobileFilter && (
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.35 }}
          exit={{ opacity: 0, y: -200 }}
          className="filtermobile form-control "
        >
          <h5 className="">by category</h5>
          <div className="">
            {categories.map((cat, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-6 mb-8 items-center capitalize"
                  data-name="category"
                  data-value={cat}
                  onClick={filterProducts}
                >
                  <span className="w-8 h-8 bg-[#d9d9d9] block text-[2rem]">
                    {filters.category === cat ? <BsCheck /> : null}
                  </span>
                  <h4 className="basetext text-[#292929]">{cat}</h4>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FiltersMobile;
