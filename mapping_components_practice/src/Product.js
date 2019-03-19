import React from "react";

function Product(props) {
  return (
    <div>
      <h3>{props.products.name}</h3>
      <p
        style={{ color: props.products.price === 0 ? "red" : "cornflowerblue" }}
      >
        {props.products.price}
      </p>
      <hr />
    </div>
  );
}

export default Product;
