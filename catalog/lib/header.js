import React, { useContext, useEffect, useRef, useState } from "react"
import { Dropdown, Menu } from "antd";
import styles from "./header.scss";
import { Link } from "react-router-dom";
import Hamburger from "./hamburger";
import Search from './search/search'
import authContext from "../../helpers/authContext";
import { logout } from "../../helpers/apiCalls/authentication";
import LoggedInBanner from "./LoggedInBanner";

function Header(props) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [displayModal, setDisplayModal] = useState(false)
  const wrapperRef = useRef(null);
  const { setAuthenticated, authenticated } = useContext(authContext);




  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setToggleDropdown(false);
    }
  };


  function toggleDropDownHandler() {
    setToggleDropdown(!toggleDropdown);
  }

  function dropDownMenu() {
    return (
      <Menu
        className={styles.dropDownContainer}
        onClick={(event) => {
          toggleDropDownHandler();
          props.onClick(event);
        }}
        selectedKeys={props.selectedKeys}
      >

        <Menu.Item key="/get-started"><Link to={"/get-started/introduction"}>Get Started</Link></Menu.Item>
        <Menu.Item key="/components"><Link to={"/components"}>Components</Link></Menu.Item>
        <Menu.Item key="/guidelines"><Link to={"/guidelines"}>Guidelines</Link></Menu.Item>
{/*
        <Menu.Item key="/examples"><Link to={"/examples"}>Examples</Link></Menu.Item>
*/}
        <Menu.Item key="/contact"><Link to={"/contact/contact"}>Contact</Link></Menu.Item>
        <Menu.Item key="/articles"><Link to={"/articles"}>Articles</Link></Menu.Item>
        <Menu.Item key="/overview"><Link to={"/overview"}>Overview</Link></Menu.Item>

      </Menu>
    )
  }




  return (
    <React.Fragment>

      <div className={styles.container} style={{ top: authenticated ? "30px" : 0 }}>
        <div className={styles.logoContainer}>
          <Link to={"/"}>
            <img src={'/img/docs/logo.svg'} />
          </Link>
        </div>
        <div ref={wrapperRef} tabIndex="0" style={{ outline: "none" }}>
          <Dropdown
            visible={toggleDropdown}
            overlayClassName={"dropdown"}
            overlay={dropDownMenu}
            trigger={["click"]}
          >
            <Hamburger className={styles.hamburger} onClick={() => {
              toggleDropDownHandler();
            }} />
          </Dropdown>
        </div>


        <Menu mode={"horizontal"} onClick={props.onClick}
              selectedKeys={props.selectedKeys}
              className={[styles.menuContainer, styles.leftAlign]}
        >

          <Menu.Item>
            <Search />
          </Menu.Item>
        </Menu>

        <Menu mode={"horizontal"} onClick={props.onClick}
              selectedKeys={props.selectedKeys}
              className={styles.menuContainer}
        >

          <Menu.Item key="/get-started"><Link to={"/get-started/introduction"}>Get Started</Link></Menu.Item>
          <Menu.Item key="/components"><Link to={"/components"}>Components</Link></Menu.Item>
          <Menu.Item key="/guidelines"><Link to={"/guidelines"}>Guidelines</Link></Menu.Item>
{/*
          <Menu.Item key="/examples"><Link to={"/examples"}>Examples</Link></Menu.Item>
*/}
          <Menu.Item key="/contact"><Link to={"/contact/contact"}>Contact</Link></Menu.Item>
          <Menu.Item key="/articles"><Link to={"/articles"}>Articles</Link></Menu.Item>
          <Menu.Item key="/overview"><Link to={"/overview"}>Overview</Link></Menu.Item>



        </Menu>


      </div>
    </React.Fragment>
  );
};

export default Header;
