import React from 'react';

const Upload = () => {
  return (
    <form id="vf-file-upload__container" className="vf-file-upload__container">
      <span>Upload your files (5 maximum)</span>
      <span>Up to 50 MB each</span>

      <label htmlFor="vf-file-upload__button" className="vf-btn vf-btn--sm vf-btn--outline-secondary">
        Attach file(s)...
      </label>
      <input type="file" id="vf-file-upload__button" name="files[]" multiple="multiple" style={{ display: "none" }} />
      <ul id="vf-file-upload__filelist"></ul>
    </form>
  );
};

//test

export default Upload;
