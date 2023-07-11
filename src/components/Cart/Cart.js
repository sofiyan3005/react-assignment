import React, { useEffect } from "react";
import "../../App.css";
import SummaryCard from "../SummaryCard/SummaryCard";
import crossImage from "../../images/cross3.svg";
import { useSelector } from "react-redux";
import {
  store,
  remove,
  selectProducts,
  selectTotalItems,
  setTotalItems,
  selectTotalAmount,
  setTotalAmount,
  incrementProduct,
  decrementProduct,
} from "../../store";

import '../../styles/cart.css';
import { Fab } from "@mui/material";

function Cart() {
  // const total = Number(totalPrice).toFixed(2);

  // Get total Items from store
  let totalItems = useSelector(selectTotalItems);
  // Get total Amount from store
  let totalAmount = useSelector(selectTotalAmount);
  // Get products from store
  const products = useSelector(selectProducts);
  // Filter Cart products
  const cartProducts = products.filter((product) => product.added);
  // Set total Items
  store.dispatch(setTotalItems(cartProducts.length));

  // Calculate Total Amount
  let sum = cartProducts
    .map((product) => {
      let price = product.price;
      let quantity = product.quantity;
      let total = price * quantity;
      return total;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  // Use Effect
  useEffect(() => {
    store.dispatch(setTotalAmount(Number(sum).toFixed(2)));
  }, [sum]);

  return (
    <div>
      <SummaryCard items={totalItems} amount={totalAmount} />
      {/* Get Products */}
      <div className="cart-container">
        {products
          .filter((product) => product.added)
          .map((product) => {
            // variables
            let id = product.id;
            let title = product.title;
            let imageUrl = product.imageUrl;
            let price = product.price;
            let quantity = product.quantity;

            // If Quantity is > 0
            if (quantity > 0) {
              return (
                <div key={id} className="cart-products">
                  <div className="cart-image-container">
                    <img className="cart-shoe-image" alt={title} src={imageUrl} />
                  </div>
                  <div>
                    <h3 className="cart-shoe-name">{title} </h3>
                    <button
                      className="remove-btn hvr-grow"
                      onClick={() => store.dispatch(remove(product))}
                    >
                      {" "}
                      <img
                        src={crossImage}
                        height={30}
                        alt="Remove"
                        title="Remove"
                      />{" "}
                    </button>
                    <br />
                    <h2 className="shoe-price-cart"> ${price} </h2>
                    <label htmlFor="quantity">Items</label>{" "}
                    <Fab color="primary" size="small"
                      onClick={() => store.dispatch(decrementProduct(product))}
                    >
                      -
                    </Fab>
                    <input
                      readOnly
                      className="quantity"
                      maxLength="3"
                      type="text"
                      id="quantity"
                      value={quantity}
                    />
                    <Fab color="primary" size="small"
                      onClick={() => store.dispatch(incrementProduct(product))}
                    >
                      +
                    </Fab>
                  </div>
                </div>
              );
            } else {
              store.dispatch(remove(product));
              return null;
            }
          })}
      </div>
    </div>
  );
}

export default Cart;
