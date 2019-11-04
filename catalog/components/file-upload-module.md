In addition to design implementation, this module contains an example method to upload to a server for the sake of demonstration and testing. This method is included when the `vf-file-upload-module--example-upload` class is added to the `form` element.

The example method can be found at the foot of this document. All strings are updated depending on the UI state, and the icon is animated depending on the file upload status.

No security considerations are included in this example method, as it is beyond the scope of the design system. **It is not recommended to use the example method in a production setting.**

To test with the upload example, simply add your server to the `action` attribute of the form. The expected response is either *success* or *error* in json format.

## Standard

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

### Strings

All strings displayed on the Upload Module can be edited via html `data-` attributes, and are applied according to the UI state when using the example method.

The following strings can be edited to suit your language/UI requirements:

Div element with class `vf-file-upload-module__input--heading`:

* `data-text-drag` - The initial text to be displayed which gives instructions for users.
* `data-text-uploading` - The text to be displayed in the module heading when an upload is in progress.
* `data-text-multiple-uploaded` - On successful multiple uploads, this will be concatenated to the number of uploads, eg _5 files uploaded_
* `data-text-single-uploaded` - On successful single upload, this will be concatenated to the number 1, eg _1 file uploaded_

Input element with class `vf-file-upload-module__input-file`:

* `data-text-multiple-selected` - When a single file is dragged into the module, the file name will be displayed. When multiple files are dragged into the module, this will be concatenated to the number of files, eg _5 files selected_.

Div element with class `vf-file-upload-module__input--details`:

* `data-text-upload-quota` - The initial text to be displayed which gives information for users. Upload limits are not in place by default, but this is included for information.
* `data-text-error` - The text to be displayed on file upload error.

### Icon

When a file is uploaded in the example, the document icon is animated and the percentage displayed is updated to reflect the amount that has uploaded.

If you wish to use a different icon, simply remove the `vf-file-upload-module__icon` class. If you wish to animate your icon in the same way as the example, give the desired svg element (`rect`, `mask`, etc) an ID of `#vf-upload-icon--fill` and update the `y` value of this element as well as the percentage displayed via AJAX and XMLHttpRequest. Example jQuery method:


	$.ajax({
		
		...

		xhr: function() {
	        var xhr = new window.XMLHttpRequest();
	        xhr.upload.addEventListener("progress", function(data) {

				if (data.lengthComputable) {

					var percentComplete = (data.loaded / data.total) * 100;

					//Update .vf-file-upload-module__input--details
					$moduleDetails.text((Math.round( (percentComplete) * 1 ) / 1) + '%');
					$moduleDetails.attr("data-number-percent-uploaded", percentComplete); 

					var vfUploadIconFill = 100 - percentComplete;

					$moduleIcon.find('svg #vf-upload-icon--fill').css('y', vfUploadIconFill + "%");


				} else {
					console.log('Unable to compute progress information since the total size is unknown');
				}

	       }, false);
	       return xhr;
	    },

	    ...

	});


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

## Example upload method

