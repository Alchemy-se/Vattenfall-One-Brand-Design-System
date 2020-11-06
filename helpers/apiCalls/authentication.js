import axios from "axios";
import React from "react";


const IS_LOGGED_IN = 'isLoggedIn';


export const login = async (identifier, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `http://localhost:1338/auth/local`,
      withCredentials: true,
      data: {
        identifier,
        password,
      }
    })
    if (res.status === 200 && res.data.status === "Authenticated") {
      localStorage.setItem(IS_LOGGED_IN, 'true');
      return true
    }
    console.log('data: ', res)

  } catch (e) {
    console.log("login error", e);
    //TODO hantera fel inlogg
    return false
  }

};

export const checkLoggedIn = () => {
  return !!localStorage.getItem(IS_LOGGED_IN);
}


export const logout = async () => {
  try {
    const response = await axios({
      method: 'POST',
      url: `http://localhost:1338/logout`,
      withCredentials: true,
      data: {}
    })
    console.log('logut respones: ', response)
    if (response.status === 200 && response.data.isLoggedOut) {
      localStorage.removeItem(IS_LOGGED_IN);
      return false // return false as the user is NOT authenticated
    }
  } catch (e) {
    console.log("logut error", e);
    // TODO hantera error
    return true // return true as the user is still authenticated


  }
};
