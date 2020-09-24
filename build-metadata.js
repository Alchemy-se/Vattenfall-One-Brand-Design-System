/**
 * File for mapping all metadata.json files and join values from parent to respective
 * child/component and save a new components-overview-metadata.json file.
 *
 * run with 'yarn build-metadata'
 * should probably be included in build script later
 */

const glob = require('glob');
const fs = require('fs');
const componentsPath = 'catalog/components/*';
const metadataFileName = 'components-overview-metadata.json'
const jsonObject = {
  components: []
};

// delete file first if it exists as sometimes it concatenate
// the new and old .json data in the components-overview-metadata.json file
// instead of overwriting it
fs.stat(metadataFileName, ((err, stats) => {
    if (err) {
      return console.log("fs Stat err", err);
    }
    fs.unlinkSync(metadataFileName)
  })
);


glob(componentsPath, (err, directories) => {
  directories.map(topLevelFolderPath => {

    const stats = fs.statSync(topLevelFolderPath);
    if (stats.isDirectory()) {

      // All content in each directory (folders/.js etc)
      const folderContents = fs.readdirSync(topLevelFolderPath);

      // content is the name of the files and folders from the topLevelFolderPath directory
      folderContents.map(content => {

        // build a path -> catalog/components/spacing + '/' + vattenfall-spacings
        const secondLevelPath = topLevelFolderPath + '/' + content;
        const secondLevelContent = fs.statSync(secondLevelPath);

        //only use directories/folders. eg. Exclude metadata.js and .js files in this stage
        if (secondLevelContent.isDirectory()) {

          // build the component metadata path and get the metadata.
          // catalog/components/spacing/vattenfall-spacings/metadata.json
          let componentPath = secondLevelPath + '/' + 'metadata.json';
          let componentMetadata = fs.readFileSync(componentPath, 'utf8');
          componentMetadata = JSON.parse(componentMetadata);

          // get parent metadata for current component by path e.g catalog/components/sizing
          let parentMetadata = fs.readFileSync(topLevelFolderPath + '/' + 'metadata.json', 'utf8')
          parentMetadata = JSON.parse(parentMetadata);

          // add uri from parent to component
          componentMetadata.uri = parentMetadata.uri + '/' + componentMetadata.uri

          // create new .json file with and array of object containing all of the components
          jsonObject.components.push(componentMetadata);
          const obj = JSON.stringify(jsonObject);
          fs.writeFile(metadataFileName, obj, 'utf8', function (error) {
            if (err) {
              console.log('writefile error: ', error);
            }
          })
        }
      })
    }
  })
})
