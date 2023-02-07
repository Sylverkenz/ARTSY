import React from "react";

function AmounButtons({ increase, decrease, amount }) {
  return (
    <div className="amountb flex items-center font-Satoshi font-medium text-[2.6rem] mdl:text-[3.6rem] text-[#333]  my-4">
      <span onClick={decrease}>-</span>
      <span className="mdl:w-[5rem]">{amount}</span>
      <span onClick={increase}>+</span>
    </div>
  );
}

export default AmounButtons;
