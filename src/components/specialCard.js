import React from "react";

// function SpecialCard(props), this is default syntax which can directly accessing the properties of the props object
// when the parameters are more than one, using the following syntax
function SpecialCard({ id, ...props }) {
  return (
    <div className="specialCard" id={id}>
      <img src={props.dish} alt={props.alt}></img>
      <div className="name-and-price">
        <div className="name">{props.name}</div>
        <div className="price">{props.price}</div>
      </div>
      <p>{props.description}</p>
      <div className="deliveryTag">Order & Delivery</div>
    </div>
  );
}

export default SpecialCard;
