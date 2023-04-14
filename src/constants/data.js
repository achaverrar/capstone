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
    comment: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
  },
  {
    id: uuidv4(),
    image: ajay,
    name: "Ajay Kanojia",
    date: new Date(2023, 2, 9), //1 month ago
    rating: 5,
    comment: "We had such a great time celebrating my wife’s birthday!",
  },
  {
    id: uuidv4(),
    image: katherine,
    name: "Katherine Oh",
    date: new Date(2023, 1, 3), //2 months ago
    rating: 5,
    comment: "Best Feta Salad in town. Flawless everytime!",
  },
  {
    id: uuidv4(),
    image: derek,
    name: "Derek Conway",
    date: new Date(2023, 0, 31), //2 months ago
    rating: 4.5,
    comment: "Such a chilled out atmosphere - love it!",
  },
];

const footerData = [
  {
    id: uuidv4(),
    title: "Doormat Navigation",
    links: [
      {
        text: "Home",
        href: "/",
      },
      {
        text: "About Us",
        href: "#about-us",
      },
      {
        text: "Menu",
        href: "#specials",
      },
      {
        text: "Reservations",
        href: "#hero",
      },
      {
        text: "Order Online",
        href: "#specials",
      },
      {
        text: "Login",
        href: "#",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Contact",
    links: [
      {
        text: "2263 John Calvin Drive",
        href: "",
      },
      {
        text: "708-930-8580",
        href: "tel:+17089308580",
      },
      {
        text: "hello@littlelemon.com",
        href: "mailto:hello@littlelemon.com",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Social Media Links",
    links: [
      {
        text: "Facebook",
        href: "https://facebook.com/",
      },
      {
        text: "Instagram",
        href: "https://www.instagram.com",
      },
      {
        text: "YouTube",
        href: "https://www.youtube.com",
      },
      {
        text: "Twitter",
        href: "https://www.twitter.com",
      },
    ],
  },
];

const inputs = [
  {
    key: uuidv4(),
    id: "date",
    type: "date",
    placeholder: "",
    errorMessage: "",
    pattern: "",
    label: "Choose date",
    required: true,
  },
  {
    key: uuidv4(),
    id: "time",
    type: "select",
    placeholder: "",
    label: "Choose time",
    options: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  },
  {
    key: uuidv4(),
    id: "guests",
    type: "number",
    placeholder: "1",
    min: "1",
    max: "10",
    label: "Number of guests",
  },
  {
    key: uuidv4(),
    id: "occasion",
    type: "select",
    placeholder: "",
    label: "Occasion",
    options: ["Birthday", "Anniversary"],
  },
];

export { specialsData, testimonialsData, footerData };
