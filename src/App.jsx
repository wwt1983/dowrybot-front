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
  const { tg, queryId, id } = useTelegram();

  const onSendData = useCallback(async () => {
    console.log('test')
    try {
      if (queryId) {
        const response = await fetch(
          `https://true-ways-dance.loca.lt/telegram/bot`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
              title: cartItems.title,
              cash: cartItems.cash,
              keys: cartItems.keys,
              query_id: queryId,
              id: id,
              articul: cartItems.articul
            }),
          }
        );
        await response.json();
      } else {
        //
      }
    } catch (e) {
      console.log(e);
    } finally {
      tg.close();
    }
  }, [tg, queryId, id, cartItems]);

  useEffect(() => {
    tg.ready();
  }, []);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, tg]);

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
