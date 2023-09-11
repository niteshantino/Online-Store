import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";

function App() {
  return (
    <div className="font-georgia">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Products />
            </>
          }
        />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