```
(function($){

	$( ".vf-file-upload-module" ).each(function() {
	
		//Add icon if requested
		$('.vf-file-upload-module__icon--doc').each(function() {
			$(this).html('<svg viewBox="0 0 60 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="vf-upload-icon-clip-path"><path d="M30,0H0v80h60V26L30,0z M34,14.1l9.2,8H34V14.1z M8,72V8h18v22h26v42H8z"/></clipPath></defs><rect x="0" y="0" fill="rgb(235, 242, 243)" width="100%" height="100%" clip-path="url(#vf-upload-icon-clip-path)" /><rect id="vf-upload-icon--fill" x="0" y="100%" fill="rgb(25, 100, 163)" width="100%" height="100%" clip-path="url(#vf-upload-icon-clip-path)" /></svg>');

		});

		$uploadModule = $(this);
		var $input = $uploadModule.find('input[type="file"]');

		var $moduleHeading = $uploadModule.find('.vf-file-upload-module__input-container .vf-file-upload-module__input--heading');
		var $moduleDetails = $uploadModule.find('.vf-file-upload-module__input-container .vf-file-upload-module__input--details');
		var $moduleIcon = $uploadModule.find('.vf-file-upload-module__icon');
		var $moduleSubmitButton = $uploadModule.find('.vf-file-upload-module__button button');

		//Customisable strings
		var $headingDrag = $moduleHeading.attr("data-text-drag");
		var $headingNoDrag = $moduleHeading.attr("data-text-no-drag");
		var $headingUploading = $moduleHeading.attr("data-text-uploading");
		var $headingSingleUploaded = $moduleHeading.attr("data-text-single-uploaded");
		var $headingMultipleUploaded = $moduleHeading.attr("data-text-multiple-uploaded");
		var $detailQuota = $moduleDetails.attr("data-text-upload-quota");
		var $detailError = $moduleDetails.attr("data-text-error");

		$moduleHeading.text($headingDrag);
		$moduleDetails.text($detailQuota);

		if($uploadModule.hasClass("vf-file-upload-module--example-upload")){

			//Check required browser features are supported for advanced upload (drag and drop)
			var isAdvancedUpload = function() {
				var div = document.createElement('div');
				return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
			}();

			$moduleSubmitButton.attr('disabled','disabled'); //disable submit button unless file added.

			if (isAdvancedUpload && !$uploadModule.hasClass("vf-file-upload-module--select-file")) {

				$uploadModule.addClass('has-advanced-upload');

				var droppedFiles = false;

				$uploadModule.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
					e.preventDefault();
					e.stopPropagation();
				})
				.on('dragover dragenter', function() {
					$(this).addClass('is-dragover');
				})
				.on('dragleave dragend drop', function() {
					$(this).removeClass('is-dragover');
				})
				.on('drop', function(e) {
					droppedFiles = e.originalEvent.dataTransfer.files;
				});

			}

			else{

				$moduleHeading.text($headingNoDrag);

			}

			$uploadModule.on('submit', function(e) {

				e.preventDefault();

				$moduleSubmitButton.attr('disabled','disabled');

				if ($(this).hasClass('is-uploading')){
					return false;
				} 

				$(this).addClass('is-uploading').removeClass('is-error');

				$moduleHeading.text($headingUploading);

				var ajaxData = new FormData($(this).get(0)); //specify the form

				$moduleDetails.text("0%");

				if (droppedFiles) {

					$.each( droppedFiles, function(i, file) {

						ajaxData.append( $input.attr('name'), file );

					});

				}

				$.ajax({
					context: this,
					url: $(this).attr('action'),
					type: $(this).attr('method'),
					data: ajaxData,
					dataType: 'json',
					cache: false,
					contentType: false,
					processData: false,

					xhr: function() {
				        var xhr = new window.XMLHttpRequest();
				        xhr.upload.addEventListener("progress", function(data) {

							if (data.lengthComputable) {

								var percentComplete = (data.loaded / data.total) * 100;

								$moduleDetails.text((Math.round( (percentComplete) * 1 ) / 1) + '%');
								$moduleDetails.attr("data-number-percent-uploaded", percentComplete);

								var vfUploadIconFill = 100 - percentComplete;

								$moduleIcon.find('svg #vf-upload-icon--fill').css('y', vfUploadIconFill + "%");


							} else {
								console.log('Unable to compute progress information since the total size is unknown');
							}

				       }, false);
				       return xhr;
				    },
					complete: function() {
						$(this).removeClass('is-uploading');
					},
					success: function(data) {
						$(this).addClass( data.success ? 'is-success' : 'is-error' );
						if (!data.success){
							
							$moduleDetails.html('<span class="vf-file-upload-module__input--details-error">' + $detailError + '</span>');
							$moduleIcon.find('svg #vf-upload-icon--fill').css('y', "100%"); //Reset

						}
						else{
							
							$moduleHeading.text( $input.attr('data-text-number-of-files') > 1 ? $input.attr('data-text-number-of-files') + " " + $headingMultipleUploaded : $moduleHeading.attr('data-single-filename') + " " + $headingSingleUploaded);
							$moduleDetails.html('<span class="vf-file-upload-module__input--details-success">100%</span>');
						}
					},
					error: function(data) {
						$(this).addClass('is-error');
						$moduleDetails.html('<span class="vf-file-upload-module__input--details-error">' + $detailError + '</span>');
						$moduleIcon.find('svg #vf-upload-icon--fill').css('y', "100%"); //Reset 

					}
				});
				
			});

			var showFiles = function(files) {
				var $totalSize = 0;

				//Display filename or number of files added
				$input.attr('data-text-number-of-files', files.length);
				$moduleHeading.attr('data-single-filename', files.length === 1 ? files[ 0 ].name : "");
				$moduleHeading.text(files.length > 1 ? (files.length + " " + $input.attr('data-text-multiple-selected') || '') : files[ 0 ].name);

				for (var i  = 0; i < files.length; i++){$totalSize  += files[i].size;}

				//display filesize sum
				$moduleDetails.text($totalSize < 1000000 ? (Math.round( ($totalSize/1000) * 10 ) / 10) + " KB" : (Math.round( ($totalSize/1000000) * 10 ) / 10) + " MB");

			};

			$uploadModule.on('drop', function(e) {

				$(this).trigger("reset"); //Rest the form
				$(this).addClass('has-dropped');
				$moduleIcon.find('svg #vf-upload-icon--fill').css('y', "100%"); //Reset icon
				droppedFiles = e.originalEvent.dataTransfer.files;
				showFiles( droppedFiles );
				$moduleSubmitButton.removeAttr('disabled');

			});

			$input.on('change', function(e) {
				showFiles(e.target.files);
				$moduleSubmitButton.removeAttr('disabled');
		
			});


		}

		else{
			//Custom upload technique requested.

		}

	});

})(jQuery);


```