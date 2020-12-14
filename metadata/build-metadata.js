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
const metadataFileName = './metadata/components-overview-metadata.json';


// delete file first if it exists as sometimes it concatenate
// the new and old .json data in the components-overview-metadata.json file
// instead of overwriting it
fs.stat(metadataFileName, ((err) => {
    if (err) {
      return console.log("fs Stat err", err);
    }
    console.log("deleted");
    fs.unlinkSync(metadataFileName)
  })
);

let jsonObject = {
  amount: {},
  components: []
};
let allComponents;
let componentMetadata;
let algoliaMeta = [];
let amount = {
  html: { global: 0 },
  angular: { global: 0, NL: 0 },
  react: { global: 0, SV: 0 },
  design: {
    figma: 0,
    adobeXd: 0,
    sketch: 0
  }
};

glob(componentsPath, (err, directories) => {
  if (err) {
    console.log('glob err: ', err)
  }
  directories.map(topLevelFolderPath => {
    if (topLevelFolderPath === 'catalog/components/exclude-not-done') {
      return
    }

    const stats = fs.statSync(topLevelFolderPath);
    if (stats.isDirectory()) {

      // All content in each directory (folders/.js etc)
      const folderContents = fs.readdirSync(topLevelFolderPath);
      let parentMetadata = fs.readFileSync(topLevelFolderPath + '/' + 'metadata.json', 'utf8')
      parentMetadata = JSON.parse(parentMetadata);


      const parentData = {
        ...parentMetadata,
        children: []
      };
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
          componentMetadata = fs.readFileSync(componentPath, 'utf8');
          componentMetadata = JSON.parse(componentMetadata);


          // TODO remove this after demo. Or handle it when/if we get indivduall designlink
          if (parentData.sketchUrl) {
            componentMetadata.sketchUrl = true
          }

          const { html, angular, react, figmaUrl, sketchUrl, adobeXdUrl } = componentMetadata


          if (html.exists) {


            if (html.globalUse && html.status === 0) {
              amount.html.global++
            }
          }
          if (angular.exists) {
            if (angular.globalUse && angular.status === 0) {
              amount.angular.global++

            }
            if (angular.support.every(item => item.status === 0 && item.region === 'NL')) {
              amount.angular.NL++
            }

          }
          if (react.exists) {
            if (react.globalUse && react.status === 0) {
              amount.react.global++
            }
            if (react.support.every(item => item.status === 0 && item.region === 'SV')) {
              amount.react.SV++
            }
          }

          if (figmaUrl) {
            amount.design.figma++
          }
          if (sketchUrl) {
            amount.design.sketch++
          }
          if (adobeXdUrl) {
            amount.design.adobeXd++

          }


          // add the component data to respective parent
          parentData.children.push(componentMetadata);


          // add data from parent to component
          componentMetadata.uri = parentMetadata.uri + '/' + componentMetadata.uri;
          if (parentMetadata.guidelineUri && componentMetadata.guidelineUri) {
            componentMetadata.guidelineUri = parentMetadata.guidelineUri + componentMetadata.guidelineUri
          }
        }
      });

      jsonObject.amount = amount
      // add all components to one array
      jsonObject.components.push(parentData);

      // needs to be a .json format to be saved
      allComponents = JSON.stringify(jsonObject)
    }
  });

  fs.writeFileSync(metadataFileName, allComponents, 'utf8')


})


