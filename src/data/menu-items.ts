export type Pizza = {
  title: string;
  ingredients: string[];
  price: number;
  image: string;
  id: string;
};

export const MENU_ITEMS: Pizza[] = [
  {
    title: "Chemnitz Margherita",
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Basil"],
    price: 8.99,
    image: "margherita.webp",
    id: "f438d4e6-9b8c-49f5-9740-e513c0fecce7",
  },
  {
    title: "Saxony Pepperoni",
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni"],
    price: 9.99,
    image: "pepperoni.webp",
    id: "044dbc0d-aae9-415d-877a-cc3da8f5a9f3",
  },
  {
    title: "BBQ Chicken Chemnitz",
    ingredients: ["BBQ Sauce", "Mozzarella Cheese", "Grilled Chicken", "Red Onions"],
    price: 10.99,
    image: "bbq-chicken.webp",
    id: "22f02922-7957-45a5-bef4-c8d86e867bf8",
  },
  {
    title: "Veggie Saxony",
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Bell Peppers", "Olives", "Onions", "Mushrooms"],
    price: 9.49,
    image: "veggie-delight.webp",
    id: "fd9596c7-db9b-4c1b-ad73-ff69ce156923",
  },
  {
    title: "Hawaiian Chemnitz",
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Ham", "Pineapple"],
    price: 10.49,
    image: "hawaiian.webp",
    id: "092f1d7a-bd24-49b7-8078-4a097414276f",
  },
  {
    title: "Meat Lovers Saxony",
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Sausage", "Bacon", "Ham"],
    price: 11.99,
    image: "meat-lovers.webp",
    id: "afdaeb05-6ad9-4ab7-8d6b-ab5aa12aed77",
  },
  {
    title: "Four Cheese Chemnitz",
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Parmesan Cheese", "Cheddar Cheese", "Blue Cheese"],
    price: 10.49,
    image: "4-cheese.webp",
    id: "c4a3f995-391e-4218-a370-53b8df98c06a",
  },
  {
    title: "Spinach & Feta Saxony",
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Spinach", "Feta Cheese"],
    price: 9.99,
    image: "spinach-feta.webp",
    id: "0c427ecf-e84e-4d9f-9d8f-53ee3e08db9a",
  },
  {
    title: "Supreme Chemnitz",
    ingredients: ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni", "Sausage", "Bell Peppers", "Onions", "Olives", "Mushrooms"],
    price: 12.49,
    image: "supreme.webp",
    id: "6840c4ee-926f-4747-984c-db4ae4017c43",
  },
  {
    title: "Mushroom & Truffle Saxony",
    ingredients: ["Truffle Sauce", "Mozzarella Cheese", "Mushrooms"],
    price: 11.49,
    image: "mushroom-truffle.webp",
    id: "1619af4a-21a4-4159-bb17-b1a74ccc9857",
  },
];
