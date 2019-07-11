In addition to design implementation, this module contains an example method to upload to a server for the sake of demonstration and testing. All strings can be edited via html `data-` attributes, and are applied according to the UI state. No security considerations are included in this method, as it is beyond the scope of the design system.

### Icon

When a file is uploaded, the document icon is animated to reflect the amount that has uploaded. If you wish to use a different icon, simply remove the `vf-file-upload-module__icon` class. If you wish to animate your custom icon in the same way, give the desired svg element (*rect*, *mask*, etc) an ID of `#vf-upload-icon--fill`.

### Strings

The following strings can be edited to suit your language/UI requirements:

Div with class `vf-file-upload-module__input--heading`:

* `data-text-drag` - The initial text to be displayed which gives instructions for users.
* `data-text-uploading` - The text to be displayed in the module heading when an upload is in progress.
* `data-text-multiple-uploaded` - On successful multiple uploads, this will be concatenated to the number of uploads, eg _5 files uploaded_
* `data-text-single-uploaded` - On successful single upload, this will be concatenated to the number 1, eg _1 file uploaded_

Input element with class `vf-file-upload-module__input-file`:

* `data-text-multiple-selected` - When a single file is dragged into the module, the file name will be displayed. When multiple files are dragged into the module, this will be concatenated to the number of files, eg _5 files selected_.

Div with class `vf-file-upload-module__input--details`:

* `data-text-upload-quota` - The initial text to be displayed which gives information for users. Upload limits are not in place by default, but this is included for information.
* `data-text-error` - The text to be displayed on file upload error.


```html
showSource: true
plain: false
---

	<form class="vf-file-upload-module vf-file-upload-module--example-upload" method="post" action="" enctype="multipart/form-data">

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

## Disable Drag & Drop

If the browser does not support drag-and-drop, a *select file* method will be used instead. In addition to this, if you wish to disable drag-and-drop for all browsers, simply add a `vf-file-upload-module--select-file` class to the `vf-file-upload-module` element.

```html
showSource: true
plain: false
---

	<form class="vf-file-upload-module vf-file-upload-module--example-upload vf-file-upload-module--select-file" method="post" action="" enctype="multipart/form-data">

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

## Custom Upload Method

If you would prefer to use a different method than the javascript included here, simply remove the `vf-file-upload-module--example-upload` class from the `vf-file-upload-module` element.

```html
showSource: true
plain: false
---

	<form class="vf-file-upload-module" method="post" action="" enctype="multipart/form-data">

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