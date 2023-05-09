import React from "react";
import "./Button.css";

function Button({ type, title, disable, onClick }) {
  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "add__plus" && "add__plus") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      }`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button