import { v4 as uuidv4 } from "uuid";
import {
  greekSalad,
  bruschetta,
  lemonDessert,
  sarah,
  ajay,
  katherine,
  derek,
} from "./images";

const specialsData = [
  {
    id: uuidv4(),
    image: greekSalad,
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
  },
  {
    id: uuidv4(),
    image: bruschetta,
    title: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: uuidv4(),
    image: lemonDessert,
    title: "Lemon Dessert",
    price: "5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const testimonialsData = [
  {
    id: uuidv4(),
    image: sarah,
    name: "Sara López",
    date: new Date(2023, 2, 25), //2 weeks ago
    rating: 5,
    description:
      "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
  },
  {
    id: uuidv4(),
    image: ajay,
    name: "Ajay Kanojia",
    date: new Date(2023, 2, 9), //1 month ago
    rating: 5,
    description:
      "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
  },
  {
    id: uuidv4(),
    image: katherine,
    name: "Katherine Oh",
    date: new Date(2023, 1, 3), //2 months ago
    rating: 5,
    description: "Best Feta Salad in town. Flawless everytime!",
  },
  {
    id: uuidv4(),
    image: derek,
    name: "Derek Conway",
    date: new Date(2023, 0, 31), //2 months ago
    rating: 5,
    description: "Such a chilled out atmosphere - love it!",
  },
];

export { specialsData, testimonialsData };
