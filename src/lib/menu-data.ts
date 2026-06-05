import dish1 from "@/assets/dish1.png.asset.json";
import dish2 from "@/assets/dish2.png.asset.json";
import dish3 from "@/assets/dish3.png.asset.json";
import dish4 from "@/assets/dish4.png.asset.json";
import dish5 from "@/assets/dish5.png.asset.json";
import dish6 from "@/assets/dish6.png.asset.json";
import dish9 from "@/assets/dish9.png.asset.json";
import drink from "@/assets/drink.png.asset.json";
import interior from "@/assets/interior.png.asset.json";

export const IMG = {
  dish1: dish1.url,
  dish2: dish2.url,
  dish3: dish3.url,
  dish4: dish4.url,
  dish5: dish5.url,
  dish6: dish6.url,
  dish9: dish9.url,
  drink: drink.url,
  interior: interior.url,
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
  tag?: string;
};

export const MENU: MenuItem[] = [
  {
    name: "Schnitzel & Pomme Purée",
    description: "Hand-breaded chicken cutlet, silky mash, peppered mushroom jus.",
    price: "₦12,500",
    category: "Mains",
    image: IMG.dish1,
    featured: true,
    tag: "Chef's Pick",
  },
  {
    name: "La Branco Club",
    description: "Triple-stack toasted club, smoked chicken, cheddar, crisp fries.",
    price: "₦9,800",
    category: "Lunch",
    image: IMG.dish2,
  },
  {
    name: "Suya-Grilled Chicken",
    description: "Charcoal-grilled chicken with our house suya rub and golden fries.",
    price: "₦11,200",
    category: "Mains",
    image: IMG.dish3,
    featured: true,
  },
  {
    name: "Yam, Dodo & Egg Sauce",
    description: "Boiled yam, sweet plantain, slow-stewed pepper & tomato egg sauce.",
    price: "₦7,500",
    category: "Breakfast",
    image: IMG.dish4,
    tag: "Local Favourite",
  },
  {
    name: "Coconut Fried Rice & Grill",
    description: "Toasted coconut fried rice, vegetable confetti, grilled chicken thigh.",
    price: "₦10,500",
    category: "Mains",
    image: IMG.dish5,
    featured: true,
  },
  {
    name: "Wings & Spring Rolls",
    description: "Sticky honey-pepper wings with crisp vegetable spring rolls.",
    price: "₦8,900",
    category: "Small Plates",
    image: IMG.dish6,
  },
  {
    name: "Peppered Snail",
    description: "Slow-simmered snails, scotch bonnet, bell pepper, sweet onions.",
    price: "₦13,400",
    category: "Small Plates",
    image: IMG.dish9,
    tag: "Lagos Classic",
  },
  {
    name: "Branco Mojito",
    description: "White rum, fresh lime, garden mint, cane sugar, soda.",
    price: "₦4,500",
    category: "Bar",
    image: IMG.drink,
    featured: true,
  },
];

export const CATEGORIES = ["All", "Breakfast", "Small Plates", "Mains", "Lunch", "Bar"];
