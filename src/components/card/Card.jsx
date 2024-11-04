import { useState } from "react";
import { format } from "date-fns";

import "./Card.css";
import Button from "../button/Button";
import { Status } from "../../constants";

function Card({
  order,
  commonCount,
  setCommonCount,
  setCartItems,
  isAirtable,
}) {
  const [count, setCount] = useState(0);

  const { title, cash, image, priceForYou, priceWb, status, start, link } =
    order;

  const isScheduled = status === Status.scheduled;
  const isStop = status === Status.stop || status === Status.archive;

  const handleIncrement = () => {
    if (commonCount === 0) {
      if (isAirtable) {
        window.location.href = link;
      }

      setCount(1);
      setCartItems(order);
      setCommonCount(1);
    }
  };
  const handleDecrement = () => {
    setCount(0);
    setCommonCount(0);
    setCartItems(null);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={image} alt={title} />
      </div>
      <h4 className="card__title">
        {title}
        <span className="card__price">
          ❌ Цена на WB~ {priceWb}₽<br />
          ❗️ Кешбэк ~ {cash} ❗️ <br />
          ⭐️ Ваша цена - {priceForYou}₽ 🫶 <br />
        </span>
      </h4>
      <div className="btn-container">
        {!isScheduled && !isStop && (
          <Button title={"+"} type={"add"} onClick={handleIncrement} />
        )}
        {isScheduled && (
          <span>
            <br />
            Старт: {format(start, "dd.MM.yyyy HH:mm")}
          </span>
        )}
        {count > 0 && !isStop && (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        )}
      </div>
    </div>
  );
}

export default Card;
