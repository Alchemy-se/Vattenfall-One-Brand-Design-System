const { auth } = require('./auth')
require('dotenv').config()
const axios = require('axios')
const componentMetadata = 'metadata/components-overview-metadata.json';
const fs = require('fs')
const glob = require('glob');
const guidelinesPath = 'catalog/guidelines/*/*.json'
let baseUrl = process.env.BASE_URL;

baseUrl= "https://production-dot-vattenfall-design-system.ew.r.appspot.com";


async function uploadMetadata() {
  return new Promise((async resolve => {


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
        if (res.status === 200) {
          console.log("collection metadata in strapi cms deleted");


          let metadata = fs.readFileSync(componentMetadata);
          metadata = JSON.parse(metadata);
          const { components } = metadata

          for (const component of components) {

            await axios({
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


          }
          await uploadGuidelineMetadata(jwt, resolve)
        } else {
          console.log("Something went wrong deleting component metadata")
        }


      } else {
        console.log("No JWT token found");
      }
    } catch
      (e) {
      console.log("create error", e);
    }
  }))

}

async function uploadGuidelineMetadata(jwt, resolve) {

  try {
    const deleted = await axios({
      method: "DELETE",
      url: `${baseUrl}/guidelines-metadata/delete-all`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        'Authorization': `Bearer ${jwt}`,

      }
    })

    if (deleted.status === 200) {


      glob(guidelinesPath, async (err, jsonPath) => {
        if (err) {
          console.log("error, err");
        }

        for (const path of jsonPath) {
          let jsonFile = fs.readFileSync(path, "utf8");
          const parsed = JSON.parse(jsonFile)
          const info = {}
          // case for guidelines not containing children
          if (parsed.length <= 1) {
            parsed.map(item => {
              info.name = item.name;
              info.uri = item.uri;
              info.metadata = parsed

            })
          }

          parsed.map(item => {

            if (item.children) {
              info.name = item.name
              info.uri = item.uri
              info.metadata = parsed
            }
          })


          await axios({
            method: 'POST',
            url: `${baseUrl}/guidelines-metadata`,
            data: {
              "metadata": info.metadata,
              "name": info.name,
              "uri": info.uri,
            },
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              'Authorization': `Bearer ${jwt}`,

            }
          })


        }

        resolve()
      })
    } else {
      console.log("something went wrong deleting guidelines");


    }
  } catch (e) {
    console.log("uploadGuidelineMetadata error", e.response);


  }

}
module.exports = {
  uploadMetadata
}

