import { BACKAND_URL } from "../constants";
import { dtoToOffers } from "./convertDto";
import axios from "axios";
const instance = axios.create({
  proxy: {
    host: "185.252.146.160",
    port: 3128,
    protocol: "https",
  },
});
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
    const response = await instance.get(`${BACKAND_URL}airtable/offers`, {
      url: `${BACKAND_URL}airtable/offers`,
      baseURL: `${BACKAND_URL}airtable/offers`,
      method: "GET",
      timeout: 30000,
    });

    if (!response || !response.data.records) return [];

    return dtoToOffers(response.data.records);
  } catch (e) {
    console.log("getOffers", e);
    return [];
  }
}
