const fs = require('fs');
const jsonOverview = require('./components-overview-metadata');
const glob = require("glob");
const algoliaSearchMetadata = 'metadata/algolia-search-metadata.json';
const guidelineMetadata = 'metadata/guideline.json';
const metadataFileName = 'metadata/components-overview-metadata.json';
const guidelineRootPath = './catalog/guidelines/*/*.json'

let childArr = [];
let parentArr = [];
let componentArr = [];
let guidelineArr = [];
let mergedArr = [];

async function buildAlgoliadMetadataJSON() {
  return new Promise((resolve) => {

    fs.stat(metadataFileName, ((err) => {
      if (err) {
        return console.log("fs Stat err", err);
      }
      jsonOverview.components.forEach(component => {



        const parent = { children: [] };


        parent.name = component.name;
        parent.description = component.description
        parent.type = 'component';
        parent.uri = component.uri;
        parent.objectID = component.name.toLowerCase().replace(/\s/g, '-') + "-" + "component";

        component.children.forEach(childItem => {
          const child = { parent: [] };
          child.type = 'component';
          child.uri = childItem.uri;
          child.description = childItem.description
          child.objectID = childItem.name.toLowerCase().replace(/\s/g, '-') + "-" + "component";
          child.name = childItem.name;
          child.id = childItem.id;
          child.parent.push({ name: component.name });
          parent.children.push({ name: childItem.name });
          childArr.push(child)
        });
        parentArr.push(parent);
        componentArr = parentArr.concat(childArr)

      });


      // Get metadata paths for guidelines
      const guidelinePaths = glob.sync(guidelineRootPath, {})

      guidelinePaths.forEach(dir => {
        let data = fs.readFileSync(dir, 'utf8')
        const tmpData = JSON.parse(data)

        // Make a more unique id for guideline records
        data = tmpData.map(item => {
          const prefix = item.id ? item.id : "parent";
          item.objectID = prefix + "_" + item.objectID;
          return item
        });
        data = JSON.stringify(data)
        componentArr = componentArr.concat(JSON.parse(data))

      });



      fs.writeFileSync(algoliaSearchMetadata, JSON.stringify(componentArr), 'utf8')
      resolve()
    }));
  });

}

module.exports = {
  buildAlgoliadMetadataJSON
}


