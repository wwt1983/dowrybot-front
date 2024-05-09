export function dtoToOffers(data) {
  if (!data || !Array.isArray(data)) return [];

  return data.reduce((acc, item) => {
    acc.push({
      title: item.fields.Name,
      cash: item.fields.Цена,
      Image: item.fields.Фото[0].thumbnails.full.url,
      id: item.id,
      articul: item.fields.Артикул,
      keys: item.fields["Ключевые слова"],
    });
    return acc
  }, []);
}
