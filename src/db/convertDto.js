export function dtoToOffers(data) {
  if (!data || !Array.isArray(data)) return [];
  console.log(data);
  try {
    return data.reduce((acc, item) => {
      if (!item.fields?.Фото[0]) return acc;
      acc.push({
        title: item.fields.Name,
        cash: item.fields.Кешбэк,
        priceForYou: item.fields["Ваша цена"],
        priceWb: item.fields["Цена WB"],
        image: item.fields?.Фото[0]?.url,
        id: item.id,
        offerId:item.fields.Id,
        articul: item.fields.Артикул,
        keys: item.fields["Ключевые слова"],
      });
      return acc;
    }, []);
  } catch (e) {
    console.log("dtoToOffers", e);
  }
}
