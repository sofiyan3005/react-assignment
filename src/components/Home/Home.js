import React from "react";
import Shoes from "../../latestShoes.json";
import '../../styles/home.css';
import { ProductLayover } from "../ProductLayover/ProductLayover";

function Home() {

  return (
    <div>
      <div className="banner-image"></div>
      <div>
        <span className="tagline">JUST DO IT</span>
        <div className="tagline-para">
          Nike has been your companion in happiness, both big and small, for
          over 50 years. Our roots are firmly grounded in Pakistan and with its
          people.
        </div>

        <br />
        <br />
        <br />
        <div className="latest-container">
          <hr className="line" /> &nbsp; &nbsp;
          <span className="latest-designs">Latest Designs</span>&nbsp;&nbsp;
          <hr className="line" />
          <br />
          <br />
          <div className="product-container image-gallery">
            {Object.keys(Shoes).map((keyName, index) => {
              const shoe = Shoes[keyName];
              return (
                <ProductLayover key={keyName} product={shoe}></ProductLayover>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
