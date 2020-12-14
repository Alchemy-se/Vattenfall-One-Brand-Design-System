import {Menu} from "antd";
import {Link} from "react-router-dom";
import React from "react";

const MENU_GROUP_ITEMS = [
  {path: "/contact", name: "Contact"},
  {path: "/new-request", name: "New Request"},

];

const ContactMenu = () => {
  return MENU_GROUP_ITEMS.map((item) => {
    return (
      <Menu.Item key={"/contact" + item.path}>
        <Link to={"/contact" + item.path}>{item.name}</Link>
      </Menu.Item>
    );
  });
};

export default ContactMenu;
