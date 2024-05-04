import { BACKAND_URL } from "../constants";

export async function sendData(cartItems, queryId, id) {
  return await fetch(`${BACKAND_URL}telegram/bot`, {
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
      articul: cartItems.articul,
    }),
  });
}

export async function getDistributions() {
  try {
    const response = await fetch(`${BACKAND_URL}/airtable/distribution`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const result = await response.json();
    return result;
  } catch (e) {
    return [];
  }
}
