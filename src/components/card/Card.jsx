import { useState } from "react";

import "./Card.css";
import Button from "../button/Button";

function Card({ order, commonCount, setCommonCount, setCartItems,  tgOnChange}) {
  const [count, setCount] = useState(0);

  const { title, cash, Image, id } = order;

  const handleIncrement = () => {
    if (commonCount === 0) {
      setCount(1);
      setCartItems(order);  
      setCommonCount(1);
      tgOnChange(true)
    }
  };
  const handleDecrement = () => {
    setCount(0);
    setCommonCount(0);
    setCartItems(null);
    tgOnChange(false);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title} . <span className="card__price">{cash}</span>
      </h4>
      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count > 0 && (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        )}
      </div>
    </div>
  );
}

export default Card;
