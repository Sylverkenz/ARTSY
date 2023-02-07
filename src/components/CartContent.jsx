import React from "react";
import { useCartContext } from "../contexts/Cartcontext";
import CartItem from "./CartItem";


function CartContent() {
  const { cart } = useCartContext();
  return (
    <div >
      {cart.map((cart, index) => {
        return <CartItem key={index} {...cart} />;
      })}
    </div>
  );
}

export default CartContent;
