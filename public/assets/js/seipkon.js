/*=========================================================================================
[Seipkon Javascript]

Project	     : Seipkon - Responsive Admin Template
Author       : Hassan Rasu
Author URL   : https://themeforest.net/user/themescare
Version      : 1.0
Primary use  : Seipkon - Responsive Admin Template

Should be included in all HTML pages.

==========================================================================================*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		/* 
		=================================================================
		Sidebar Menu JS
		=================================================================	
		*/

		// $("#sidebar").perfectScrollbar();

		$('#sidebarCollapse').on('click', function () {
			$('#sidebar, #content').toggleClass('active');
			$('.collapse.open').toggleClass('open');
			$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		});

		/* 
		=================================================================
		Perfect Scroller JS
		=================================================================	
		*/

		// $(".notification-body, .message-body, .chat-list").perfectScrollbar();


		/* 
        =================================================================
        Tooltip JS
        =================================================================	
        */

		$('[data-toggle="tooltip"]').tooltip();


		/* 
		=================================================================
		Fullscreen JS
		=================================================================	
		*/

		$("#fullscreen-button").on("click", function toggleFullScreen() {
			if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
				if (document.documentElement.requestFullScreen) {
					document.documentElement.requestFullScreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullScreen) {
					document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
				} else if (document.documentElement.msRequestFullscreen) {
					document.documentElement.msRequestFullscreen();
				}
			} else {
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			}
		});

		/* 
		=================================================================
		Checkbox Toogle JS
		=================================================================	
		*/

		$(".parent").each(function (index) {
			var group = $(this).data("group");
			var parent = $(this);

			parent.change(function () { //"select all" change 
				$(group).prop('checked', parent.prop("checked"));
			});
			$(group).change(function () {
				parent.prop('checked', false);
				if ($(group + ':checked').length == $(group).length) {
					parent.prop('checked', true);
				}
			});
		});

		/* 
		=================================================================
		Mail Important JS
		=================================================================	
		*/

		if ($('.mail-important').length > 0) {
			$(".mail-important").click(function () {
				$(this).find('i.fa').toggleClass("fa-star");
				$(this).find('i.fa').toggleClass("fa-star-o");
			});
		};


		/* 
		=================================================================
		Tooltip Popover JS
		=================================================================	
		*/

		$('[data-toggle="popover"]').popover();


	});


	/*====  Window Load Function =====*/
	jQuery(window).on('load', function () {
		/* 
		=================================================================
		Page Loader JS
		=================================================================	
		*/
		setTimeout(function () {
			$('body').addClass('loaded');
		}, 500);
	});


}(jQuery));