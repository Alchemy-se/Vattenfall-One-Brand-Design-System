
```html
showSource: true
plain: false
---

	<form class="vf-file-upload-module" method="post" action="http://localhost:8888/upload/upload.php" enctype="multipart/form-data">

		<div class="vf-file-upload-module__icon vf-file-upload-module__icon--doc">
		</div>

		<div class="vf-file-upload-module__input-container">

			<div class="vf-file-upload-module__input--heading" data-text-drag="Drag & drop your file(s) here" data-text-uploading="Uploading&hellip;"  data-text-multiple-uploaded="files uploaded" data-text-single-uploaded="uploaded"></div>

			<label class="vf-file-upload-module__input--label">Select file(s)
				<input type="file" class="vf-file-upload-module__input-file" name="files[]" data-text-number-of-files="0" data-text-multiple-selected="files selected" multiple />
			</label>

			<div class="vf-file-upload-module__input--details" data-text-upload-quota="Up to 20MB" data-number-percent-uploaded="0" data-text-error="Error"></div>

			<div class="vf-file-upload-module__button">
				<button type="submit" class="vf-btn vf-btn--outline-secondary">Submit</button>
			</div>
			
		</div>

	</form>

  
```

The following strings can be edited to suit your language/UI requirements:

div with class `vf-file-upload-module__input--heading`:

`data-text-drag` - The initial text to be displayed which gives instructions for users.
`data-text-uploading` - The text to be displayed in the module heading when an upload is in progress.
`data-text-multiple-uploaded` - On successful multiple uploads, this will be concatenated to the number of uploads, eg "5 files uploaded"
`data-text-single-uploaded` - On successful single upload, this will be concatenated to the number 1, eg "1 file uploaded"

input element with class `vf-file-upload-module__input-file`:

`data-text-multiple-selected` - When a single file is dragged into the module, the file name will be displayed. When multiple files are dragged into the module, this will be concatenated to the number of files, eg "5 files selected".

div with class `vf-file-upload-module__input--details`:

`data-text-upload-quota` - The initial text to be displayed which gives information for users. Upload limits are not in place by default, but this is included for information.
`data-text-error` - The text to be displayed on file upload error.



## Custom Upload

If you would prefer to use a different method than the javascript included here, simply add a `vf-file-upload-module--custom-upload` class to the `vf-file-upload-module` element. The input field is hidden by default to encourage drag & drop.

```html
showSource: true
plain: false
---

	<form class="vf-file-upload-module vf-file-upload-module--custom-upload" method="post" action="" enctype="multipart/form-data">

		<div class="vf-file-upload-module__icon vf-file-upload-module__icon--doc">
		</div>

		<div class="vf-file-upload-module__input-container">

			<div class="vf-file-upload-module__input--heading" data-text-uploading="Uploading&hellip;" data-text-drag="Drag & drop your file(s) here" data-text-multiple-uploaded="files uploaded" data-text-single-uploaded="uploaded"></div>

			<label class="vf-file-upload-module__input--label" data-text-no-drag-select="Select file(s)">Select file(s)
				<input type="file" class="vf-file-upload-module__input-file" name="files[]" data-text-number-of-files="0" data-text-multiple-selected="files selected" multiple />
			</label>

			<div class="vf-file-upload-module__input--details" data-text-upload-quota="Up to 20MB" data-number-percent-uploaded="0" data-text-error="Error"></div>

			<div class="vf-file-upload-module__button">
				<button type="submit" class="vf-btn vf-btn--outline-secondary">Submit</button>
			</div>
			
		</div>

	</form>

  
```


## Disable Drag & Drop

If you wish to disable the drag-and-drop feature, simply add a `vf-file-upload-module--select-file` class to the `vf-file-upload-module` element.

```html
showSource: true
plain: false
---

	<form class="vf-file-upload-module vf-file-upload-module--select-file" method="post" action="http://localhost:8888/upload/upload.php" enctype="multipart/form-data">

		<div class="vf-file-upload-module__icon vf-file-upload-module__icon--doc">
		</div>

		<div class="vf-file-upload-module__input-container">

			<div class="vf-file-upload-module__input--heading" data-text-uploading="Uploading&hellip;" data-text-drag="Drag & drop your file(s) here" data-text-no-drag="Choose files to be uploaded" data-text-multiple-uploaded="files uploaded" data-text-single-uploaded="uploaded"></div>

			<label class="vf-file-upload-module__input--label" data-text-no-drag-select="Select file(s)">Select file(s)
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

Move IE solution to js, only show if needed?


vf-file-upload-module__input--label-no-drag only displayed for older browsers.




if custom upload icon is used, it can be filled by animation 

The upload icon is filled by animation, according to the percentage of the upload that has completed. If a custom svg is used, it will also be animated if the relevant part of the svg 


Done:
Different language support
Move divs to data-components.
multilingual support

remove ACTION from all forms.

Disable button if no files attached.

No security considerations are included in this, as it is beyond the scope of the design system.


