/*************************
My scripts for FEWD - 4
Robert Manolis
Milwaukie, OR - 4/11/2017
*************************/

(function(){
	"use strict";
	
	// Lightbox Options
	lightbox.option({
		'alwaysShowNavOnTouchDevices': true,
		'resizeDuration': 200,
		'wrapAround': true
	});
	
	
	/**********************
	       SEARCH
	**********************/
	var cerch = $("input");
	
	// perform search when user types into input
	cerch.keyup(function() {
		let val = cerch.val().toLowerCase();
		let imgs = $(".example-image-link");
		
		// iterate over items
		imgs.each(function(indy, vally) {
			
			// get subtitle - lowercase
			var subtitle = $(vally).attr("data-title").toLowerCase();
			
			// show matches
			if (subtitle.includes(val)) {
				$(imgs[indy]).show(750);
			} else {
				$(imgs[indy]).hide(750);
			}
		});
	});
}());