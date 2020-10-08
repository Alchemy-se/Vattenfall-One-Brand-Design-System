require('dotenv').config();

const algoliasearch = require('algoliasearch')
const { APPLICATION_KEY, PRIVATE_KEY, INDEX_NAME } = process.env;
const algoliaMetadata = require('./algolia-search-metadata.json');

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



