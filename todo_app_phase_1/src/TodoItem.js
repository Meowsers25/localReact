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

  const finished = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div>
      <input
        style={inline}
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />

      <p style={props.item.completed ? finished : null}>{props.item.text}</p>
      <hr style={width} />
    </div>
  );
}

export default TodoItem;
