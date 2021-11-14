import React from "react";
import cardImage from "../assets/images/illustration-hero.svg";
import iconMusic from "../assets/images/icon-music.svg";
import "./OrderSummary.css";
function OrderSummary() {
  return (
    <div className="container">
      <div className="card">
        <img className="card-image" src={cardImage} alt="cardimage" />
        <h2 className="card-title txt-center"> Order Summary</h2>
        <div className="card-content txt-center">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </div>
        <div className="order-details">
          <img className="icon-music" src={iconMusic} alt="iconMusic" />
          <div className="plan-details">
            <p className="plan-title">Annual Plan</p>
            <p className="plan-price">$59.99/year</p>
          </div>
          <a className="order-change" href="#">Change</a>
        </div>
        <a href="" className="proceed-button txt-center">
          Proceed to Payment
        </a>
        <a href="" className="cancel-button txt-center">
          Cancel Order
        </a>
      </div>
    </div>
  );
}

export default OrderSummary;
