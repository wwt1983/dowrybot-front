import "./App.css";
import { useState, useEffect, useCallback } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Card from "./components/card/Card";
import Button from "./components/button/Button";

import { useTelegram } from "./hooks/useTelegram";
import { sendData, getOffers, test } from "./db/fetch";

const override = {
  display: "block",
  margin: "50% auto",
};
function App() {
  const [commonCount, setCommonCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState(null);
  const [orders, setOrders] = useState([]);
  const { tg, queryId, id } = useTelegram();

  const onSendData = useCallback(async () => {
    try {
      if (queryId) {
        setIsLoading(true);

        const response = await sendData(cartItems, queryId, id);
        await response.json();
      } else {
        //
      }
    } catch (e) {
      console.log(e);
    } finally {
      tg.close();
      setIsLoading(false);
    }
  }, [tg, queryId, id, cartItems, setIsLoading]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, tg]);

  useEffect(() => {
    if (commonCount > 0) {
      tg.MainButton.text = "продолжить оформление";
      tg.MainButton.color = "rgb(38, 121, 38)";
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [tg.MainButton, commonCount]);

  const handleOffers = () => {
    //
    setIsLoading(true);
    test().then((response) => {
      setIsLoading(false);
      setOrders(response);
    });
  };

  useEffect(() => {
    getOffers().then((response) => {
      setIsLoading(false);
      setOrders(response);
    });
    tg.ready();
  }, [queryId, tg]);

  return (
    <>
      {isLoading ? (
        <ClockLoader
          color="#ad9a1c"
          loading={isLoading}
          size={50}
          cssOverride={override}
          speedMultiplier={1}
        />
      ) : (
        <>
          <h4 className="heading">
            {cartItems ? cartItems.title : "Раздачи Dowry"}
          </h4>
          <div className="cards__container">
            {orders && orders.length > 0 ? (
              orders.map((order) => (
                <Card
                  order={order}
                  key={order.id}
                  commonCount={commonCount}
                  setCommonCount={setCommonCount}
                  setCartItems={setCartItems}
                />
              ))
            ) : (
              <Button
                title={"Обновить." + orders}
                type={"add"}
                onClick={() => handleOffers()}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default App;
