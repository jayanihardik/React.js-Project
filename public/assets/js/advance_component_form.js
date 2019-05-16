/*=========================================================================================
[Advance Component Form Custom Javascript]

Project	     : Seipkon - Responsive Admin Template
Author       : Hassan Rasu
Author URL   : https://themeforest.net/user/themescare
Version      : 1.0
Primary use  : Seipkon - Responsive Admin Template

Only Use For advance-components.html Page.

==========================================================================================*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		/* 
		=================================================================
		masked input JS
		=================================================================	
		*/

		$('#dateMask').mask('99/99/9999');
		$('#aliasdateMask').mask('99/99/9999');
		$('#phoneMask').mask('(999) 999-9999');
		$('#intlMask').mask('999-999-9999x99999');
		$('#ipMask').mask('999.999.999.999');
		$('#serialMask').mask('9999-9999-9999-9999-9999');

		/* 
		=================================================================
		Select2 JS
		=================================================================	
		*/

		$('.select2').select2();


		/* 
		=================================================================
		Daterange Picker JS
		=================================================================	
		*/

		$('#datepicker').daterangepicker({
			singleDatePicker: true,
		});
		$('#reservation').daterangepicker();

		$('#datetimerange').daterangepicker({
			timePicker: true,
			timePickerIncrement: 30,
			format: 'MM/DD/YYYY h:mm A'
		});


		$('#daterange_btn').daterangepicker({
				ranges: {
					'Today': [moment(), moment()],
					'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
					'Last 7 Days': [moment().subtract(6, 'days'), moment()],
					'Last 30 Days': [moment().subtract(29, 'days'), moment()],
					'This Month': [moment().startOf('month'), moment().endOf('month')],
					'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
				},
				startDate: moment().subtract(29, 'days'),
				endDate: moment()
			},
			function (start, end) {
				$('#daterange_btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
			}
		);

		/* 
		=================================================================
		Daterange Picker JS
		=================================================================	
		*/


		$('#cp1').colorpicker({
			color: "#16813D",
			format: null
		});
		$('#cp2').colorpicker({
			color: "#16813D",
			format: null
		});

		$('#cp3').colorpicker({
			color: "#ae0000",
			horizontal: true,
			format: null
		});

		$('#cp4').colorpicker({
			color: "rgba(248, 235, 72, 0.5)",
			useAlpha: false
		});

		/* 
		=================================================================
		Knob JS
		=================================================================	
		*/


		$(function ($) {
			$(".knob").knob({
				change: function (value) {
					//console.log("change : " + value);
				},
				release: function (value) {
					//console.log(this.$.attr('value'));
					console.log("release : " + value);
				},
				cancel: function () {
					console.log("cancel : ", this);
				},
				/*format : function (value) {
				    return value + '%';
				},*/
				draw: function () {
					// "tron" case
					if (this.$.data('skin') == 'tron') {
						this.cursorExt = 0.3;
						var a = this.arc(this.cv) // Arc
							,
							pa // Previous arc
							, r = 1;
						this.g.lineWidth = this.lineWidth;
						if (this.o.displayPrevious) {
							pa = this.arc(this.v);
							this.g.beginPath();
							this.g.strokeStyle = this.pColor;
							this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
							this.g.stroke();
						}
						this.g.beginPath();
						this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
						this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
						this.g.stroke();
						this.g.lineWidth = 2;
						this.g.beginPath();
						this.g.strokeStyle = this.o.fgColor;
						this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
						this.g.stroke();
						return false;
					}
				}
			});
			// Example of infinite knob, iPod click wheel
			var v, up = 0,
				down = 0,
				i = 0,
				$idir = $("div.idir"),
				$ival = $("div.ival"),
				incr = function () {
					i++;
					$idir.show().html("+").fadeOut();
					$ival.html(i);
				},
				decr = function () {
					i--;
					$idir.show().html("-").fadeOut();
					$ival.html(i);
				};
			$("input.infinite").knob({
				min: 0,
				max: 20,
				stopper: false,
				change: function () {
					if (v > this.cv) {
						if (up) {
							decr();
							up = 0;
						} else {
							up = 1;
							down = 0;
						}
					} else {
						if (v < this.cv) {
							if (down) {
								incr();
								down = 0;
							} else {
								down = 1;
								up = 0;
							}
						}
					}
					v = this.cv;
				}
			});
		});


	});


}(jQuery));