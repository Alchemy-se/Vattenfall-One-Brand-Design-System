
```html
showSource: true
plain: false
---

	<form class="vf-file-upload-module" method="post" action="http://localhost:3005/uploads/upload.php" enctype="multipart/form-data">

		<div class="vf-file-upload-module__icon vf-file-upload-module__icon--doc">
		</div>

		<div class="vf-file-upload-module__input-container">

			<div class="vf-file-upload-module__input--heading" data-text-uploading="Uploading&hellip;" data-text-drag="Drag & drop your file(s) here" data-text-multiple-uploaded="files uploaded" data-text-single-uploaded="uploaded"></div>

			<label class="vf-file-upload-module__input--label-no-drag">Select file(s)
				<input type="file" class="vf-file-upload-module__input-file" name="files[]" data-text-number-of-files="0" data-text-multiple-selected="files selected" multiple />
			</label>

			<div class="vf-file-upload-module__input--details" data-text-upload-quota="Up to 20MB" data-number-percent-uploaded="0" data-text-error="Error"></div>

			<div class="vf-file-upload-module__button">
				<button type="submit" class="vf-btn vf-btn--outline-secondary">Submit</button>
			</div>
			
		</div>

	</form>

  
```


## Custom Upload

If you would prefer to use a different method than the js included here, simply add a `data-custom-upload` attribute to the `vf-file-upload-module` element, and set it as true.

```html
showSource: true
plain: false
---

	<form class="vf-file-upload-module" method="post" action="/" enctype="multipart/form-data" data-custom-upload="true">

		<div class="vf-file-upload-module__icon vf-file-upload-module__icon--doc">
		</div>

		<div class="vf-file-upload-module__input-container">

			<div class="vf-file-upload-module__input--heading" data-text-uploading="Uploading&hellip;" data-text-drag="Drag & drop your file(s) here" data-text-multiple-uploaded="files uploaded" data-text-single-uploaded="uploaded"></div>

			<label class="vf-file-upload-module__input--label-no-drag" data-text-no-drag-select="Select file(s)">
				<input type="file" class="vf-file-upload-module__input-file" name="files[]" data-text-number-of-files="0" data-text-multiple-selected="files selected" multiple />
			</label>

			<div class="vf-file-upload-module__input--details" data-text-upload-quota="Up to 20MB" data-number-percent-uploaded="0" data-text-error="Error"></div>

			<div class="vf-file-upload-module__button">
				<button type="submit" class="vf-btn vf-btn--outline-secondary">Submit</button>
			</div>
			
		</div>

	</form>

  
```







Add note about accept: <input type="file"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-accept


Have a transition if files upload quickly?

Make js disablable if they prefer a custom solution.

Move IE solution to js, only show if needed.






vf-file-upload-module__input--label-no-drag only displayed for older browsers.




if custom upload icon is used, it can be filled by animation 

The upload icon is filled by animation, according to the percentage of the upload that has completed. If a custom svg is used, it will also be animated if the relevant part of the svg 


Done:
Different language support
Move divs to data-components.
multilingual support


