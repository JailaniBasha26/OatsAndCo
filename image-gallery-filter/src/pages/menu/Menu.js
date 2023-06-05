import React, { Component } from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price, allergens } = menuItem;
        let values = Object.values(img);

        let titleCapitalize = title;
        titleCapitalize = titleCapitalize.toLowerCase();
        titleCapitalize = titleCapitalize
          .toLowerCase()
          .split(" ")
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });
        titleCapitalize = titleCapitalize.join(" ");

        let descCapitalize = desc;
        descCapitalize = descCapitalize.toLowerCase();
        descCapitalize = descCapitalize
          .toLowerCase()
          .split(" ")
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });
        descCapitalize = descCapitalize.join(" ");

        let allergensCapitalize = allergens;
        allergensCapitalize = allergensCapitalize.toLowerCase();
        allergensCapitalize = allergensCapitalize
          .toLowerCase()
          .split(" ")
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });
        allergensCapitalize = allergensCapitalize.join(" ");

        // console.log(`./images/${img}`, "+++");
        return (
          <article key={id} className="menu-item">
            <img src={`./images/${img}`} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <label className="itemTitleStyle">{titleCapitalize}</label>
                <label className="price" id="itemPriceStyle">
                  ${price}
                </label>
              </header>
              {descCapitalize != "" && (
                <>
                  <label className="itemDescription">Description:</label>
                  <p className="item-text">{descCapitalize}</p>
                </>
              )}
              {allergens != "" && (
                <>
                  <label className="itemDescription">Allergens:</label>
                  <p className="item-text">{allergensCapitalize}</p>
                </>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
