import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ flowers, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const [addClicked, setAddClicked] = useState(false);

  const { title, Image, price, id } = flowers;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(flowers);
    setAddClicked(true);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(flowers);
    if (count === 1) {
      setAddClicked(false);
    }
  };

  return (
    <div className="card">
      <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} . <span className="card__price">${price}</span>
      </h4>

      <div className="btn-container">
        {!addClicked && (
          <Button title={"Add"} type={"add"} onClick={handleIncrement} />
        )}
        {addClicked && (
          <>
            <Button title={"+"} type={"add__plus"} onClick={handleIncrement} />
            <Button title={"-"} type={"remove"} onClick={handleDecrement} />
          </>
        )}
      </div>
    </div>
  );
}

export default Card;