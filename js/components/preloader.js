(function($){

	function updateArrayOffset(el, percentage){

		el.style.strokeDasharray = (percentage * 2.3876) + ',238.76';

	}

	document.querySelectorAll('.vf-preloader').forEach(function(preloader) {

		//Create initial svg with path and text.
		var vfSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		vfSvg.setAttributeNS(null,"class","vf-preloader-svg");

		var vfSvgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
		var vfSvgPathElement = vfSvg.appendChild(vfSvgPath);
		vfSvgPathElement.setAttributeNS(null,"class","vf-preloader-circle");
		vfSvgPathElement.setAttributeNS(null,"d","M40 2 a 38 38 0 0 1 0 76 a 38 38 0 0 1 0 -76");

		var vfSvgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
		var vfSvgTextElement = vfSvg.appendChild(vfSvgText);
		vfSvgTextElement.setAttributeNS(null,"class","vf-preloader-percentage");
		vfSvgTextElement.setAttributeNS(null,"x","50%");
		vfSvgTextElement.setAttributeNS(null,"y","50%");
		
		preloader.appendChild(vfSvg);

		//Get percentage and display it. If not available, set to 0.
		var displayPercentage = preloader.getAttribute('data-vf-preloader-percentage');
		if(!displayPercentage){
			displayPercentage = 0;
		}

		preloader.getElementsByTagName('svg')[0].getElementsByTagName('text')[0].textContent = displayPercentage + "%";
		updateArrayOffset(preloader.getElementsByClassName('vf-preloader-circle')[0], displayPercentage);

		var config = { attributes: true};

		// Callback function to execute when mutations are observed
		var callback = function(mutationsList, observer) {

		    for(var mutation of mutationsList) {

		        if (mutation.type == 'attributes') {

		            if(mutation.attributeName == "data-vf-preloader-percentage"){         	

		            	mutation.target.getElementsByTagName('svg')[0].getElementsByTagName('text')[0].textContent= mutation.target.getAttribute('data-vf-preloader-percentage') + '%';
			            updateArrayOffset(mutation.target.getElementsByClassName('vf-preloader-circle')[0], mutation.target.getAttribute('data-vf-preloader-percentage'));

		            }
		        }
		    }
		};

		// Create an observer instance linked to the callback function
		var observer = new MutationObserver(callback);

		// Start observing the target node for configured mutations
		observer.observe(preloader, config);

	});

})(jQuery);