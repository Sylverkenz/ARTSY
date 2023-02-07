import React from "react";
import { useCartContext } from "../contexts/Cartcontext";
import { formatPrice } from "../utils/helpers";

function CartTotals() {
  const { totalAmount, totalItem, shipping } = useCartContext();
  return (
    <div className="totals min-w-[50%] capitalize py-8">
      <h5>
        <span>products in cart:</span>
        <span>{totalItem} items</span>
      </h5>
      <h5>
        <span>gross total:</span>
        <span>{formatPrice(totalAmount)}</span>
      </h5>
      <h5>
        <span>shipping:</span>
        <span>
          {formatPrice(shipping)} x {totalItem}
        </span>
      </h5>

      <h5>
        <span>net total:</span>
        <span>{formatPrice(totalAmount + shipping * totalItem)}</span>
      </h5>
    </div>
  );
}

export default CartTotals;
