import { Button } from "@material-ui/core";
import React from "react";
import "../../App.css";
import '../../styles/footer.css';
import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";

function Footer() {
  return (
    <footer>
      <div className="wrapper"></div>
      <div className="footer">
        <div className="footer-content">
          <p className="footer-para">
            Developer: <span className="my-name"> Sofiyan Memon</span>
            <p className="copyright">
              Copyright&nbsp;&copy;&nbsp;Shoes Template
            </p>
          </p>

          <div className="contact"></div>
          <div className="socials">
            <Button aria-label="facebook">
              <Facebook />
            </Button>
            <Button aria-label="linkedIn">
            <LinkedIn />
            </Button>
            <Button aria-label="twitter">
              <Twitter />
            </Button>
            <Button aria-label="github">
              <GitHub />
            </Button>
          </div>

          <br />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
