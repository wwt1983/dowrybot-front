import { BACKAND_URL, BACKGROUND_URL_AIRTABLE } from "../constants";
import { dtoToOffers } from "./convertDto";
import axios from "axios";

export async function sendData(items, queryId, id) {
  location.href(items.link);

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

export async function getOffersFromAirtable() {
  try {
    const response = await axios.get(BACKGROUND_URL_AIRTABLE, {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
      },
    });

    console.log(response);

    if (!response || !response.data.records) return [];

    return dtoToOffers(response.data.records);
  } catch (e) {
    console.log("getOffers", e);
    return [];
  }
}
