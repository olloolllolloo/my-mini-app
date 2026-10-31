// data.js
// Список категорий, которые отображаются в фильтре
const CATEGORIES = ['godly', 'ancient', 'vintage', 'ножи', 'пистолеты', 'chroma'];

// Список товаров.
// ВАЖНО: поле category теперь МАССИВ — у товара может быть несколько категорий.
const products = [
    {
        id: 1,
        title: "Ice Piercer",
        price: 250,
        category: ["ancient", "пистолеты"],   // товар сразу в двух категориях
        image: "images/icepiercer.png"
    }
    // Пример добавления ещё одного товара:
    // {
    //     id: 2,
    //     title: "Двойной клинок",
    //     price: 1500,
    //     category: ["ancient", "ножи"],
    //     image: "images/doubleblade.png"
    // },
];
