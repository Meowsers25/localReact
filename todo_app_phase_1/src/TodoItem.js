import React from "react";

function TodoItem() {
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
      <input style={inline} type="checkbox" />

      <p>Placeholder text here</p>
      <hr style={width} />
    </div>
  );
}

export default TodoItem;
