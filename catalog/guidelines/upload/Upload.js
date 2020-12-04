import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import Markdown from '../../lib/markdown';
import GuidelinesBlock from "../guidelinesBlock";
import UploadMd from "../../components/upload/basic-example/html/basic-example.md";

const Upload = () => {
  const editMd = (mdText) => {
    const hideSourceCode = mdText.replace("showSource: true", "showSource: false");
    const removeH3 = hideSourceCode.substring(hideSourceCode.indexOf("\n") + 1);
    return removeH3;
  }
  return (
    <Fragment>
    <PageHeader title="Upload" />
    <section className="p-2 vf-border-top-gray-200"></section>
    <GuidelinesBlock 
        title="Basic upload example" 
        text="Text about upload.."
      >
        <Markdown source={editMd(UploadMd)} />
      </GuidelinesBlock>
    </Fragment>

  );
};

export default Upload;