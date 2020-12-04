(function ($) {
 // let close = require('Close.svg').default;

 /* function shortFilename(name) {
    const names = name.split(".");
    const shorted = names[0].substr(0, 10) + "[...]";
    return shorted + "." + names[1];
  };*/

/*  var image = document.createElement("IMG");
  image.alt = "Alt information for image";
  image.setAttribute('class', 'photo');
  image.src="http://localhost:3213/img/close.png";
  $('#lol').html(image);
  console.log('window.location: ', window.location)*/

  $('#vf-file-upload__button').on("change", function (e) {
    const maxFileSize = 200000;
    // const toBig = e.target.files[0].size > maxFileSize;
    e.stopImmediatePropagation();
    let fileName = e.target.files[0].name;
  /*  if (fileName.length > 10) {
      fileName = shortFilename(fileName)
    }*/


    $("#vf-file-upload__filelist").append(`
      <li>
        <span id="fileName"> ${fileName}</span>
        <img class="picture" alt="close button" 
        src="/img/close.png"/>
      </li>`
    );



    // if(toBig){
    //   $('fileName').addClass('errorText');
    // }
    $('ul').on('click', 'li', function () {
      $(this).remove();
    });
    // <button class="vf-upload-close-btn">x</button>
    // $(`.vf-upload-close-btn ${fileName}`).remove(`#${fileName}`);
    // <img src=${close} alt="close button"/>
  });
})(jQuery);
