import React from "react";
import cardImage from "../assets/images/illustration-hero.svg";
import iconMusic from "../assets/images/icon-music.svg";
import "./OrderSummary.css";
function OrderSummary() {
  return (
    <div className="container">
      <div className="card">
        <img className="card-image" src={cardImage} alt="cardimage" />
        <h1 className="card-title"> Order Summary</h1>
        <div className="card-content">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </div>
        <div className="order-details">
          <img className="icon-music" src={iconMusic} alt="iconMusic" />
          <div className="plan-details">
            <h2 className="plan-title">Annual Plan</h2>
            <p className="plan-price">$59.99/year</p>
            <a href="#" >Change</a>
          </div>
        </div>
        <a href="" className="proceed-button">Proceed to Payment</a>
        <a href="" className="cancel-button">Cancel Order</a>
      </div>
    </div>
  );
}

export default OrderSummary;
