import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Navbar,
  SideBar,
  LiveBid,
  LogIn,
  SignIn,
  ProtectedRoute,
} from "./components";
import {
  HomePage,
  Marketplace,
  SingleproductPage,
  CartPage,
  ErrorPage,
  DropPage,
  AuctionPage,
  LoginPage,
  SignupPage,
} from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="">
      <Navbar />
      <SideBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/market" element={<Marketplace />} />
          <Route path="/market/:id" element={<SingleproductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signIn" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auction" element={<AuctionPage />} />
          <Route path="/auction/:id" element={<LiveBid />} />
          <Route path="/drop" element={<DropPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
