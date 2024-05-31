import { formatInTimeZone } from 'date-fns-tz';

export function dtoToOffers(data) {
  if (!data || !Array.isArray(data)) return [];
  try {
    return data.reduce((acc, item) => {
      if (!item?.fields?.Фото) return acc;
      acc.push({
        title: item.fields.Name,
        cash: item.fields.Кешбэк,
        priceForYou: item.fields["Ваша цена"],
        priceWb: item.fields["Цена WB"],
        image: item.fields?.Фото[0]?.url,
        id: item.fields.Id,
        articul: item.fields.Артикул,
        keys: item.fields["Ключевые слова"],
        description: item.fields["Описание"],
        status: item.fields.Status,
        start: formatInTimeZone(item.fields.Старт, 'Europe/Moscow', 'dd.MM.yyyy HH:mm'),
        location: item.fields["Региональность"],
        positionOnWB: item.fields["Позиция в WB"],
      });
      return acc;
    }, []);
  } catch (e) {
    console.log("dtoToOffers", e);
  }
}
