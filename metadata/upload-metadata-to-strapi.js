require('dotenv').config()
const axios = require('axios')
const componentMetadata = 'metadata/components-overview-metadata.json';
const fs = require('fs');

let baseUrl = process.env.BASE_URL;
let identifier = process.env.BACKEND_USER_IDENTIFIER;
let password = process.env.BACKEND_USER_PASSWORD;

// Upload metadata to strapi cms
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


async function uploadMetadata() {
  try {
    const jwt = await auth()
    if (jwt) {

      const res = await axios({
        method: "DELETE",
        url: `${baseUrl}/collection-metadata/delete-all`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          'Authorization': `Bearer ${jwt}`,

        }
      })
      if (res) {
        console.log("metadata in strapi cms deleted");




        let metadata = fs.readFileSync(componentMetadata);
        metadata = JSON.parse(metadata);
        const { components } = metadata

        for (const component of components) {

          const res = await axios({
            method: 'POST',
            url: `${baseUrl}/collection-metadata`,
            data: {
              "metadata": component,
              "name": component.name,
              "uri": component.uri,
            },
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              'Authorization': `Bearer ${jwt}`,

            }
          })
          console.log('res: ', res.status)

        }
      } else {
        console.log("Something went wrong deleting entries")
      }


    } else {
      console.log("No JWT token found");
    }
  } catch
    (e) {
    console.log("create error", e);
  }
}

uploadMetadata()



