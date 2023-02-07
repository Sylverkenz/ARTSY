import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useFilterContext } from "../contexts/Filtercontext";

function Sort() {
  const {
    sortProducts,
    filteredProducts,
    filters,
    mobileFilter,
    setMobileFilter,
  } = useFilterContext();
  return (
    <div className="sort my-[3rem] p-4 h-[7rem] flex justify-between items-center rounded-[1.5rem] ">
      <span
        className="flex items-center gap-4 font-Satoshi basetext mdl:hidden"
        onClick={() => setMobileFilter(!mobileFilter)}
      >
        Filters
        {mobileFilter ? (
          <FaChevronUp className="text-[1.5rem]" />
        ) : (
          <FaChevronDown className="text-[1.5rem]" />
        )}
      </span>
      <h4 className="basetext capitalize hidden mdl:block">
        {filteredProducts.length} total products found for
        <span className="ml-4 ">({filters.category})</span>
      </h4>
      <div className="flex items-center gap-2">
        <h4 className="basetext capitalize hidden mdl:block">sort by</h4>
        <select
          name="sort"
          id="sort"
          className="h-[5rem] mdl:w-[18rem] border-[0.4px] outline-none border-gray rounded-[.8rem] baseBtext"
          onChange={sortProducts}
        >
          <option value="name(a-z)">name(a-z)</option>
          <option value="name(z-a)">name(z-a)</option>
          <option value="price(lowest)">price(lowest)</option>
          <option value="price(highest)">price(highest)</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
