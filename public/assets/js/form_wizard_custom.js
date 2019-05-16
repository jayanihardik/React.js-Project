/*=========================================================================================
[Form Wizard Custom Javascript]

Project	     : Seipkon - Responsive Admin Template
Author       : Hassan Rasu
Author URL   : https://themeforest.net/user/themescare
Version      : 1.0
Primary use  : Seipkon - Responsive Admin Template

Only Use For Form Wizard (form-wizards.html) Page.

==========================================================================================*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		/* 
		=================================================================
		masked input JS
		=================================================================	
		*/
		$('#form_wizard_1').steps({
			headerTag: 'h3',
			bodyTag: 'section',
			autoFocus: true,
			titleTemplate: '<span class="number">#index#</span> <span class="title">#title#</span>'
		});
		/* 
		=================================================================
		masked input JS
		=================================================================	
		*/


		$('#form_wizard_validation').steps({
			headerTag: 'h3',
			bodyTag: 'section',
			autoFocus: true,
			titleTemplate: '<span class="number">#index#</span> <span class="title">#title#</span>',
			onStepChanging: function (event, currentIndex, newIndex) {
				if (currentIndex < newIndex) {
					// Step 1 form validation
					if (currentIndex === 0) {
						var fname = $('#firstnam55').parsley();
						var lname = $('#lastnam56').parsley();
						var eml = $('#email57').parsley();
						var phn = $('#phn58').parsley();
						var cntry = $('#country59').parsley();
						var dob = $('#dob60').parsley();
						var brf = $('#brief61').parsley();

						if (fname.isValid() && lname.isValid() && eml.isValid() && phn.isValid() && cntry.isValid() && dob.isValid() && brf.isValid()) {
							return true;
						} else {
							fname.validate();
							lname.validate();
							eml.validate();
							phn.validate();
							cntry.validate();
							dob.validate();
							brf.validate();
						}
					}

					// Step 2 form validation
					if (currentIndex === 1) {
						var fnam11 = $('#fullnam11').parsley();
						var eml12 = $('#email12').parsley();
						var cntry13 = $('#country13').parsley();
						var Twn14 = $('#Town14').parsley();
						var zp15 = $('#zip15').parsley();
						var Adrs16 = $('#Address16').parsley();
						var phon17 = $('#phn17').parsley();
						var oedr18 = $('#otdr18').parsley();

						if (fnam11.isValid() && eml12.isValid() && cntry13.isValid() && Twn14.isValid() && zp15.isValid() && Adrs16.isValid() && phon17.isValid() && oedr18.isValid()) {
							return true;
						} else {
							fnam11.validate();
							eml12.validate();
							cntry13.validate();
							Twn14.validate();
							zp15.validate();
							Adrs16.validate();
							phon17.validate();
							oedr18.validate();
						}
					}
					// Step 3 form validation
					if (currentIndex === 2) {
						var radio = $('#radio-55').parsley();

						if (radio.isValid()) {
							return true;
						} else {
							radio.validate();
						}
					}


					// Always allow step back to the previous step even if the current step is not valid.
				} else {
					return true;
				}
			}
		});


	});


}(jQuery));