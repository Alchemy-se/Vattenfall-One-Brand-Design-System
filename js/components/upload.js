(function ($) {
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

    
    e.stopImmediatePropagation();
    let fileName = e.target.files[0].name; 
    if (fileName.length > 10) {
      fileName = shortFilename(fileName)
    } 
    //     fileArray.forEach((item)=> {
    //   $("#vf-file-upload__filelist").append(`
    //   <li key=${item}>
    //     <span id="fileName">${item.name}</span>
    //     <img src="/img/close.png" alt="close button"/>
    //   </li>`
    // );
    // })

    $("#vf-file-upload__filelist").append(`
      <li>
        <span id="fileName">${fileName}</span>
        <img src="/img/close.png" alt="close button"/>
      </li>`
    );
    // if (toBig) {
    //   $("#fileName").addClass('errorText');
    // }
    $('ul').on('click', 'li', function() {
      $(this).remove();
      // fileArray.pop(this)
    });
  });


  $('#vf-file-upload__button_dragndrop').on("change", function(e) {
    e.stopImmediatePropagation();
    if($('form').hasClass("vf-file-upload--dragndrop")){

    }
  })


  $("#test").text("funkar");

})(jQuery);