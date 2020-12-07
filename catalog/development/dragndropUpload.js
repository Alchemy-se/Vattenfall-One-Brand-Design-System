import React from "react";

const DragNDrop = () => {
  return (
    <form id="vf-file-upload--dragndrop" className="vf-file-upload--dragndrop"  method="post" action="" encType="multipart/form-data">
    <div id="test"></div>
  <span className="vf-file-upload__icon vf-icon-my-documents"></span>
  <span className="box__dragndrop"> or drag it here</span>.
  <span>Drag and drop your file here</span>
    <label htmlFor="vf-file-upload__button_dragndrop" className="vf-btn vf-btn--sm vf-btn--outline-secondary" style={{display:"inline"}} >
      Attach file(s)...
    </label>
    <input type="file" id="vf-file-upload__button_dragndrop" name="files[]" multiple="multiple" style={{display:"none"}}  />
    <ul id="vf-file-upload__filelist"></ul>
</form>

  );
};

export default DragNDrop;