import React from "react";

// function SpecialCard(props), this is default syntax which can directly accessing the properties of the props object
// when the parameters are more than one, using the following syntax
function SpecialCard({ id, ...props }) {
  return (
    <div className="specialCard" id={id}>
      <img src={props.dish} alt={props.alt}></img>
      <h5 className="name">{props.name}</h5>
      <span className="price">{props.price}</span>
      <p>{props.description}</p>
      <h5 className="deliveryTag">Order & Delivery</h5>
    </div>
  );
}

export default SpecialCard;
