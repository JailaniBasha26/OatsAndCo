import i01 from "../../Assests/menuItems/01.jpeg";
import i02 from "../../Assests/menuItems/02.jpeg";
import i03 from "../../Assests/menuItems/03.jpeg";
import i04 from "../../Assests/menuItems/04.jpeg";
import i05 from "../../Assests/menuItems/05.jpeg";
import i06 from "../../Assests/menuItems/06.jpeg";
import i07 from "../../Assests/menuItems/07.jpeg";
import i08 from "../../Assests/menuItems/08.jpeg";
import i09 from "../../Assests/menuItems/09.jpeg";
import i10 from "../../Assests/menuItems/10.jpeg";
import i11 from "../../Assests/menuItems/11.jpeg";
// import cc from '../pub/images'

const menu = [
  {
    id: 1,
    title: "Salmon & Spinach Egg Benedict",
    category: "DESSERT",
    price: 15.99,
    img: { i01 },
    desc: `Salmon, Sauteed Spinach, Ricotta, Organic Eggs With Organic & Gluten-free Almond Flour Bun ( Low Carb )/ Or Muffin Bread.`,
    allergens: `Lactose ( Ricotta- Greek Yogurt Butter ) Gluten ( Bread ), Apple Cider, Nutmeg.`,
  },
  {
    id: 2,
    title: "CRISPY BEEF BACON & AVO EGG BENEDICT",
    category: "DESSERT",
    price: 12.84,
    img: { i02 },
    desc: `Crispy Beef Bacon, Avo, Ricotta, Organic Eggs With Organic & Gluten-free Almond Flour Bun ( Low Carb )/ Or Muffin Bread.`,
    allergens: `Lactose ( Ricotta- Greek Yogurt Butter ) Gluten ( Bread ), Apple Cider, Nutmeg.`,
  },
  {
    id: 3,
    title: "Beef Bacon & Spinach Egg Benedict",
    category: "DESSERT",
    price: 6.99,
    img: { i03 },
    desc: `Crispy Beef Bacon, Sauteed Spinach, Ricotta, Organic Eggs With Organic & Gluten-free Almond Flour Bun ( Low Carb )/ Or Muffin Bread.`,
    allergens: `Lactose ( Ricotta- Greek Yogurt Butter ) Gluten ( Bread ), Apple Cider, Nutmeg.`,
  },
  {
    id: 4,
    title: "Avocado Egg Benedict",
    category: "TEST",
    price: 20.99,
    img: { i04 },
    desc: `organic Eggs , Avocado , Ricotta Topped With Beetroot Hollandaise Sauce : ( Greek Yogurt Beetroot And Zero Fat ) 
    On A Keto Almond Flour Bread ( Low Carb ) / Or Toasted Pumpkin Loaf .`,
    allergens: `Eggs, Ricotta (Lactose), Almond (Nuts), Greek Yogurt (Lactose).`,
  },
  /////////////////////
  {
    id: 5,
    title: "Avocado & Smoked Salmon Poached Egg",
    category: "DESSERT",
    price: 20.99,
    img: { i05 },
    desc: `2 Perfectly Poached Organic Eggs And Norwegian Smoked Salmon, Mixed Greens, And Healthy Hollandaise (Greek Yogurt And Less Fat)
    Or Healthy Beetroot Hollandaise Sauce ( Greek Yogurt & Beetroot Zero Fat ) , Atop Avocado Halves And Served With Aside Of Toast`,
    allergens: `Eggs, Bread( Gluten), Gerrk Yogurt, Butter,( Lactose ), Nutmeg, Apple Cider Vinegar.`,
  },
  {
    id: 6,
    title: "French Florentine",
    category: "DESSERT",
    price: 20.99,
    img: { i06 },
    desc: `2 Perfectly Poached Organic Eggs With Sauteed Spinach, Mixed Greens, And Healthy Hollandaise (Greek Yogurt And Less Fat) 
    Or ( Pink Healthy Beetroot Hollandaise : Greek Yogurt + Beetroot And Zero Fat ) A Top Of Avocado Halves And Served With Aside Of Toast.`,
    allergens: `Eggs, Gluten, Gerrk Yogurt, Butter ( Lactose ) , Nutmeg, Apple Cider Vinegar.`,
  },
  {
    id: 7,
    title: "Bacon & Avocado Obsession",
    category: "DESSERT",
    price: 20.99,
    img: { i07 },
    desc: `2 Perfectly Poached Organic Eggs And Crispy Bacon, Mixed Greens, And Healthy Hollandaise (Greek Yogurt And Less Fat) 
    Or Healthy Pink Hollandaise ( Beetroot & Greek Yogurt And Zero Fat ) Atop Avocado Halves And Served With Aside Of Toast. `,
    allergens: `Eggs, Gluten, Greek Yogurt, Butter, Lactose , Nutmeg, Apple Cider Vinegar.`,
  },
  {
    id: 8,
    title: "Poached Eggs In Avos With Hollandaise Sauce",
    category: "DESSERT",
    price: 20.99,
    img: { i08 },
    desc: `Avocado, Organic Eggs, Choose On: Salmon, Bacon, Or Spinach With ( Healthy Hollandaise Sauce With Greek Yogurt And Less Fat ) 
    Or ( Pink Healthy Hollandaise Sause With Beetroot And Greek Yogurt And Zero Fat ) . `,
    allergens: `Egg, Yogurt, Butter, ( Lactose ) , Apple Cider Vinegar, Nutmeg, Gluten( Bread ).`,
  },
  {
    id: 9,
    title: "Sweet Potato & Avo Poached Egg",
    category: "DESSERT",
    price: 20.99,
    img: { i09 },
    desc: `Avocado, Sweet Potato, Organic Eggs, And ( Healthy Hollandaise Sauce With Greek Yogurt And Less Fat ).`,
    allergens: `Egg, Lactose (Greek Yogurt), Butter.`,
  },
  {
    id: 10,
    title: "Avocado & Burrata Sourdough Toast",
    category: "TEST",
    price: 20.99,
    img: { i10 },
    desc: `Sourdough Toast With Buratta , Cheery Tomatoes And Mashed Avocado . Allergens: Lactose (Buratta), Gluten (Sourdough).`,
    allergens: "",
  },
  {
    id: 11,
    title: "Avocado & Salmon Bun",
    category: "TEST",
    price: 20.99,
    img: { i11 },
    desc: `Almond Flour Bun ( Low Carb & Organic & Gluten-free ), Salmon, Avocado, Capsicum, Ricotta, Salt, Black Pepper.`,
    allergens: `Almond (Nuts ) , Ricotta (Lactose)`,
  },

  //   {
  //     id: 5,
  //     title: "egg attack",
  //     category: "lunch",
  //     price: 22.99,
  //     img: "./images/item-5.jpeg",
  //     desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  //   },
  //   {
  //     id: 6,
  //     title: "oreo dream",
  //     category: "shakes",
  //     price: 18.99,
  //     img: "./images/item-6.jpeg",
  //     desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  //   },
  //   {
  //     id: 7,
  //     title: "bacon overflow",
  //     category: "breakfast",
  //     price: 8.99,
  //     img: "./images/item-7.jpeg",
  //     desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  //   },
  //   {
  //     id: 8,
  //     title: "american classic",
  //     category: "lunch",
  //     price: 12.99,
  //     img: "./images/item-8.jpeg",
  //     desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  //   },
  //   {
  //     id: 9,
  //     title: "quarantine buddy",
  //     category: "shakes",
  //     price: 16.99,
  //     img: "./images/item-9.jpeg",
  //     desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  //   },
];

export default menu;
