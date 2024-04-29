import "./App.css";
import { useState, useEffect, useCallback } from "react";

import Card from "./components/card/Card";
import { getData } from "./db/db";
import { useTelegram } from "./hooks/useTelegram";
import { BACKAND_URL } from "./constants";
import axios from "axios";

const orders = getData();

function App() {
  const [commonCount, setCommonCount] = useState(0);
  const [cartItems, setCartItems] = useState(null);
  const { tg, onClose, queryId } = useTelegram();

  const onSendData = useCallback(() => {
    const query = queryId ? { ...cartItems, query_id: queryId } : cartItems;
    console.log("query===", cartItems);

    console.log("===>", query);
    axios
      .post(`${BACKAND_URL}telegram/bot`, {
        body: JSON.stringify({ test: "test_data" }),
      })
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
    //onClose();
  }, [cartItems]);

  useEffect(() => {
    tg.ready();
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
          />
        ))}
      </div>
    </>
  );
}

export default App;
