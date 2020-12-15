
//console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
require('dotenv').config({path:__dirname+`/../.env.stage`})

const axios = require('axios')
let baseUrl = process.env.BASE_URL;
let identifier = process.env.BACKEND_USER_IDENTIFIER;
let password = process.env.BACKEND_USER_PASSWORD;
console.log("baseUrl", baseUrl);



// auth as backend user to upload metatada to strapi
async function auth() {
  try {

    const { data } = await axios({
      method: 'POST',
      url: `${baseUrl}/auth/local`,
      data: {
        identifier,
        password,
      }
    })

    if (data && data.jwt) {
      return data.jwt
    }

    return false


  } catch (e) {
    console.log("Authenticate error: ", e);

  }
}
module.exports = {
  auth
}
