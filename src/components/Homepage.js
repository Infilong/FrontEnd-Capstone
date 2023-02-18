import React from "react";
import { Link } from "react-router-dom";
import SpecialCard from "./specialCard";
import RatingCard from "./ratingCard";
import imageData from "../data/imageData";
import ratingData from "../data/ratingData";

const specialCardData = imageData.slice(1, 4);

function Homepage() {
  return (
    <>
      <section>
        <div className="body-flex-container">
          <div className="box">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Welcome to Little Lemon, we only provide dishes you can't find any
              where else.
              <br />
              Meal descriptions. Slow-cooked for eight hours, this intensely
              flavored and juicy lamb shank, infused with fresh rosemary and
              sage, is a house specialty. Served with smooth mashed potatoes and
              char-grilled, crispy asparagus, topped with a tangy golden-brown
              glaze for a meal hard to forget.
            </p>
            <button id="reserveTableButton" aria-label="On Click">
              <Link to="/booking" style={{ textDecoration: "none" }}>
                Reserve Table
              </Link>
            </button>
          </div>

          <img
            className="box"
            src={imageData[0].dish}
            alt={imageData[0].alt}
            id="coverImage"
          />
        </div>
      </section>

      <section>
        <div className="grid-container">
          <h1 className="grid-title">Specials</h1>
          <button className="grid-button" aria-label="On Click">
            <Link to="/booking" style={{ textDecoration: "none" }}>
              Reserve Table
            </Link>
          </button>

          {specialCardData.map((item, num) => (
            <SpecialCard
              key={item.name}
              dish={item.dish}
              alt={item.alt}
              name={item.name}
              price={item.price}
              description={item.description}
              id={`specialCard${num + 1}`}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="ratingCardContainer">
          <h3>Customer Reviews</h3>
        </div>
        <div className="ratingCardContainer">
          {ratingData.map((review) => (
            <RatingCard
              key={review.name}
              rating={review.rating}
              name={review.name}
              avatar={review.avatar}
              review={review.review}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="body-flex-container">
          <div className="box">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Little Lemon is a brand of Little Lemon Corporation.Inc</p>
          </div>
          <img
            className="img1"
            src={imageData[4].dish}
            alt={imageData[4].alt}
            id="infoImage"
          />
          <img
            className="img2"
            src={imageData[5].dish}
            alt={imageData[5].alt}
            id="infoImage"
          />
        </div>
      </section>
    </>
  );
}

export default Homepage;
