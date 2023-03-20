import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getCartItemAction,
  getOrderSummary,
  getOrderSummaryAction,
} from "./asyncCartReducer";

const italianMeals = [
  {
    id: 1,
    uuid: "5bb5b5fb-ef67-4022-9962-9cf1d15c2ce3",
    name: "Margherita Pizza",
    description:
      "Traditional Italian pizza with tomato sauce, mozzarella cheese, and fresh basil",
    price: 12.99,
    rating: 4.5,
    quantity: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
  },
  {
    id: 2,
    uuid: "c131cd3e-fd21-49b4-bb5c-36a1f68b9e02",
    name: "Spaghetti Bolognese",
    description:
      "Spaghetti served with a rich and meaty tomato sauce with ground beef and parmesan cheese",
    price: 11.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1-500x480.jpg",
  },
  {
    id: 3,
    uuid: "d54a3c7b-85e8-41d5-93b5-7c02008094de",
    name: "Lasagna",
    description:
      "Layered pasta with beef, tomato sauce, and a blend of mozzarella and parmesan cheese",
    price: 14.99,
    rating: 4.7,
    quantity: 0,
    imageUrl:
      "https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg",
  },
  {
    id: 4,
    uuid: "8a4d4c4c-5c22-4f5d-b7aa-46df5efc1f2d",
    name: "Fettuccine Alfredo",
    description:
      "Fettuccine Alfredo or fettuccine al burro is an Italian pasta dish of fresh fettuccine tossed with",
    price: 10.99,
    rating: 4.2,
    quantity: 0,
    imageUrl:
      "https://www.foodnetwork.com/content/dam/images/food/fullset/2015/9/15/1/FNK_Chicken-Fettucine-Alfredo_s4x3.jpg",
  },
  {
    id: 5,
    uuid: "9d6c01f6-02b6-455e-b99f-6e7173166de5",
    name: "Chicken Parmesan",
    description:
      "Breaded chicken topped with tomato sauce and melted mozzarella cheese, served with spaghetti",
    price: 13.99,
    rating: 4.4,
    quantity: 0,
    imageUrl:
      "https://easychickenrecipes.com/wp-content/uploads/2022/01/Featured-Fried-Chicken-Parmesan-1.jpg",
  },
];
const indianMeals = [
  {
    id: 1,
    uuid: "18d463f6-9c23-4d6e-a057-7b51569de09e",
    name: "Butter Chicken",
    description:
      "Tender chicken pieces cooked in a creamy tomato-based sauce, served with rice or naan bread",
    quantity: 0,
    price: 12.99,
    rating: 4.5,
    imageUrl:
      "https://www.simplyrecipes.com/thmb/_yZgZlxc5yH5cDZAVa_oICIokkU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-5-de97119a16124a31a3b99ee16a398612.jpg",
  },
  {
    id: 2,
    uuid: "7e5272f3-55c3-43d7-b8f2-83dcf6fb33c6",
    name: "Chana Masala",
    description:
      "Spicy and tangy chickpea dish cooked with onion, tomato, and Indian spices, served with rice or naan bread",
    quantity: 0,
    price: 10.99,
    rating: 4.2,
    imageUrl:
      "https://holycowvegan.net/wp-content/uploads/2021/01/chana-masala-3-768x877.jpg",
  },
  {
    id: 3,
    uuid: "c7e8a0c9-7eb1-4256-94db-8a20388ce158",
    name: "Saag Paneer",
    description:
      "Soft Indian cheese cubes cooked in a creamy spinach sauce, served with rice or naan bread",
    quantity: 0,
    price: 11.99,
    rating: 4.3,
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/saag-paneer-4893170.jpg?quality=90&webp=true&resize=440,400",
  },
  {
    id: 4,
    uuid: "d2683690-48d3-4669-9f3f-f2e16f1d3b3f",
    name: "Aloo Gobi",
    description:
      "Cauliflower and potatoes cooked with Indian spices, served with rice or naan bread",
    quantity: 0,
    price: 9.99,
    rating: 4.1,
    imageUrl:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/26-may/Aloo_Gobi_Sabzi_Recipe-4.jpg",
  },
  {
    id: 5,
    uuid: "b934ae52-54dc-4c1f-b1cb-d214ebf03d05",
    name: "Biryani",
    description:
      "Flavorful rice dish cooked with your choice of chicken, lamb, or vegetables and Indian spices, served with raita and papadum",
    quantity: 0,
    price: 13.99,
    rating: 4.4,
    imageUrl:
      "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
  },
];
const japanesemeals = [
  {
    id: 1,
    uuid: "0b879d67-8ec0-49a4-b4a4-f4c7f8a4cc1d",
    name: "Sushi Combo",
    description:
      "A combination of 8 pieces of sushi and 1 roll, served with miso soup and salad",
    price: 18.99,
    rating: 4.6,
    quantity: 0,
    imageUrl: "https://m.media-amazon.com/images/I/71u6Gscwy4L._SX522_.jpg",
  },
  {
    id: 2,
    uuid: "eef5cf5c-5b5c-456a-a4d4-4ba614af19ab",
    name: "Tempura Udon",
    description:
      "Thick noodles in a hot broth with deep-fried shrimp and vegetables, served with tempura dipping sauce",
    price: 12.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.honestfoodtalks.com/wp-content/uploads/2021/12/Tempura-udon-recipe-including-slices-of-seaweed-chopped-scallions-and-narutomaki-500x500.jpg",
  },
  {
    id: 3,
    uuid: "f5e79411-8335-49b5-8f17-e80fa55faa1a",
    name: "Beef Teriyaki",
    description:
      "Grilled steak glazed with teriyaki sauce, served with rice and steamed vegetables",
    price: 16.99,
    rating: 4.5,
    quantity: 0,
    imageUrl:
      "http://images.summitmedia-digital.com/yummyph/images/2021/07/08/beefteriyakirecipe2.jpg",
  },
  {
    id: 4,
    uuid: "303204c4-1d4f-4ad4-8c36-bc152a84a2d2",
    name: "Okonomiyaki",
    description:
      "Japanese savory pancake with cabbage, pork, shrimp, and topped with a variety of sauces",
    price: 10.99,
    rating: 4.1,
    quantity: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/1200px-Okonomiyaki_001.jpg",
  },
  {
    id: 5,
    uuid: "bb6788c4-1a88-4d17-9e7b-0c9b9d5ef5e5",
    name: "Chicken Katsu Curry",
    description:
      "Breaded and deep-fried chicken cutlet served with a rich curry sauce and rice",
    price: 13.99,
    rating: 4.4,
    quantity: 0,
    imageUrl:
      "https://images.kitchenstories.io/wagtailOriginalImages/R2498-final-photo-_0.jpg",
  },
];
const frenchMeals = [
  {
    id: 1,
    uuid: "e7e784d6-c9c7-4365-aa10-7b89d4805a43",
    name: "Coq au Vin",
    description:
      "Braised chicken in red wine sauce, with bacon, mushrooms, and pearl onions",
    price: 17.99,
    rating: 4.5,
    quantity: 0,
    imageUrl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/2/1/0/IG1005_Coq_Au_Vin_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1404919272117.jpeg",
  },
  {
    id: 2,
    uuid: "46b9c727-8f76-4e72-85d1-a07cf0d8ebf2",
    name: "Steak Frites",
    description:
      "Grilled sirloin steak served with French fries and herb butter",
    price: 19.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/paleo-steak-frites-compound-butter.jpg?quality=82&strip=1",
  },
  {
    id: 3,
    uuid: "f204fe3a-29e3-45d3-8ca4-1fa8c4a29d1f",
    name: "Quiche Lorraine",
    description:
      "Classic savory quiche with bacon, cheese, and cream custard filling",
    price: 12.99,
    rating: 4.2,
    quantity: 0,
    imageUrl:
      "https://media.houseandgarden.co.uk/photos/6189479a8373470f8394e2e1/master/w_1600,c_limit/mary-berry-vogue-2-25jun13-pr_bt.jpg",
  },
  {
    id: 4,
    uuid: "d0d702eb-d3b3-428f-b71d-635ee0b34f2c",
    name: "Bouillabaisse",
    description:
      "Traditional fish soup with a variety of fish, shellfish, and vegetables, served with bread and rouille",
    price: 22.99,
    rating: 4.6,
    quantity: 0,
    imageUrl:
      "https://fearlesseating.net/wp-content/uploads/2022/03/New-England-Bouillabaisse-for-blog.jpg",
  },
  {
    id: 5,
    uuid: "5e0d5b18-5af7-4716-a416-6fa1e6eac9cb",
    name: "Ratatouille",
    description:
      "Vegetable stew with eggplant, zucchini, peppers, and tomatoes, served with bread",
    price: 13.99,
    rating: 4.1,
    quantity: 0,
    imageUrl:
      "https://www.allrecipes.com/thmb/B7pwC3xXpocRpwJfkPmDk9_A3nM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/222006-disneys-ratatouille-ddmfs-4x3-0747-631622b05b4e4bd196b037aed1c9f776.jpg",
  },
];
const chineseMeals = [
  {
    id: 1,
    uuid: "62d5de92-70a5-45b9-b41b-d65e6fc41d16",
    name: "Kung Pao Chicken",
    description: "Stir-fried chicken with peanuts, vegetables, and spicy sauce",
    price: 12.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.seriouseats.com/thmb/DHg5hjHYjFKaRCIA2L2eShTDjlE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__07__2021-02-12-Take-Out-Kung-Pao-Chicken-MHOM-11-c46f6c06713c45c5a287ddbf08779d04.jpg",
  },
  {
    id: 2,
    uuid: "08cf2da2-3b3d-4d57-9c0c-9a1b20f1d766",
    name: "Beef and Broccoli",
    description:
      "Stir-fried beef and broccoli in a savory brown sauce, served with steamed rice",
    price: 11.99,
    rating: 4.1,
    quantity: 0,
    imageUrl:
      "https://www.sprinklesandsprouts.com/wp-content/uploads/2021/03/Beef-and-Broccoli-Square.jpg",
  },
  {
    id: 3,
    uuid: "8910e517-c6c2-42d3-94c2-7d39020f9f27",
    name: "Shrimp Fried Rice",
    description:
      "The sweet brininess of the shrimp is a perfect match to pineapple's sweet-sourness.",
    price: 10.99,
    rating: 4.2,
    quantity: 0,
    imageUrl:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/03/Shrimp-Fried-Rice-main-1.jpg",
  },
  {
    id: 4,
    uuid: "37e5f56d-7f70-468e-b30b-61ebc4a1d99e",
    name: "Wonton Soup",
    description:
      "Clear broth soup with wonton dumplings, vegetables, and sliced pork",
    price: 8.99,
    rating: 4.4,
    quantity: 0,
    imageUrl:
      "https://redhousespice.com/wp-content/uploads/2022/07/chinese-pork-wonton-in-soup.jpg",
  },
  {
    id: 5,
    uuid: "46c67875-8ab2-4262-a15d-dcd1b40474b8",
    name: "Egg Rolls",
    description:
      "Crispy fried egg rolls with vegetables ,butter and meat filling",
    price: 6.99,
    rating: 4.0,
    quantity: 0,
    imageUrl:
      "https://1.bp.blogspot.com/-FtlrI6vhMww/X2jDWCb9zUI/AAAAAAAAMPQ/TmUrBHkFo6Ui-uPBi4D6KHKhKwq6-zebQCLcBGAsYHQ/s16000/Kolkata%2Begg%2Broll.JPG",
  },
];
const pizzaHutMenu = [
  {
    id: 1,
    uuid: "f52a23d6-2a84-47e6-9a6b-3425ac5f6a5a",
    quantity: 0,
    name: "Pepperoni Pizza",
    imageUrl:
      "https://www.dogtownpizza.com/wp-content/uploads/2020/01/picking-slice-of-pepperoni-pizza-picture-id1133727757.jpg",
    description: "A classic pizza topped with pepperoni and mozzarella cheese",
    rating: 4.5,
    price: 10.99,
  },
  {
    id: 2,
    uuid: "47c6094a-4f69-4c11-b76e-2c57baed1cc3",
    name: "Meat Lover's Pizza",
    quantity: 0,
    imageUrl:
      "https://www.thespruceeats.com/thmb/xuxwh4RIGcZMgaJE8u3SueM0SoA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aqIMG_4568fhor-0b89dc5c8c494ee9828ed29805791c5a.jpg",
    description:
      "A hearty pizza topped with sausage, pepperoni, ham, and bacon",
    rating: 4.7,
    price: 12.99,
  },
  {
    id: 3,
    uuid: "3e3b19c6-5d6b-42b9-b43e-811e14b94623",
    name: "Vegetarian Pizza",
    quantity: 0,
    imageUrl:
      "https://www.secondrecipe.com/wp-content/uploads/2021/10/air-fryer-pizza-1.jpg",
    description:
      "A veggie pizza topped with mushrooms, onions, green peppers, and olives",
    rating: 4.2,
    price: 9.99,
  },
  {
    id: 4,
    uuid: "00c16a7e-69c9-4bbf-99ea-4d4a4a4da4da",
    name: "Hawaiian Pizza",
    quantity: 0,
    imageUrl:
      "https://recipes.net/wp-content/uploads/2020/03/dominos-copycat-hawaiian-pizza-recipe.jpg",
    description:
      "A tropical pizza topped with ham, pineapple, and mozzarella cheese",
    rating: 4.0,
    price: 11.99,
  },
  {
    id: 5,
    uuid: "fc0a4d45-3123-416c-aed3-0f65d4638c15",
    name: "Supreme Pizza",
    quantity: 0,
    imageUrl:
      "https://recipesaresimple.com/wp-content/uploads/2014/07/CHICKEN-SUPREME-PIZZA-RECIPE1.jpg",
    description:
      "A loaded pizza topped with sausage, pepperoni, mushrooms, onions, green peppers, and olives",
    rating: 4.8,
    price: 14.99,
  },
  {
    id: 6,
    uuid: "1aa6f042-6d36-4de4-9b3e-fa2af6a60534",
    name: "BBQ Chicken Pizza",
    quantity: 0,
    imageUrl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/28/1/FNM_040112-Copy-That-002_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541346030.jpeg",
    description:
      "A tangy pizza topped with grilled chicken, red onions, and BBQ sauce",
    rating: 4.4,
    price: 13.99,
  },
  {
    id: 7,
    uuid: "bf1e176a-21d5-41d5-99e5-5b5c89d5d3ea",
    name: "Margherita Pizza",
    quantity: 0,
    imageUrl:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-recipe-1-500x375.jpg",
    description:
      "A simple pizza topped with tomato sauce, fresh mozzarella, and basil",
    rating: 4.1,
    price: 8.99,
  },
];
const initialList = [
  {
    id: 1,
    uuid: "4a2ccf05-0db5-4c5a-bcaf-aa5c0b688bee",
    name: "The Golden Spoon",
    location: "New York, NY",
    rating: 4.3,
    imageUrl:
      "https://thumbs.dreamstime.com/z/pizza-tasty-homemade-chicken-42870527.jpg",
    description:
      "Our menu typically features a wide range of traditional Italian dishes, including antipasti, pasta, pizza, seafood, meat, and dessert options.",
    menu: italianMeals,
  },
  {
    id: 2,
    uuid: "2d2ce0f8-747b-4371-a71f-ec88ac9c0d97",
    name: "Spice of India",
    location: "San Francisco, CA",
    rating: 4.8,
    imageUrl:
      "https://recipesinhindi.net/wp-content/uploads/2018/02/Chhole-Bhature14334.jpg",
    description:
      "Our Indian restaurant restaurant is a culinary destination that offers a variety of dishes inspired by the diverse cuisine of India.",
    menu: indianMeals,
  },
  {
    id: 3,
    uuid: "d146c5e5-1f5c-4e49-bdd5-cd7ce541f116",
    name: "Sushi House",
    location: "Los Angeles, CA",
    rating: 4.1,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spicy-crab-rolls4-1654808938.jpg?crop=1.00xw:0.752xh;0,0.142xh&resize=980:*",
    description:
      "Our menu typically includes a wide range of traditional japanese dishes, including sushi, sashimi, tempura, ramen, udon, soba noodles, and more.",
    menu: japanesemeals,
  },
  {
    id: 4,
    uuid: "e2db2c27-00f5-42e7-9d80-955f9878e0d6",
    name: "Le Bistro Français",
    location: "Chicago, IL",
    rating: 3.2,
    imageUrl:
      "https://media.cnn.com/api/v1/images/stellar/prod/220530155153-07-a-classic-french-dishes-escargots-de-bourgogne-restricted.jpg?c=original",
    description:
      "Our menu features a wide range of traditional French dishes, such as escargots, foie gras, coq au vin, beef bourguignon, and other classic dishes.",
    menu: frenchMeals,
  },
  {
    id: 5,
    uuid: "f757af8a-450c-4a0a-9c48-f8588d0cdd70",
    name: "Chinese Garden",
    location: "Boston, MA",
    rating: 3.9,
    imageUrl:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg",
    description:
      "Our menu features a wide range of dishes, from savory dim sum and noodle soups to rich and flavorful stir-fries and seafood dishes.",
    menu: chineseMeals,
  },
  {
    id: 6,
    uuid: "9e74e30d-8c16-4d2c-8831-bf5d5f5c5b5d",
    name: "Pizza Hut",
    location: "Boston, MA",
    rating: 4.3,
    imageUrl:
      "https://www.pizzahut.co.in/order/images/logos/logo_home@x2.2058c7f78a870b6322dc0dc0ecb77325.png",
    description:
      "Our menu features a wide range of dishes, from savory dim sum and noodle soups to rich and flavorful stir-fries and seafood dishes.",
    menu: pizzaHutMenu,
  },
];

