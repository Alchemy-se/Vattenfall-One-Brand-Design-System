console.log('process.env.test: ', process.env.test)

const fs = require('fs')
const glob = require('glob');
const guidelinesPath = 'catalog/guidelines/*/*.json'
const { auth } = require('./upload-metadata-to-strapi')
const jwt = auth()
const axios = require('axios')
let baseUrl = "http://localhost:1338";

async function uploadGuidelineMetadata() {
  const token = await jwt
  console.log('token: ', token)

  /*const res = await axios({
    method: "DELETE",
    url: `${baseUrl}/guidelines-metadata/delete-all`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      'Authorization': `Bearer ${token}`,

    }
  })*/
  glob(guidelinesPath, async (err, jsonPath) => {
    if (err) {
      console.log("error, err");
    }

    // TODO HANTERA single tex motion. Kolla length?
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


      const res1 = await axios({
        method: 'POST',
        url: `${baseUrl}/guidelines-metadata`,
        data: {
          "metadata": info.metadata,
          "name": info.name,
          "uri": info.uri,
        },
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          'Authorization': `Bearer ${token}`,

        }
      })


    }


  })
}

uploadGuidelineMetadata();
