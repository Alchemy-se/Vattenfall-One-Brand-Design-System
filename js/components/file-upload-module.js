(function($){

	//Insert svg
	$('.vf-file-upload-module-icon').html('<svg viewBox="0 0 60 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="vf-upload-icon-clip-path"><path d="M30,0H0v80h60V26L30,0z M34,14.1l9.2,8H34V14.1z M8,72V8h18v22h26v42H8z"/></clipPath></defs><rect x="0" y="0" fill="rgb(235, 242, 243)" width="100%" height="100%" clip-path="url(#vf-upload-icon-clip-path)" /><rect id="vf-upload-icon--fill" x="0" y="0" fill="rgb(25, 100, 163)" width="100%" height="100%" clip-path="url(#vf-upload-icon-clip-path)" /></svg>');


	//get data-vf-upload-percentage attr
	//add to innertext to update value
	//use if(val < 100) 100 - val to update colour fill on svg #vf-upload-icon--fill

	//detect drag & drop
	//attch file html dialogue

	//update d&d state css

	//toggle visibility of vf-file-upload-module-status & vf-file-upload-module-instructions


})(jQuery);