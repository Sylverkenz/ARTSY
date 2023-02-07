import React from "react";
import { CartContent, CartTotals } from ".";
import { useProductContext } from "../contexts/Productcontext";
import { motion } from "framer-motion";
import { cartSlide } from "../utils/animations";

function Shipping({ togglePayment }) {
  const { formShippingHandler, handleShippingSubmit, formData } =
    useProductContext();
  const { email, name, address, state, country, phone } = formData;
  return (
    <motion.article
      variants={cartSlide}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex justify-between"
    >
      <form
        onSubmit={handleShippingSubmit}
        className="shippingform w-full mdl:w-[50%] text-[#888] basetext capitalize"
      >
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            onChange={formShippingHandler}
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">full name</label>
          <input
            onChange={formShippingHandler}
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="chika sylvester"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="address">address</label>
          <input
            onChange={formShippingHandler}
            value={address}
            type="text"
            name="address"
            id="address"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="state">state</label>
          <input
            onChange={formShippingHandler}
            value={state}
            type="text"
            name="state"
            id="state"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="country">country</label>
          <input
            onChange={formShippingHandler}
            value={country}
            type="text"
            name="country"
            id="country"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">phone number</label>
          <input
            onChange={formShippingHandler}
            value={phone}
            type="tel"
            name="phone"
            id="phone"
            placeholder="08012345678"
            required
          />
        </div>
        <button type="submit">proceed to payment</button>
      </form>
      <div className="w-[45%] hidden mdl:block">
        <CartContent />
        <CartTotals />
      </div>
    </motion.article>
  );
}

export default Shipping;
