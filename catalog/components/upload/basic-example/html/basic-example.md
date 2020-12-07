### Upload basic example

```html
showSource: true
---
  <form id="vf-file-upload__container" class="vf-file-upload__container">
    <span>Upload your files (5 maximum)</span>
    <span id="up-to-size" class="vf-file-upload__span--up-to-size">Up to 50 MB each</span>
    <label for="vf-file-upload__button" class="vf-btn vf-btn--sm vf-btn--outline-secondary">
      Attach file(s)...
    </label>
    <input type="file" id="vf-file-upload__button" name="files[]" multiple="multiple" style="display:none;"  />
    <ul id="vf-file-upload__filelist"></ul>
  </form>
```
