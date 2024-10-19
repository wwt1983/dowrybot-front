import {
  BACKAND_URL,
  BACKGROUND_URL_AIRTABLE,
  TEST_BACKAND_URL,
} from "../constants";
import { dtoToOffers } from "./convertDto";
import axios from "axios";


export async function sendData(items, queryId, id) {
  return await fetch(`${TEST_BACKAND_URL}telegram/bot`, {
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
      //articul: items.articul,
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

export async function getOffers(type) {
  try {
    const response = await axios.get(`${TEST_BACKAND_URL}airtable/offers`, {
      params: type ? {type: type} : null
    });
    if (!response || !response.data) return [];

    return dtoToOffers(response.data);
  } catch (e) {
    console.log("getOffers", e);
    return [];
  }
}

export async function getOffersFromAirtable() {
  try {
    const response = await axios.get(BACKGROUND_URL_AIRTABLE, {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
      },
    });

    if (!response || !response.data.records) return [];

    return dtoToOffers(response.data.records);
  } catch (e) {
    console.log("getOffersFromAirtable", e);
    return [];
  }
}
