import "./App.css";
import { useState, useEffect, useCallback } from "react";

import Card from "./components/card/Card";
import { getData } from "./db/db";
import { useTelegram } from "./hooks/useTelegram";
import { BACKAND_URL } from "./constants";

const orders = getData();

function App() {
  const [commonCount, setCommonCount] = useState(0);
  const [cartItems, setCartItems] = useState(null);
  const { tg, onClose, queryId } = useTelegram();

  const onSendData = useCallback(async () => {
    try {
      const query = queryId ? { ...orders[0], query_id: queryId } : orders[0];
      console.log("query===", cartItems);
      let response = await fetch(`https://metal-sloths-admire.loca.lt/telegram/bot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(query)
      });
      let result = await response.json();

      console.log('===> response', result)
      //onClose();
    } catch (e) {
      console.log(e);
    }
  }, [cartItems]);

  useEffect(() => {
    console.log("load tg");
    tg.ready();
    onSendData();
  }, []);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

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
            onSendData={onSendData}
          />
        ))}
      </div>
    </>
  );
}

export default App;
