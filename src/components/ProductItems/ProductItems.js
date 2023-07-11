import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "../../shoes.json";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import '../../styles/productItem.css';
import { Button, Fab } from "@mui/material";
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { add, selectProducts, setTotalItems, store } from "../../store";
import { useSelector } from "react-redux";

function ProductItems() {
  const { id } = useParams();
  const shoe = Shoes[id];
  const products = useSelector(selectProducts);
  const cartProducts = products.filter((product) => product.added);

  //If shoe not found
  if (!shoe) {
    return <h2>Product Not Found !</h2>;
  }
  store.dispatch(setTotalItems(cartProducts.length));
  return (
    <div>
      <div className="product-items">
        <div>
          <Link className="back-btn" to="/product">
            <ArrowBackIosNewSharpIcon>Back</ArrowBackIosNewSharpIcon>
          </Link>
        </div>
        <Grid sx={{ flexGrow: 1 }} className="products-list-container" container spacing={2}>
          <Grid item xs={12}>
            <div className="item-container">
              <div className="image-container">
                <img
                  className="shoe-image"
                  alt="Shoe"
                  title={shoe.name}
                  src={shoe.img2}
                />
              </div>
              <div className="detail-container">
                <h3 className="shoe-name">{shoe.name}</h3>
                <h2 className="shoe-price">{'\u20AC' + shoe.price} </h2>
                <div>
                  {shoe.size.map((size) => {
                    return (<Fab key={size} color="secondary" className="margin-r" size="small">
                      <span className="product_size">{size}</span>
                    </Fab>)
                  })}
                </div>
                <div>
                  <Button variant="contained" onClick={() => store.dispatch(add(shoe))}>Add to Cart</Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ProductItems;
