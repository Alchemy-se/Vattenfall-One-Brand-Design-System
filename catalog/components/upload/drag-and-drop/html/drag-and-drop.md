### Drag and drop example

```html
showSource: true
plain: false
---
  <form id="vf-file-upload--dragndrop" class="vf-file-upload--dragndrop">
    <span class="vf-file-upload__icon vf-icon-my-documents"></span>
    <span class="box__dragndrop"> or drag it here</span>.
    <span>Drag & drop your file(s) here</span>
    <span id="up-to-size-dragnDrop" class="vf-file-upload__span--up-to-size">Up to 50 MB each</span>
      <label for="vf-file-upload__button_dragndrop" class="vf-btn vf-btn--sm vf-btn--outline-secondary" style="display:inline;" >
        Attach file(s)...
      </label>
      <input type="file" id="vf-file-upload__button_dragndrop" name="files[]" multiple  />
      <ul id="vf-dragndrop-file-upload__filelist"></ul>
  </form>
```



