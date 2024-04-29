import img1 from "../images/1.webp";
import img2 from "../images/2.webp";
import img3 from "../images/3.webp";
import img4 from "../images/4.webp";
import img5 from "../images/5.webp";

export function getData() {
  return [
    {
      title: "Тюль",
      cash: "100",
      Image: img1,
      id: 1,
      keys: 'тюль-ключ',
    },
    {
      title: "Шорты",
      cash: "200",
      Image: img2,
      id: 2,
      keys: 'шторы-ключ',
    },
    {
      title: "Брюки мужские",
      cash: "200",
      Image: img3,
      id: 3,
      keys: 'брюки-ключ',
    },
    {
      title: "Брюки женские",
      cash: "400",
      Image: img4,
      id: 4,
      keys: 'брюки-ключ',
    },
    {
      title: "Панама",
      cash: "300",
      Image: img5,
      id: 5,
      keys: 'панама-ключ',
    },
  ];
}
