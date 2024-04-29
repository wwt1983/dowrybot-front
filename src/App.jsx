import "./App.css";
import { useState, useEffect } from "react";

import Card from "./components/card/Card";
import { getData } from "./db/db";

const orders = getData();

const TELEGRAM = window.Telegram.WebApp;

function App() {
  const [commonCount, setCommonCount] = useState(0);
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    TELEGRAM.ready();
  }, []);

  const tgOnChange = () => {
    TELEGRAM.MainButton.text = "Продолжить";
    TELEGRAM.MainButton.color = "rgb(38, 121, 38)";
    if (commonCount > 0) {
      TELEGRAM.MainButton.show();
    } else {
      TELEGRAM.MainButton.hide();
    }
  };

  return (
    <>
      <h4 className="heading">{cartItems ? cartItems.title : "Раздачи"}</h4>
      <div className="cards__container">
        {orders.map((order) => (
          <Card
            order={order}
            key={order.id}
            commonCount={commonCount}
            setCommonCount={setCommonCount}
            setCartItems={setCartItems}
            tgOnChange={tgOnChange}
          />
        ))}
      </div>
    </>
  );
}

export default App;
