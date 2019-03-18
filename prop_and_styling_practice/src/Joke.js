import React from "react";

function Joke(props) {
  return (
    <div>
      <h3 style={{ display: props.question ? "block" : "none" }}>
        Question:{props.question}
      </h3>
      <h3 style={{ color: !props.question && "cornflowerblue" }}>
        Answer:{props.punchLine}
      </h3>
      <br />
      <hr />
    </div>
  );
}
export default Joke;
