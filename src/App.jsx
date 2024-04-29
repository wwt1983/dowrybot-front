import "./App.css";
import { useState, useEffect } from "react";

import Card from "./components/card/Card";
import { getData } from "./db/db";
import { useTelegram } from "./hooks/useTelegram";

const orders = getData();

function App() {
  const [commonCount, setCommonCount] = useState(0);
  const [cartItems, setCartItems] = useState(null);
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  const tgOnChange = () => {
    tg.MainButton.text = "Продолжить";
    tg.MainButton.color = "red";
    onToggleButton();
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
