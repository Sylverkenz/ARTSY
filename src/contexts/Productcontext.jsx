import React, { useState, useContext } from "react";
import { data } from "../utils/data";

const productContext = React.createContext();

export function ProductProvider({ children }) {
  const [time, setTime] = useState(24075);
  const [products, setProducts] = useState(data);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    state: "",
    country: "",
    phone: "",
    shipTo: "",
  });
  const [shoppingVisible, setShoppingVisible] = useState(true);
  const [shippingVisible, setShippingVisible] = useState(false);
  const [paymentVisible, setPaymentVisible] = useState(false);

  function toggleShipping() {
    setShoppingVisible(false);
    setShippingVisible(true);
    setPaymentVisible(false);
  }

  function togglePayment() {
    setShoppingVisible(false);
    setShippingVisible(false);
    setPaymentVisible(true);
  }

  function toggleShopping() {
    setShoppingVisible(true);
    setShippingVisible(false);
    setPaymentVisible(false);
  }

  function openSideBar() {
    setSideBarOpen(true);
  }

  function closeSideBar() {
    setSideBarOpen(false);
  }
  function formShippingHandler(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  }
  function handleShippingSubmit(e) {
    e.preventDefault();
    setFormData({
      ...formData,
      shipTo: `${formData.address}, ${formData.state}, ${formData.country}.
    `,
    });
    console.log(formData.shipTo);
    togglePayment();
  }

  return (
    <productContext.Provider
      value={{
        time,
        setTime,
        products,
        setProducts,
        sideBarOpen,
        setSideBarOpen,
        openSideBar,
        closeSideBar,
        formData,
        setFormData,
        formShippingHandler,
        handleShippingSubmit,
        shippingVisible,
        shoppingVisible,
        paymentVisible,
        togglePayment,
        toggleShipping,
        toggleShopping,
      }}
    >
      {children}
    </productContext.Provider>
  );
}

export function useProductContext() {
  return useContext(productContext);
}
