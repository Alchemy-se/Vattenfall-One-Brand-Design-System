import axios from "axios";
import React from "react";


export const login = async (identifier, password) => {
  let baseUrl = process.env.BASE_URL;

  try {
    const res = await axios({
      method: 'POST',
      url: `${baseUrl}/auth/local`,
      withCredentials: true,
      data: {
        identifier,
        password,
      }
    })
    if (res.status === 200 && res.data.jwt) {
      localStorage.setItem("jwt", res.data.jwt);
      return { success: true }
    }

  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message[0].messages[0].message,
      }
    }
  }

};

export const checkLoggedIn = () => {
  return !!localStorage.getItem("jwt");
}


export const logout = async () => {
  try {

    localStorage.removeItem('jwt');
    return false // return false as the user is NOT authenticated

  } catch (e) {
    console.log("logut error", e);
    // TODO hantera error
    return true // return true as the user is still authenticated


  }
};
