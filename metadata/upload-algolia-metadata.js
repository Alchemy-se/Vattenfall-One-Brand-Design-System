require('dotenv').config();

const algoliasearch = require('algoliasearch')
const algoliaMetadata = require('./algolia-search-metadata.json');
/*
const APPLICATION_KEY = process.env.APPLICATION_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INDEX_NAME = process.env.INDEX_NAME;
*/

APPLICATION_KEY = "TR5Z03YJ0Q"
PUBLIC_SEARCH_KEY = "fa1fd3376fd7bdd9ae89013cb7208a18"
PRIVATE_KEY = "187c945c522886ac08f96b9db7816754"
INDEX_NAME = "vf_components"

async function uploadAlgoliaData() {
  return new Promise((resolve => {


    try {
      const client = algoliasearch(APPLICATION_KEY, PRIVATE_KEY)
      const index = client.initIndex(INDEX_NAME)

      index.saveObjects(algoliaMetadata, {
        autoGenerateObjectIDIfNotExist: true
      })
      index.setSettings({
        // Select the attributes you want to search in
        searchableAttributes: [
          "name",
          "parent.name",
          "description",
          "type"
        ],

        // Set up some attributes to retrieve
        attributesToRetrieve: [
          'name', 'uri', 'type', "parent"
        ]
      });
      resolve()
    } catch (e) {
      console.log("Upload alogolia metadata error: ", e);


    }
  }))
}
module.exports = {
  uploadAlgoliaData
}


