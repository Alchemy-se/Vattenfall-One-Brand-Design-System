(function($){

	document.querySelectorAll('.vf-file-upload-module').forEach(function() {
	
		//Add icon if requested
		$('.vf-file-upload-module__icon--doc').each(function() {
			$(this).html('<svg viewBox="0 0 60 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="vf-upload-icon-clip-path"><path d="M30,0H0v80h60V26L30,0z M34,14.1l9.2,8H34V14.1z M8,72V8h18v22h26v42H8z"/></clipPath></defs><rect x="0" y="0" fill="rgb(235, 242, 243)" width="100%" height="100%" clip-path="url(#vf-upload-icon-clip-path)" /><rect id="vf-upload-icon--fill" x="0" y="0" fill="rgb(25, 100, 163)" width="100%" height="100%" clip-path="url(#vf-upload-icon-clip-path)" /></svg>');

		});

		var $uploadModule = $('.vf-file-upload-module');
		var $input = $uploadModule.find('input[type="file"]');

		var $moduleHeading = $uploadModule.find('.vf-file-upload-module__input-container .vf-file-upload-module__input--heading');
		var $moduleDetails = $uploadModule.find('.vf-file-upload-module__input-container .vf-file-upload-module__input--details');

		//Customisable strings
		var $headingDrag = $moduleHeading.attr("data-text-drag");
		var $headingUploading = $moduleHeading.attr("data-text-uploading");
		var $headingSingleUploaded = $moduleHeading.attr("data-text-single-uploaded");
		var $headingMultipleUploaded = $moduleHeading.attr("data-text-multiple-uploaded");
		var $detailQuota = $moduleDetails.attr("data-text-upload-quota");
		//var $detailUploaded = $moduleDetails.attr("data-number-percent-uploaded");
		var $detailError = $moduleDetails.attr("data-text-error");

		$moduleHeading.text($headingDrag);
		$moduleDetails.text($detailQuota);

		//$uploadModule.trigger("reset"); //reset the form, just in case anything stored

		if($uploadModule.attr("data-custom-upload") != "true"){

			//Check required browser features are supported for advanced upload
			var isAdvancedUpload = function() {
				var div = document.createElement('div');
				return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
			}();

			if (isAdvancedUpload) {

				$uploadModule.addClass('has-advanced-upload');

				var droppedFiles = false;

				$uploadModule.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
					e.preventDefault();
					e.stopPropagation();
				})
				.on('dragover dragenter', function() {
					$uploadModule.addClass('is-dragover');
				})
				.on('dragleave dragend drop', function() {
					$uploadModule.removeClass('is-dragover');
				})
				.on('drop', function(e) {
					droppedFiles = e.originalEvent.dataTransfer.files;
				});

			}

			else{

				$moduleHeading.text("");

			}

			$uploadModule.on('submit', function(e) {

				if ($uploadModule.hasClass('is-uploading')) return false;

				$uploadModule.addClass('is-uploading').removeClass('is-error');

				$moduleHeading.text($headingUploading);

				if (isAdvancedUpload) {
					
					e.preventDefault();
					var ajaxData = new FormData($uploadModule.get(0)); //specify the form

					$moduleDetails.text("0%");

					if (droppedFiles) {

						//ajaxData.append( $input.attr('name'), droppedFiles[0] );
						$.each( droppedFiles, function(i, file) {

							ajaxData.append( $input.attr('name'), file ); //. $input.attr('name') is just a label
							console.log(ajaxData.getAll($input.attr('name')));

						});

					}

					$.ajax({
						url: $uploadModule.attr('action'),
						type: $uploadModule.attr('method'),
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
									$('.vf-file-upload-module__icon--doc svg #vf-upload-icon--fill').css('y', vfUploadIconFill + "%");


								} else {
									console.log('Unable to compute progress information since the total size is unknown');
								}

					       }, false);
					       return xhr;
					    },

						/*progress: function (data) {

							console.log("progress: data");

							console.log(data);

							if (data.lengthComputable) {

								var percentComplete = data.loaded / data.total;

								console.log(data.loaded);

								$moduleDetails.text(percentComplete + '%');
								$moduleDetails.attr("data-number-percent-uploaded", percentComplete);

								var vfUploadIconFill = 100 - percentComplete;
								$('.vf-file-upload-module__icon--doc svg #vf-upload-icon--fill').css('y', vfUploadIconFill + "%");


							} else {
								console.log('Unable to compute progress information since the total size is unknown');
							}
						},*/
						complete: function() {
							$uploadModule.removeClass('is-uploading');
						},
						success: function(data) {
							$uploadModule.addClass( data.success == true ? 'is-success' : 'is-error' );
							if (!data.success){

								console.log(data.error);
								console.log(data.files);

								$moduleDetails.html('<span class="vf-file-upload-module__input--details-error">' + $detailError + '</span>');

							}
							else{

								console.log(data.success);
								console.log(data.files);

								//success does not always mean that the 100% - if (data.lengthComputable)
								$moduleHeading.text( $input.attr('data-text-number-of-files') > 1 ? $input.attr('data-text-number-of-files') + " " + $headingMultipleUploaded : $moduleHeading.attr('data-single-filename') + " " + $headingSingleUploaded);
								//$moduleDetails.html('<span class="vf-file-upload-module__input--details-success">' + $moduleDetails.attr("data-number-percent-uploaded") + '%</span>');
								$moduleDetails.html('<span class="vf-file-upload-module__input--details-success">100%</span>');
							}
						},
						error: function(data) {
							$uploadModule.addClass('is-error');
							$moduleDetails.html('<span class="vf-file-upload-module__input--details-error">' + $detailError + '</span>');
							console.log("File upload error.");
							console.log(data);

						}
					});

				} else {

					//TO DO: HANDLE THESE STATES & Get UPLOADING AMOUNT

					var iframeName = 'uploadiframe' + new Date().getTime();
					$iframe = $('<iframe name="' + iframeName + '" style="display: none;"></iframe>');

					$('body').append($iframe);
					$uploadModule.attr('target', iframeName);

					$iframe.one('load', function() {
						var data = JSON.parse($iframe.contents().find('body' ).text());
						$uploadModule
						.removeClass('is-uploading')
						.addClass(data.success == true ? 'is-success' : 'is-error')
						.removeAttr('target');
						
						//if (!data.success) $errorMsg.text(data.error);

						$uploadModule.removeAttr('target');
						$iframe.remove();

					});
				}
				
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

				$uploadModule.addClass('has-dropped');
				$('.vf-file-upload-module__icon--doc svg #vf-upload-icon--fill').css('y', "100%"); //Reset
				droppedFiles = e.originalEvent.dataTransfer.files;
				showFiles( droppedFiles );


				console.log(droppedFiles);

			});

			$input.on('change', function(e) {
				showFiles(e.target.files);
			});


		}

		else{
			//Custom upload technique requested.
		}

	});

})(jQuery);