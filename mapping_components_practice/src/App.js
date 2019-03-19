import React from "react";
import Product from "./Product";
import pData from "./vschoolProducts";

function App() {
  const practice = pData.map(function(item) {
    return <Product key={item.id} products={item} />;
  });
  return <div>{practice}</div>;
}

export default App;
