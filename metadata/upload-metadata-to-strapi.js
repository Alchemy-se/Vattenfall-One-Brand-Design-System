const { auth } = require('./auth')
require('dotenv').config()
const axios = require('axios')
const componentMetadata = 'metadata/components-overview-metadata.json';
const fs = require('fs')
const glob = require('glob');
const guidelinesPath = 'catalog/guidelines/*/*.json'
let baseUrl = process.env.BASE_URL;

//baseUrl= "https://production-dot-vattenfall-design-system.ew.r.appspot.com";


async function uploadMetadata() {
  return new Promise((async resolve => {


    try {
      const jwt = await auth()
      if (jwt) {


        // get names from existing metadata for use when uploading new metadata
        // so we dont overwrite/get error when inserting new ones.
        // The name field in the cms is unique and we need to fetch the existing ones
        // and compare before upload new ones. If we try to upload a already existing
        // name/metadata the cms/server responds with 500 error and abort the whole upload
        const result = await axios({
          method: "GET",
          url: `${baseUrl}/collection-metadata/get-names`,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            'Authorization': `Bearer ${jwt}`,

          }
        })

        if (result.status === 200 && result.data.length > 0) { // res.status === 200

          const names = result.data

          let metadata = fs.readFileSync(componentMetadata);
          metadata = JSON.parse(metadata);
          const { components } = metadata


          for (const component of components) {


            // dont upload metadata if they exists in the cms
            //  names array is existing names fetched from the /get-names endpoint
            if (!names.includes(component.name)) {

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

