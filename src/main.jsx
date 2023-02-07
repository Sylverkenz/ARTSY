import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ProductProvider } from "./contexts/Productcontext";
import { FilterProvider } from "./contexts/Filtercontext";
import { CartProvider } from "./contexts/Cartcontext";
import { AuthProvider } from "./contexts/AuthContext";
import { ScrollToTop } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <FilterProvider>
            <CartProvider>
              <ScrollToTop />
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
