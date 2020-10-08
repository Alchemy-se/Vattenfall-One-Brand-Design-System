const fs = require('fs');
const jsonOverview = require('./components-overview-metadata');
const algoliaSearchMetadata = 'metadata/algolia-search-metadata.json';
const metadataFileName = 'metadata/components-overview-metadata.json';


let childArr = [];
let parentArr = [];
let componentArr = [];
let guidelineArr = [];

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

  // we need the same data but mark it with type: guideline
  // if the component has a guideline
  jsonOverview.components.forEach(component => {
    if (component.guidelineUri) {

      const parent = { children: [] };

      parent.name = component.name;
      parent.type = 'guideline';
      parent.description = component.description;
      parent.objectID = component.name.toLowerCase().replace(/\s/g, '-') + "-" + "guideline";
      parent.uri = component.guidelineUri;

      component.children.forEach(childItem => {
        const child = { parent: [] };
        child.type = 'guideline';
        child.uri = childItem.guidelineUri;
        child.description = childItem.description;
        child.objectID = childItem.name.toLowerCase().replace(/\s/g, '-') + "-" + "guideline";
        child.name = childItem.name;
        child.id = childItem.id;
        child.parent.push({ name: component.name });
        parent.children.push({ name: childItem.name });
        childArr.push(child);
      });
      parentArr.push(parent);
      guidelineArr = parentArr.concat(childArr)
    }
  });

  const mergedArr = componentArr.concat(guidelineArr)
  fs.writeFileSync(algoliaSearchMetadata, JSON.stringify(mergedArr), 'utf8')

}));

