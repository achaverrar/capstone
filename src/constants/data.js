import { v4 as uuidv4 } from "uuid";
import { greekSalad, bruschetta, lemonDessert } from "./images";

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

export default specialsData;
