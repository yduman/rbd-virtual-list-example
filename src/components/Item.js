import React from "react";
import { getStyle } from "../utils";

function Item({ provided, item, style, isDragging }) {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={getStyle({
        draggableStyle: provided.draggableProps.style,
        virtualStyle: style,
        isDragging
      })}
      className={`item ${isDragging ? "is-dragging" : ""}`}
    >
      {item.text}
    </div>
  );
}

export default Item;
