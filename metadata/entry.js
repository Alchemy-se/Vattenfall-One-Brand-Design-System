require('dotenv').config({path:__dirname+`/../.env.${process.env.NODE_ENV}`})

const { buildAlgoliadMetadataJSON } = require("./build-agolia-metadata");
const { buildComponentMetadata } = require("./build-metadata");
const { uploadAlgoliaData } = require("./upload-algolia-metadata");
const { uploadMetadata } = require("./upload-metadata-to-strapi");


Promise.all([buildAlgoliadMetadataJSON(), buildComponentMetadata()])
  .then(() => {
    Promise.all([uploadAlgoliaData(), uploadMetadata()])
      .then(() => {
        console.log("All files created and uploaded");
      })
  });
