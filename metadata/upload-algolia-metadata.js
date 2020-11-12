require('dotenv').config();

const algoliasearch = require('algoliasearch')
const algoliaMetadata = require('./algolia-search-metadata.json');
const APPLICATION_KEY = process.env.APPLICATION_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const INDEX_NAME = process.env.INDEX_NAME;


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



