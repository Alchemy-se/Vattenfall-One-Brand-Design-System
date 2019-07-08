(function($){

	document.querySelectorAll('.vf-file-upload-module').forEach(function() {

		//Check required browser features are supported
		var isAdvancedUpload = function() {
			var div = document.createElement('div');
			return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
		}();
	
		$('.vf-file-upload-module__icon').each(function( index ) {
			$(this).html('<svg viewBox="0 0 60 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="vf-upload-icon-clip-path"><path d="M30,0H0v80h60V26L30,0z M34,14.1l9.2,8H34V14.1z M8,72V8h18v22h26v42H8z"/></clipPath></defs><rect x="0" y="0" fill="rgb(235, 242, 243)" width="100%" height="100%" clip-path="url(#vf-upload-icon-clip-path)" /><rect id="vf-upload-icon--fill" x="0" y="0" fill="rgb(25, 100, 163)" width="100%" height="100%" clip-path="url(#vf-upload-icon-clip-path)" /></svg>');

		});

		var $uploadModule = $('.vf-file-upload-module');
		var $input = $uploadModule.find('input[type="file"]');
		$label = $uploadModule.find('.vf-file-upload-module__input-container .vf-file-upload-module__input--heading-files');
		$quota = $uploadModule.find('.vf-file-upload-module__input-container .vf-file-upload-module__input--details-quota');

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

		$uploadModule.on('submit', function(e) {

			if ($uploadModule.hasClass('is-uploading')) return false;

			$uploadModule.addClass('is-uploading').removeClass('is-error');

			if (isAdvancedUpload) {
				
				e.preventDefault();
				var ajaxData = new FormData($uploadModule.get(1));

				if (droppedFiles) {
					$.each( droppedFiles, function(i, file) {
						ajaxData.append( $input.attr('name'), file );
						console.log($input.attr('name'));
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
					progress: function (data) {
						if (data.lengthComputable) {
							var percentComplete = data.loaded / data.total;
							$('.vf-file-upload-module__input--details-percentage').text(percentComplete + '%');
							var vfUploadIconFill = 100 - percentComplete;
							$('.vf-file-upload-module__icon svg #vf-upload-icon--fill').css('fill', vfUploadIconFill);
							//$('.vf-file-upload-module__input--details-percentage').removeClass('vf-file-upload-module__input--complete');
						} else {
							console.log('Unable to compute progress information since the total size is unknown');
						}
					},
					complete: function() {
						$uploadModule.removeClass('is-uploading');
					},
					success: function(data) {
						$uploadModule.addClass( data.success == true ? 'is-success' : 'is-error' );
						if (!data.success) $errorMsg.text(data.error);
						else{
							$label.text($label.text().substring(0, $label.text().length - 8).concat("uploaded"));
						}
					},
					error: function() {
						console.log("File upload error.");
					}
				});

			} else {

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
					
					if (!data.success) $errorMsg.text(data.error);

					$uploadModule.removeAttr('target');
					$iframe.remove();

				});
			}
			
		});

		/*var $input = $uploadModule.find('input[type="file"]'),
		$label = $uploadModule.find('.vf-file-upload-module__input-container .vf-file-upload-module__input--heading-files'),
		$quota = $uploadModule.find('.vf-file-upload-module__input-container .vf-file-upload-module__input--details-quota'),*/
		var showFiles = function(files) {
			var $totalSize = 0;
			$label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace( '{count}', files.length ) : files[ 0 ].name);
			for (var i  = 0; i < files.length; i++){$totalSize  += files[i].size;}
			$quota.text($totalSize < 1000000 ? (Math.round( ($totalSize/1000) * 10 ) / 10) + " KB" : (Math.round( ($totalSize/1000000) * 10 ) / 10) + " MB");

		};

		$uploadModule.on('drop', function(e) {
			$uploadModule.addClass('has-dropped');
			droppedFiles = e.originalEvent.dataTransfer.files; // the files that were dropped
			showFiles( droppedFiles );
		});

		$input.on('change', function(e) {
			showFiles(e.target.files);
		});

	});

})(jQuery);