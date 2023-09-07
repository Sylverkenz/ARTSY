import React, { useState, useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { data } from "../utils/data";

function getFromLocalStorage() {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
}

const initialState = {
  cart: getFromLocalStorage(),
  totalAmount: 0,
  totalItem: 0,
};

function reducer(state, action) {
  if (action.type === "ADD") {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((product) => product.id === id);

    if (tempItem) {
      let tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        } else return item;
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id,
        name: product.name,
        img: product.url,
        creator: product.creator,
        amount,
        size: product.size,
        price: product.price.usd,
        max: product.stock,
        category: product.category,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === "TOGGLEAMOUNT") {
    const { id, value } = action.payload;
    let newCart = state.cart.map((product) => {
      if (product.id === id) {
        if (value === "inc") {
          let newAmount = product.amount + 1;
          if (newAmount > product.max) {
            newAmount = product.max;
          }
          return { ...product, amount: newAmount };
        }

        if (value === "dec") {
          let newAmount = product.amount - 1;
          if (newAmount <= 1) {
            newAmount = 1;
          }
          return { ...product, amount: newAmount };
        }
      } else {
        return product;
      }
    });

    return { ...state, cart: newCart };
  }

  if (action.type === "DELETE") {
    let newCart = state.cart.filter((product) => product.id !== action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === "CARTTOTALS") {
    // const { totalItem, totalAmount } = state.cart.reduce(
    //   (total, item) => {
    //     const { amount, price } = item;
    //     total.totalItem += amount;
    //     total.totalAmount += price * amount;
    //     return total;
    //   },
    //   { totalItem: 0, totalAmount: 0 }
    // );
    let totalItem = 0;
    let totalAmount = 0;
    state.cart.forEach((item) => {
      totalItem += item.amount;
      totalAmount += item.amount * item.price;
    });
    return {
      ...state,
      totalItem,
      totalAmount,
      shipping: 250,
    };
  }
}

const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(id, amount, product) {
    dispatch({ type: "ADD", payload: { id, amount, product } });
  }

  function toggleAmount(id, value) {
    dispatch({
      type: "TOGGLEAMOUNT",
      payload: { id, value },
    });
  }

  function deleteItem(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  useEffect(() => {
    dispatch({ type: "CARTTOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggleAmount, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
