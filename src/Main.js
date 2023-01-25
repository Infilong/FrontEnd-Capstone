import React from "react";
import cover from "./Images/cover.jpg";
import dish1 from "./Images/dish1.jpg";
import dish2 from "./Images/dish2.jpg";
import dish3 from "./Images/dish3.jpg";
import dish4 from "./Images/dish4.jpg";
import dish5 from "./Images/dish5.jpg";

function Main(props) {
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
            <button id="reserveTableButton">Reserve Table</button>
          </div>

          <img className="box" src={cover} alt="Salad" id="coverImage" />
        </div>
      </section>

      <section>
        <div className="grid-container">
          <h1 className="grid-title">Specials</h1>
          <button className="grid-button">Online Menu</button>
          <div className="specialCard" id="specialCard1">
            <img src={dish1} alt="Salad"></img>
            <h5 className="name">Greek Meal</h5>
            <span className="price">$19.99</span>
            <p>
              Meal descriptions. Slow-cooked for eight hours, this intensely
              flavored and juicy lamb shank, infused with fresh rosemary and
              sage, is a house specialty. Served with smooth mashed potatoes and
              char-grilled, crispy asparagus, topped with a tangy golden-brown
              glaze for a meal hard to forget.
            </p>
            <h5 className="deliveryTag">Order & Delivery</h5>
          </div>
          <div className="specialCard" id="specialCard2">
            <img src={dish2} alt="Salad"></img>
            <h5 className="name">Greek Meal </h5>
            <span className="price">$19.99</span>
            <p>
              Meal descriptions. Slow-cooked for eight hours, this intensely
              flavored and juicy lamb shank, infused with fresh rosemary and
              sage, is a house specialty. Served with smooth mashed potatoes and
              char-grilled, crispy asparagus, topped with a tangy golden-brown
              glaze for a meal hard to forget.
            </p>
            <h5 className="deliveryTag">Order & Delivery</h5>
          </div>
          <div className="specialCard" id="specialCard3">
            <img src={dish3} alt="Salad"></img>
            <h5 className="name">Greek Meal</h5>
            <span className="price">$19.99</span>
            <p>
              Meal descriptions. Slow-cooked for eight hours, this intensely
              flavored and juicy lamb shank, infused with fresh rosemary and
              sage, is a house specialty. Served with smooth mashed potatoes and
              char-grilled, crispy asparagus, topped with a tangy golden-brown
              glaze for a meal hard to forget.
            </p>
            <h5 className="deliveryTag">Order & Delivery</h5>
          </div>
        </div>
      </section>

      <section>
        <div className="ratingCardContainer">
          <h3>Testmonials</h3>
        </div>
        <div className="ratingCardContainer">
          <div className="ratingCard">
            <h5 className="rating">Rating</h5>
            <img className="ratingPic"></img>
            <h5 className="ratingName">Name</h5>
            <h5 className="ratingReview">Review</h5>
          </div>
          <div className="ratingCard">
            <h5 className="rating">Rating</h5>
            <img className="ratingPic"></img>
            <h5 className="ratingName">Name</h5>
            <h5 className="ratingReview">Review</h5>
          </div>
          <div className="ratingCard">
            <h5 className="rating">Rating</h5>
            <img className="ratingPic"></img>
            <h5 className="ratingName">Name</h5>
            <h5 className="ratingReview">Review</h5>
          </div>
          <div className="ratingCard">
            <h5 className="rating">Rating</h5>
            <img className="ratingPic"></img>
            <h5 className="ratingName">Name</h5>
            <h5 className="ratingReview">Review</h5>
          </div>
        </div>
      </section>

      <section>
        <div className="body-flex-container">
          <div className="box">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Little Lemon is a brand of Little Lemon Corporation.Inc</p>
          </div>
          <img className="img1" src={dish4} alt="Steak" id="infoImage" />
          <img className="img2" src={dish5} alt="Steak" id="infoImage" />
        </div>
      </section>
    </>
  );
}

export default Main;
