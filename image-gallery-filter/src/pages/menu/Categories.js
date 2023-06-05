import { SelectButton } from "primereact/selectbutton";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { TabView, TabPanel } from "primereact/tabview";
import React, { useState, useEffect } from "react";

const justifyOptions = [
  { icon: "pi pi-align-left", value: "left" },
  { icon: "pi pi-align-right", value: "Right" },
  { icon: "pi pi-align-center", value: "Center" },
  { icon: "pi pi-align-justify", value: "Justify" },
];

const caties = ["ALL", "ALL DAY BREAKFAST", "SALAD", "DRINK"];
const Categories = ({ categories, filterItems }) => {
  useEffect(() => {
    const navLinks = document.querySelectorAll("pq");
    navLinks.forEach((link) => {
      link.onclick = onNavLinkChange;
      function onNavLinkChange(e) {
        navLinks.forEach((link) => {
          link.className = "";
        });
        e.target.className = "nav-link-active";
      }
    });
  }, []);

  return (
    <div className="btn-container">
      {caties.map((category, index) => {
        return (
          <>
            <pq
              className="nav-link w-nav-link"
              id="menuCategories"
              onClick={() => filterItems(category)}
            >
              {category}
            </pq>
          </>
        );
      })}
    </div>
  );
};

export default Categories;
