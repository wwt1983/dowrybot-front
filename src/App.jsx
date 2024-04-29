import "./App.css";
import { useState, useEffect } from "react";

import Cart from "./components/cart/Cart";
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

  const onCheckout = () => {
    TELEGRAM.MainButton.text = "Продолжить";
    TELEGRAM.MainButton.show();
    TELEGRAM.MainButton.color = "rgb(38, 121, 38)";
  };

  return (
    <>
      <h4 className="heading">{cartItems ? cartItems.title : "Раздачи"}</h4>
      <Cart order={cartItems} onCheckout={onCheckout} />
      <div className="cards__container">
        {orders.map((order) => (
          <Card
            order={order}
            key={order.id}
            commonCount={commonCount}
            setCommonCount={setCommonCount}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </>
  );
}

export default App;