const initialState = {
  mealsAvailable: initialList,
  Items: [],
  visible: false,
  orderedList: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed: false,
  isPending: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    logout(state) {
      state.Items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.orderedList = [];
      state.changed = false;
    },
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.Items.find(
        (item) => item.uuid === newItem.uuid
      );
      state.totalAmount = state.totalAmount + newItem.price;
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.Items.push({
          id: newItem.id,
          uuid: newItem.uuid,
          img: newItem.imageUrl,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.Items.find(
        (item) => item.uuid == newItem.uuid
      );
      state.totalAmount = state.totalAmount - existingItem.price;
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity < 2) {
        state.Items = state.Items.filter((item) => item.uuid !== newItem.uuid);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    orderedItemFromCart(state, action) {
      const neworder = action.payload;
      state.orderedList.push(neworder);
      state.Items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.changed = true;
    },
    toggle(state) {
      state.visible = !state.visible;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItemAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.Items = response.Items;
      state.totalAmount = response.totalAmount;
      state.totalQuantity = response.totalQuantity;
      state.changed = false;
      state.isPending = false;
    });
    builder.addCase(getCartItemAction.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(getOrderSummaryAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.orderedList = response.orderedList;
      state.changed = false;
      state.isPending = false;
    });
    builder.addCase(getOrderSummaryAction.pending, (state, action) => {
      state.isPending = true;
    });
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
