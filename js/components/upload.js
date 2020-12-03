(function ($) {
  // let close = require('../../assets/icons/Close.svg').default;
  function shortFilename(name) {
    const names = name.split(".");
    const shorted = names[0].substr(0, 10) + "[...]";
    return shorted + "." + names[1];
  };

  let fileArray = [];

  $('#vf-file-upload__button').on("change", function(e) {
    // const maxFileSize = 200000;
    // const toBig = e.target.files[0].size > maxFileSize;
   
    fileArray.push(e.target.files)
    // fileArray.forEach(entry => {
    //   $('fileName').addClass('errorText');
    // })
    // (if($this)(is to bigg -> add class)
    
    console.log("fileör", fileArray)
    e.stopImmediatePropagation();
    let fileName = e.target.files[0].name; 
    if (fileName.length > 10) {
      fileName = shortFilename(fileName)
    } 

    $("#vf-file-upload__filelist").append(`
      <li>
        <span id="fileName"> ${fileName}</span>
        <button class="vf-upload-close-btn">x</button>
      </li>`
    );
    // $('.picture').attr('src', '../../assets/icons/close.png');
    // if(toBig){
    //   $('fileName').addClass('errorText');
    // }
    $('ul').on('click', 'li', function() {
      $(this).remove();
  });
  // <img class="picture" alt="close button"/>
  // <button class="vf-upload-close-btn">x</button>
    // $(`.vf-upload-close-btn ${fileName}`).remove(`#${fileName}`);
    // <img src=${close} alt="close button"/>
  });

})(jQuery);