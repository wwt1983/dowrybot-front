import React from "react";
import "../../App.css";
import { useState, useEffect, useCallback } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Card from "../card/Card";
import Button from "../button/Button";

import { getOffers } from "../../db/fetch";

const override = {
  display: "block",
  margin: "50% auto",
};

const History = () => {
  const [commonCount, setCommonCount] = useState(0);

  const [cartItems, setCartItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOffers("stop").then((response) => {
      setIsLoading(false);
      setOrders(response);
    });
  }, []);

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
            {cartItems ? cartItems.title : "История раздач Dowry"}
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
                  isAirtable={true}
                />
              ))
            ) : (
              <Button
                title={"Обновить"}
                type={"add"}
                onClick={() => window.location.reload()}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default History;
