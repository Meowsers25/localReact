// import React, { Component } from "react";
import React from "react";

function handleClicked() {
  console.log("I was clicked!");
}

// function mouse() {
//   console.log("Moused Over");
// }
// same function is used inline below

function App() {
  return (
    <div>
      <img
        onMouseOver={() => console.log("Moused Over!")}
        src="https://www.fillmurray.com/200/100"
        alt="Bill Murray"
      />
      <br />
      <br />
      <button onClick={handleClicked}>Click me</button>
    </div>
  );
}

export default App;
