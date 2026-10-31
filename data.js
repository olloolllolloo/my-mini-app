// data.js
// Список категорий, которые отображаются в фильтре
const CATEGORIES = ['godly', 'ancient', 'vintage', 'ножи', 'пистолеты', 'chroma'];

// Список товаров.
// ВАЖНО: поле category теперь МАССИВ — у товара может быть несколько категорий.
const products = [
    {
        id: 1,
        title: "тест Godly",
        price: 250,
        category: ["godly", "пистолеты"],   // товар сразу в двух категориях
        image: "images/icepiercer.png"
    },
    {
        id: 2,
        title: "тест Ancient",
        price: 250,
        category: ["ancient", "пистолеты"],   // товар сразу в двух категориях
        image: "images/icepiercer.png"
    },
    {
    id: 3,
    title: "Тест Chroma",
    price: 100,
    category: ["chroma", "ножи"],  // радужный фон
    image: "images/icepiercer.png"
},
{
    id: 4,
    title: "Тест Vintage",
    price: 100,
    category: ["vintage", "пистолеты"],  // желтый фон
    image: "images/icepiercer.png"
}
];
