import React, { useContext } from 'react';
import styles from "./header.scss";
import authContext from "../../helpers/authContext";
import { logout } from "../../helpers/apiCalls/authentication";

const LoggedInBanner = () => {
  const { authenticated, setAuthenticated } = useContext(authContext);

  const submitLogout = async () => {
    const loggedIn = await logout();
    setAuthenticated(loggedIn)
  };

  if (authenticated) {
    return (
      <div className={styles.loggedInBanner}>
        <div onClick={() => submitLogout()}>LOGOUT</div>
      </div>
    )
  }
  return null;

  //TODO torsdag - inlogg skärmen, deploya

};

export default LoggedInBanner;
