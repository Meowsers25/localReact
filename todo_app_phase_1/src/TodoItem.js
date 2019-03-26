import React from "react";

function TodoItem(props) {
  const inline = {
    display: "inline-block",
    float: "left",
    marginRight: 15,
    padding: 20
  };

  const width = {
    width: "80%"
  };

  return (
    <div>
      <input
        style={inline}
        type="checkbox"
        checked={props.item.completed}
        onChange={() => console.log("On Change")}
      />

      <p>{props.item.text}</p>
      <hr style={width} />
    </div>
  );
}

export default TodoItem;
