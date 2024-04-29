import "./App.css";
import { useState, useEffect, useCallback } from "react";

import Card from "./components/card/Card";
import { getData } from "./db/db";
import { useTelegram } from "./hooks/useTelegram";

const orders = getData();

function App() {
  const [commonCount, setCommonCount] = useState(0);
  const [cartItems, setCartItems] = useState(null);
  const { tg, onClose, queryId } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  const onSendData = useCallback(() => {
    //tg.sendData(JSON.stringify({...cartItems, queryId}));
    console.log('senddata', cartItems)
    fetch('https://long-jars-pull.loca.lt/telegram/web-data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(JSON.stringify({...cartItems, queryId}))
  })
    onClose();
  }, [cartItems]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, []);

  useEffect(() => {
    if (commonCount > 0) {
      tg.MainButton.text = "Продолжить";
      tg.MainButton.color = "#ad9a1c";
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [commonCount]);

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
          />
        ))}
      </div>
    </>
  );
}

export default App;
