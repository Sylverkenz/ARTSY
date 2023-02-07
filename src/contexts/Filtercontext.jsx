import React, { useState, useContext, useEffect } from "react";
import { useProductContext } from "./Productcontext";

const filterContext = React.createContext();

export function FilterProvider({ children }) {
  const { products } = useProductContext();
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilProducts] = useState([...allProducts]);
  const [sort, setSort] = useState("");
  const [filters, setFilters] = useState({
    text: "",
    category: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    artist: "all",
    year: "all",
  });
  const [mobileFilter, setMobileFilter] = useState(false);

  function sortProducts(e) {
    const value = e.target.value;
    setSort(value);
  }

  function filterProducts(e) {
    let name = e.currentTarget.dataset.name || e.target.name;
    let value = e.currentTarget.dataset.value || e.target.value;
    if (name === "price") {
      value = Number(value);
    }

    setFilters({ ...filters, [name]: value });
  }

  useEffect(() => {
    let sorted = [...filteredProducts];

    if (sort === "price(lowest)") {
      sorted = sorted.sort((a, b) => {
        return a.price.usd - b.price.usd;
      });
    }
    if (sort === "price(highest)") {
      sorted = sorted.sort((a, b) => {
        return b.price.usd - a.price.usd;
      });
    }

    if (sort === "name(a-z)") {
      sorted = sorted.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (sort === "name(z-a)") {
      sorted = sorted.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    setFilProducts(sorted);
  }, [sort, filters]);

  useEffect(() => {
    let maxPrice = products.map((p) => p.price.usd);
    maxPrice = Math.max(...maxPrice);
    setFilters({ ...filters, maxPrice, price: maxPrice });
  }, [products]);

  useEffect(() => {
    let filtered = [...allProducts];

    if (filters.category !== "all") {
      filtered = filtered.filter((item) => item.category === filters.category);
    } else {
      filtered = [...allProducts];
    }

    if (filters.price) {
      filtered = filtered.filter((item) => item.price.usd <= filters.price);
    }

    if (filters.text) {
      filtered = filtered.filter((item) => item.name.startsWith(filters.text));
    }

    setFilProducts(filtered);
  }, [filters]);

  return (
    <filterContext.Provider
      value={{
        allProducts,
        setAllProducts,
        filteredProducts,
        setFilProducts,
        sort,
        setSort,
        filters,
        setFilters,
        sortProducts,
        filterProducts,
        mobileFilter,
        setMobileFilter,
      }}
    >
      {children}
    </filterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(filterContext);
}
