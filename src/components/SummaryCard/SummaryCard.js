import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "../../styles/orderSummary.css";

export default function SummaryCard({ items, amount }) {
  return (
    <Card className="card" variant="elevation" elevation={8}>
      <CardContent className="card-content">
        <Typography className="title" variant="h3">
          Order Summary ({items})
        </Typography>
        <Typography className="summary-text" variant="h3" gutterBottom>
          Total Amount : <strong className="summary-text">${amount}</strong>
        </Typography>
        {amount > 0 && (
          <Link className="checkout-button" to="/checkout">
            Proceed to Checkout
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
