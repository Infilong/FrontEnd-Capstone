import React from "react";

function RatingCard(props) {
  return (
    <div className="ratingCard">
      <h5 className="rating">Rating: {props.rating}</h5>
      <img className="ratingPic" src={props.avatar}></img>
      <h5 className="ratingName">{props.name}</h5>
      <h5 className="ratingReview">{props.review}</h5>
    </div>
  );
}

export default RatingCard;
