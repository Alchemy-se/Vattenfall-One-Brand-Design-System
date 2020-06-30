import {Menu} from "antd";
import {Link} from "react-router-dom";
import React from "react";

const MENU_GROUP_ITEMS = [
    {path: "/buttons", name: "Buttons"},
    {path: "/forms", name: "Forms"},
    {path: "/colors", name: "Colors"},
    {path: "/illustrations", name: "Illustrations"},
    {path: "/typography", name: "Typography"},
    {path: "/grid", name: "Grid"},
    {path: "/logotype", name: "Logotype"},
    {path: "/icons", name: "Icons"},
    {path: "/spacers", name: "Spacers"},
    {path: "/info-graphics", name: "Info Graphics"},
    {path: "/motion", name: "Motion"}
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
