


Add note about accept: <input type="file"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-accept

Validation, etc...

Have a transition if files upload quickly?


```html
showSource: true
plain: false
---

	<form class="vf-file-upload-module" method="post" action="/" enctype="multipart/form-data">

		<div class="vf-file-upload-module__icon">
		</div>

		<div class="vf-file-upload-module__input-container">

			<div class="vf-file-upload-module__input--heading vf-file-upload-module__input--heading-uploading">Uploading&hellip;</div>
			<div class="vf-file-upload-module__input--heading vf-file-upload-module__input--heading-drag">Drag & drop your file(s) here</div>
			<div class="vf-file-upload-module__input--heading vf-file-upload-module__input--heading-files"></div>

			<label class="vf-file-upload-module__input--label-no-drag">
				<div class="vf-file-upload-module__input--heading vf-file-upload-module__input--heading-select">Select file</div>
				<input class="vf-file-upload-module__input-file" type="file" name="files[]" data-multiple-caption="{count} files selected" multiple />
			</label>

			<div class="vf-file-upload-module__input--details vf-file-upload-module__input--details-quota">Up to 20MB</div>
			<div class="vf-file-upload-module__input--details vf-file-upload-module__input--details-percentage">0%</div>
			<div class="vf-file-upload-module__input--details vf-file-upload-module__input--details-error">Error</div>

			<div class="vf-file-upload-module__button">
				<button type="submit" class="vf-btn vf-btn--outline-secondary">Submit</button>
			</div>
			
		</div>

	</form>

  
```