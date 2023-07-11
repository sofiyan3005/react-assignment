import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../store";
import '../../styles/nav.css';

function Nav() {
  // Use state
  const [homeState, setHomeState] = useState(
    "hvr-underline-from-center nav-link active"
  );
  const [aboutState, setAboutState] = useState(
    "hvr-underline-from-center nav-link"
  );
  const [productState, setProductState] = useState(
    "hvr-underline-from-center nav-link"
  );
  const [cartState, setCartState] = useState(
    "hvr-underline-from-center nav-link"
  );

  // Functions
  // Home
  const setHome = () => {
    setHomeState("hvr-underline-from-center nav-link active");
    setAboutState("hvr-underline-from-center nav-link");
    setProductState("hvr-underline-from-center nav-link");
    setCartState("nav-link");
  };

  // About
  const setAbout = () => {
    setHomeState("hvr-underline-from-center nav-link");
    setAboutState("hvr-underline-from-center nav-link active");
    setProductState("hvr-underline-from-center nav-link");
    setCartState("nav-link");
  };

  // Product
  const setProduct = () => {
    setHomeState("hvr-underline-from-center nav-link");
    setAboutState("hvr-underline-from-center nav-link");
    setProductState("hvr-underline-from-center nav-link active");
    setCartState("nav-link");
  };

  // Cart
  const setTheCart = () => {
    setHomeState("hvr-underline-from-center nav-link");
    setAboutState("hvr-underline-from-center nav-link");
    setProductState("hvr-underline-from-center nav-link");
    setCartState("nav-link active");
  };

  // Total
  let totalItems = useSelector(selectTotalItems);

  return (
    <div>
      <div>
        <nav className="nav-container">
          <h2>
            <img className="logo" src="./white-nike-logo.png" alt="Nike"></img>
          </h2>
          <div>
            <Link className={homeState} to="/" onClick={setHome}>
              {" "}
              Home{" "}
            </Link>
            <Link className={aboutState} to="/about" onClick={setAbout}>
              {" "}
              About{" "}
            </Link>
            <Link className={productState} to="/product" onClick={setProduct}>
              {" "}
              Products{" "}
            </Link>
          </div>
          {/* Badged */}
          <div className="nav-cart">
          <Badge badgeContent={totalItems} color="primary">
            <Link className={cartState} to="/cart" onClick={setTheCart}>
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </Badge>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
