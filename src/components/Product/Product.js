import React, { useEffect } from "react";
import "../../styles/product.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { store, selectProducts, compareProducts, add, setTotalItems } from "../../store";
import { Grid } from "@material-ui/core";
import { Button, Fab } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Product(filters) {
  // Select Data from redux store

  const products = useSelector(selectProducts);

  let filteredProducts = [];
  if (!filters.appliedFilters) {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((product) => {
      for (const key in filters.appliedFilters) {
        let sizeFlag = false;
        let colorFlag = false;
        if (key === 'size' && filters.appliedFilters[key] !== '') {
          sizeFlag = product[key].findIndex((shoeSize) => shoeSize === filters.appliedFilters[key]);
        }
        if (key === 'color' && filters.appliedFilters[key] !== '' ) {
          colorFlag = product[key] === filters.appliedFilters[key];
        }

        if (sizeFlag > 0 || colorFlag) {
          return true;
        }
      }
      return false;
    });
  }

  const cartProducts = products.filter((product) => product.added);

  useEffect(() => {
    store.dispatch(setTotalItems(cartProducts.length));
  }, [cartProducts]);

  return (
    <Grid sx={{ flexGrow: 1 }} className="products-list-container" container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {filteredProducts.map((product) => {
            // variables
            let id = product.id;
            let title = product.title;
            let imageUrl = product.imageUrl;
            let price = product.price;
            let size = product.size;

            return (
              <Grid key={id} item xs={12} md={4}>
                <div className={"product " + (product.compare ? "compare" : "")} >
                  <div className="product-image-container">
                    <img src={imageUrl} alt={title} />
                  </div>
                  <div className="image_overlay" />
                  <div className="view_details" onClick={() => store.dispatch(compareProducts(product))}>
                    {product.compare ? "Remove" : "Compare"}
                  </div>
                  <div className="stats">
                    <div className="stats-container">
                      <Link key={id} to={`/product/${id}`}>
                        <div className="padding-b">
                          <span className="product_name">{title}</span>
                        </div>
                        <div className="padding-b">
                          <span className="product_price">{'\u20AC' + price}</span>
                        </div>
                        <div className="padding-b">
                          <span>Size: </span>
                          {
                            size.map((s) => {
                              return (
                                <Fab key={s} color="secondary" className="margin-r" size="small">
                                  <span className="product_size">{s}</span>
                                </Fab>
                              )
                            })
                          }
                        </div>
                      </Link>
                      <div className="add-to-cart-container">
                        <Button variant="contained" endIcon={<AddShoppingCartIcon />} onClick={() => store.dispatch(add(product))}>
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <div className="page-wrapper"></div>
    </Grid>
  );
}

export default Product;
