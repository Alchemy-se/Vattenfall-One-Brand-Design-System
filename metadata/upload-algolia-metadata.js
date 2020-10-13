require('dotenv').config();

const algoliasearch = require('algoliasearch')
//const { APPLICATION_KEY, PRIVATE_KEY, INDEX_NAME } = process.env;
const algoliaMetadata = require('./algolia-search-metadata.json');
const APPLICATION_KEY = "TR5Z03YJ0Q"
const PUBLIC_SEARCH_KEY = "fa1fd3376fd7bdd9ae89013cb7208a18"
const PRIVATE_KEY = "187c945c522886ac08f96b9db7816754"
const INDEX_NAME = "vf_components"

const buttonsGuideline = require('../catalog/guidelines/buttons/buttons.json')

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

} catch (e) {
  console.log("Upload alogolia metadata error: ", e);


}



