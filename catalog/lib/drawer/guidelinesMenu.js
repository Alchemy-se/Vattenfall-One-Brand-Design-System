import { Menu } from "antd";
import { Link } from "react-router-dom";
import React from "react";

const MENU_GROUP_ITEMS = [
  { path: "", name: "Introduction" },
  { path: "/logotype", name: "Logotype" },
  { path: "/colors", name: "Colors" },
  { path: "/typography", name: "Typography" },
  { path: "/grid", name: "The Grid" },
  { path: "/icons", name: "Icons" },
  { path: "/buttons", name: "Buttons" },
  { path: "/forms", name: "Forms" },
  { path: "/spacers", name: "Spacers" },
  { path: "/info-graphics", name: "Info Graphics" },
  { path: "/illustrations", name: "Illustrations" },
  { path: "/motion", name: "Motion" },
  { path: "/hero", name: "Hero" },
  { path: "/carousel", name: "Carousel" }
];

const ComponentsMenu = () => {
  return MENU_GROUP_ITEMS.map((item) => {
    return (
      <Menu.Item key={"/guidelines" + item.path}>
        <Link to={"/guidelines" + item.path}>{item.name}</Link>
      </Menu.Item>
    );
  });
};

export default ComponentsMenu;
