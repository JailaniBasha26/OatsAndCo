import React, { Component } from "react";
import { useEffect } from "react";

import "./menu.css";
import Menu from "./Menu";
import Categories from "./Categories";
import Cate from "./Cate";
import items from "../../menuData";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HeaderTest from "../header/headerTest";

const allCategories = ["ALL", ...new Set(items.map((item) => item.category))];
let status = true;
export default function MenuIndex() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  Aos.init({ duration: 1000 });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const filterItems = (category) => {
    if (category === "ALL") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      {/* <Header /> */}
      <HeaderTest />
      <section className="menu section" data-aos="fade-up">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
      <Footer />
    </main>
  );
}
