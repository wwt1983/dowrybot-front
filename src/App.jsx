import "./App.css";
import { useState, useEffect } from "react";

import Card from "./components/card/Card";
import { getData } from "./db/db";
import { useTelegram } from "./hooks/useTelegram";
import { BACKAND_URL } from "./constants";

const orders = getData();

function App() {
  const [commonCount, setCommonCount] = useState(0);
  const [cartItems, setCartItems] = useState(null);
  const { tg, onClose, queryId ,id} = useTelegram();

  async function onSendData() {
    try {
      const query = queryId ? { ...cartItems, query_id: queryId , id: id} : cartItems;
      console.log("query===", cartItems);
      let response = await fetch(
        `https://honest-snails-scream.loca.lt/telegram/bot`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(query),
        }
      );
      let result = await response.json();
      console.log("===> response", result);

      onClose();
    } catch (e) {
      console.log(e);
    }
  }

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
            onSendData={onSendData}
          />
        ))}
      </div>
    </>
  );
}

export default App;
