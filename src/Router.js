import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductItems from "./components/ProductItems/ProductItems";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import { ProductList } from "./components/ProductList/product-list";

function RouterFunction() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/product" element={<ProductList />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ordersummary" element={<OrderSummary />} />
          <Route path="/product/:id" element={<ProductItems />} />
          <Route path="*" element={() => <h2>404 Not Found </h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterFunction;
