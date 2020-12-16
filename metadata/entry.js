//require('dotenv').config({path:__dirname+'/../.env.production'})
require('dotenv').config({path:__dirname+`/../.env.${process.env.NODE_ENV}`})

const { buildComponentMetadata } = require("./build-metadata");
const { uploadAlgoliaData } = require("./upload-algolia-metadata");
const { uploadMetadata } = require("./upload-metadata-to-strapi");
const { buildAlgoliadMetadataJSON } = require("./build-agolia-metadata");


Promise.all([buildComponentMetadata()]).then(() => {


  Promise.all([buildAlgoliadMetadataJSON()])
    .then(() => {
      Promise.all([uploadAlgoliaData(), uploadMetadata()])
        .then(() => {
          console.log("All files created and uploaded");
        })
    });

})
