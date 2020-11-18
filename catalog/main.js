import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import Hamburger from "./lib/hamburger";
import Drawer from "./lib/drawer/drawer";
import Header from "./lib/header";
// TODO verify if can place this somewhere else.
import styles from "./main.scss";

import ReactGA from 'react-ga';
import AuthContext from "../helpers/authContext";
import { checkLoggedIn } from "../helpers/apiCalls/authentication";
import LoggedInBanner from "./lib/LoggedInBanner";


ReactGA.initialize('UA-159160070-1');

// Used at mount to highlight correct menu item.
const getCurrentLocation = (full) => {
  if (full) {
    return window.location.pathname;
  }
  const splitted = window.location.pathname.split("/");
  let path = "/" + splitted[1];
  return path;
};

function trackPageView(path) {
  ReactGA.pageview(path);
}


export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: window.innerWidth >= 1000,
      closable: window.innerWidth <= 999,
      selectedKeysMenu: [getCurrentLocation()],
      selectedKeysSubmenu: [getCurrentLocation(true)],
      currentPath: getCurrentLocation(true),
      modalOpen: false,
      modalImageUrl: null,
      authenticated: checkLoggedIn()
    };
  }

  resize = () => {
    if (window.innerWidth >= 1000 && this.state.closable === true) {
      this.setState({
        closable: false,
        drawerOpen: true
      });
    } else if (window.innerWidth <= 999 && this.state.closable === false) {
      this.setState({
        closable: true,
        drawerOpen: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    document.addEventListener("keydown", this.onKeyDown, false);

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    document.removeEventListener("keydown", this.onKeyDown, false);
  }


  closeDrawer = () => {
    this.setState({
      drawerOpen: false
    });
  };

  openDrawer = () => {
    this.setState({
      drawerOpen: true
    });
  };

  onClickHeader = ({ keyPath }) => {
    this.setState({
      selectedKeysMenu: [keyPath[0]]
    })
  };

  onRouteChange = (pathname) => {


    useEffect(() => {
      // Path changed, ok to update state.
      if (this.state.currentPath !== pathname) {
        const newSelectedKeysSubmenu = [pathname];
        const newSelectedKeysMenu = pathname === "/" ? [] : this.state.selectedKeysMenu;
        this.setState({
          selectedKeysMenu: newSelectedKeysMenu,
          selectedKeysSubmenu: newSelectedKeysSubmenu,
          currentPath: pathname
        });
        trackPageView(pathname);
      }
    });
  };

  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.triggerModal(false, null);
    }
  };

  triggerModal = (open, imageUrl) => {
    if (!open) {
      this.setState({
        modalOpen: false,
        imageUrl: null
      })
      return;
    }
    this.setState({
      modalOpen: open,
      modalImageUrl: imageUrl
    });
  };

  renderModal = () => {
    if (this.state.modalOpen) {
      return (
        <div id={"modal-overlay"} style={{ display: "block" }}>
          <div
            style={{
              opacity: 1
            }}
            className={styles.modal}>
            <span className={styles.close} onClick={() => this.triggerModal(false, null)}>&times;</span>
            <img
              alt={"image"}
              src={this.state.modalImageUrl} />

          </div>
        </div>
      )
    }
    return null;
  };


  render() {

    const setAuthenticated = (value) => this.setState({ authenticated: value })
    const authenticated = this.state.authenticated


    const classes = this.state.drawerOpen ? `${styles.container} ${styles.drawerOpen}` : styles.container;
    const hamburgerClasses = this.state.drawerOpen ? `${styles.hamburger} ${styles.open}` : styles.hamburger;
    return (
      <Router>
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
          <LoggedInBanner />

          {this.renderModal()}
          <Hamburger onClick={this.openDrawer} className={hamburgerClasses} />
          <Header onClick={this.onClickHeader} selectedKeys={this.state.selectedKeysMenu} />
          <div className={classes} id="content-container">
            <Drawer
              closeDrawer={this.closeDrawer}
              drawerOpen={this.state.drawerOpen}
              closable={this.state.closable}
              selectedKeys={this.state.selectedKeysSubmenu}
            />
            {/*<div className={styles.innerContainer} >*/}
            <div style={{ marginTop: authenticated ? "30px" : 0 }}
                 className={`${styles.innerContainer} documentation-container`}>
              <Routes onRouteChange={this.onRouteChange} openModal={this.triggerModal} />
            </div>

          </div>

        </AuthContext.Provider>
      </Router>
    )
  }
}
