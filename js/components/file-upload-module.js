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