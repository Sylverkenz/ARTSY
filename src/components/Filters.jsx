import React from "react";
import { BsSearch, BsCheck } from "react-icons/bs";
import { useFilterContext } from "../contexts/Filtercontext";
import { getUniqueValues, formatPrice } from "../utils/helpers";

function Filters() {
  const {
    allProducts: products,
    filters,
    setFilters,
    filterProducts,
  } = useFilterContext();

  const categories = getUniqueValues(products, "category");

  return (
    <div className="mt-[4rem] hidden mdl:block">
      <form action="" className="form">
        <div
          className="form-control flex items-center bg-[#f4f2f2] gap-4
        rounded-[1.5rem] w-[20rem] h-[5rem] overflow-hidden px-12"
        >
          <BsSearch className="text-[#999] text-[2rem] block w-[2rem]" />
          <input
            type="text"
            name="text"
            placeholder="Search"
            className=" baseBtext text-[#999] bg-[#f4f2f2] outline-none w-[80%]"
            value={filters.text}
            onChange={filterProducts}
          />
        </div>

        <div className="form-control">
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
        </div>

        <div className="form-control">
          <h5>by price</h5>
          <h4 className="basetext mb-2">{formatPrice(filters.price)}</h4>
          <input
            type="range"
            name="price"
            className="w-[85%]"
            min={filters.minPrice}
            value={filters.price}
            max={filters.maxPrice}
            onChange={filterProducts}
          />
        </div>
      </form>
    </div>
  );
}

export default Filters;
