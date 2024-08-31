import { BACKAND_URL } from "../constants";
import { dtoToOffers } from "./convertDto";
import axios from "axios";

export async function sendData(items, queryId, id) {
  return await fetch(`${BACKAND_URL}telegram/bot`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      title: items.title,
      //cash: items.cash,
      //keys: items.keys,
      query_id: queryId,
      id: id,
      articul: items.articul,
      offerId: items.id,
      //image: items.image,
      //priceForYou: items.priceForYou,
      //priceWb: items.priceWb,
      //description: items.description,
      //location: items.location,
      //positionOnWB: items.positionOnWB,
    }),
  });
}

export async function getOffers() {
  try {
    const response = await axios.get(`${BACKAND_URL}airtable/offers`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        proxy: {
          protocol: 'https',
          host: 'dowray.ru',
          port: 8080
        }
      },
    });

    if (!response || !response.data.records) return [];

    return dtoToOffers(response.data.records);
  } catch (e) {
    console.log("getOffers", e);
    return [];
  }
}
