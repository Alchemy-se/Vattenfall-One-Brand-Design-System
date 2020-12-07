(function ($) {
  // function shortFilename(name) {
  //   const names = name.split('.');
  //   const shorted = names[0].substr(0, 10) + '[...]';
  //   return shorted + "." + names[1];
  // };

  let fileArray = [];
  let selectedFiles = [];
  const maxFileSize = 200000;
  const uploadList = $('#vf-file-upload__filelist');
  const uploadButton = $('#vf-file-upload__button');
  const dragNdropUploadBtn = $('#vf-file-upload__button_dragndrop');
  const $dragNDropList = $('#vf-dragndrop-file-upload__filelist');
  const $dragnDropForm = $('.vf-file-upload--dragndrop');

  function removeListItem(item, currentFile, currentArr){
    item.remove();
    const filteredArr = currentArr.filter((file) => (currentFile[0].name.indexOf(file[0].name) > -1));
    currentArr = filteredArr;  
    if (currentArr.length < 5 ) {
      if($('#up-to-size').length === 0){
      $('label').removeClass('disabled');
      $('label').css("pointer-events", "auto"); 
      }
    }
  }

  function appendListItem(file, list, arr) {
    if (file[0].size > maxFileSize) {
      list.append(`
        <li id="to-large-file">
          <span class='errorText'>${file[0].name}</span>
          <span class='vf-icon-span vf-icon-close errorText' />
        </li>`
      );
      $('#up-to-size').addClass('errorText');
      $('#to-large-file').on('click', function(e) {
        e.preventDefault();
        $('label').removeClass('disabled');
        $('label').css("pointer-events", "auto");
        $('span').removeClass('errorText');  
        removeListItem($(this), file, arr);
      })
      $('label').addClass('disabled');
      $('label').css("pointer-events", "none");
    } else {
      list.append(`
        <li>
          <span>${file[0].name}</span>
          <span class="vf-icon-span vf-icon-close" />
        </li>`
      )
      $('ul').on('click', 'li', function(e) {
        e.preventDefault();
        removeListItem($(this), file, arr)
    })
  }  
  if (arr.length >= 5 ){
    $('label').addClass('disabled');
    $('label').css("pointer-events", "none");
  }
  if($('#up-to-size').length === 0){
    $('#up-to-size').removeClass('.errorText');
  }
}

  if($('form').hasClass('vf-file-upload__container')){
    uploadButton.on("change", function(e) {
      fileArray.push(e.target.files);
      e.stopImmediatePropagation();
      if (fileArray.length <= 5) {
        appendListItem(e.target.files, uploadList, fileArray);
      } 
    });
  }

  if($('form').hasClass('vf-file-upload--dragndrop')){
    const isAdvancedUpload = function() {
      const div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }

    if (isAdvancedUpload) {
      let droppedFiles = false;
    
      $dragnDropForm.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
      })
      .on('dragover dragenter', function() {
        $dragnDropForm.addClass('is-dragover');
        $('label').addClass('disabled');
      })
      .on('dragleave dragend drop', function() {
        $dragnDropForm.removeClass('is-dragover');
        $('label').removeClass('disabled');
      })
      .on('drop', function(e) {
        droppedFiles = e.originalEvent.dataTransfer.files;
        selectedFiles.push(e.originalEvent.dataTransfer.files);
    
        e.stopImmediatePropagation();
        if (selectedFiles.length <= 5){
          appendListItem(droppedFiles, $dragNDropList, selectedFiles); 
        } else {
          $('label').addClass('disabled');
          $('label').css("pointer-events", "none");
          selectedFiles.pop();
        }
      });
    }
    
    dragNdropUploadBtn.on("change", function(e) {
      selectedFiles.push(e.target.files);
      if (selectedFiles.length <= 5){
        e.stopImmediatePropagation();
        appendListItem(e.target.files, $dragNDropList, selectedFiles); 
      }
    });
  }
})(jQuery);