import { BACKAND_URL } from "../constants";
import { dtoToOffers } from "./convertDto";
import axios from "axios";

export async function sendData(items, queryId, id) {
  return await axios.post(`${BACKAND_URL}telegram/bot`, {
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
  });
}

export async function getOffers() {
  try {
    const response = await axios.get(
      `https://api.airtable.com/v0/appVMEtut0NWayq26/tblGUNSCgAEwhxchx?cellFormat=json&filterByFormula==OR({Status}="In progress", {Status}="Scheduled")`,
      {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer patInEeuukHn2f8F0.8e6d4fb99e673b8dffb1debb1bb823f6ad678f79638b502a30b35eb91677f291`,
        },
      }
    );

    if (!response || !response.data.records) return [];

    return dtoToOffers(response.data.records);
  } catch (e) {
    console.log("getOffers", e);
    return [];
  }
}
