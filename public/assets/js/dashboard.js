/*=========================================================================================
[Dashboard Javascript]

Project	     : Seipkon - Responsive Admin Template
Author       : Hassan Rasu
Author URL   : https://themeforest.net/user/themescare
Version      : 1.0
Primary use  : Seipkon - Responsive Admin Template

Only Use For Dashboard (index.html) Page.

==========================================================================================*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		/* 
        =================================================================
        Clock And Date JS
        =================================================================	
        */

		var clock = new Vue({
			el: '#clock',
			data: {
				time: '',
				date: ''
			}
		});

		var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
		var timerID = setInterval(updateTime, 1000);
		updateTime();

		function updateTime() {
			var cd = new Date();
			clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
			clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
		};

		function zeroPadding(num, digit) {
			var zero = '';
			for (var i = 0; i < digit; i++) {
				zero += '0';
			}
			return (zero + num).slice(-digit);
		}


		/* 
        =================================================================
        Counter JS
        =================================================================	
        */

		$('.count').each(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 3000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});


		/* 
        =================================================================
        Sparkbar JS
        =================================================================	
        */

		$('.sparkbar').each(function () {
			var $this = $(this);
			$this.sparkline('html', {
				type: 'bar',
				height: $this.data('height') ? $this.data('height') : '30',
				barColor: '#fff',
			});
		});

		/* 
        =================================================================
        Sales Chart JS
        =================================================================	
        */

		Morris.Area({
			element: 'sales_chart',
			data: [{
					period: '2010',
					iphone: 50,
					ipad: 80,
					itouch: 20
				}, {
					period: '2011',
					iphone: 130,
					ipad: 100,
					itouch: 80
				}, {
					period: '2012',
					iphone: 80,
					ipad: 60,
					itouch: 70
				}, {
					period: '2013',
					iphone: 70,
					ipad: 200,
					itouch: 140
				}, {
					period: '2014',
					iphone: 180,
					ipad: 150,
					itouch: 140
				}, {
					period: '2015',
					iphone: 105,
					ipad: 100,
					itouch: 80
				},
				{
					period: '2016',
					iphone: 250,
					ipad: 150,
					itouch: 200
				}
			],
			xkey: 'period',
			ykeys: ['iphone', 'ipad', 'itouch'],
			labels: ['iPhone', 'iPad', 'iPod Touch'],
			pointSize: 3,
			fillOpacity: 0,
			pointStrokeColors: ['#1cc100', '#fdc006', '#1db4bd'],
			behaveLikeLine: true,
			gridLineColor: '#e0e0e0',
			lineWidth: 1,
			hideHover: 'auto',
			lineColors: ['#1cc100', '#fdc006', '#1db4bd'],
			resize: true

		});


		/* 
        =================================================================
        Morris Doughnut Chart JS
        =================================================================	
        */


		var area = new Morris.Donut({
			element: 'donut-example',
			data: [{
					label: "Download Sales",
					value: 12
				},
				{
					label: "In-Store Sales",
					value: 30
				},
				{
					label: "Mail-Order Sales",
					value: 20
				}
			],
			resize: true,
			colors: ["#f25454", "#0FC5BB", "#FAC26E"]

		});


		/* 
        =================================================================
        Invoice Datatable Table JS
        =================================================================	
        */

		$('#invoice-list').DataTable({
			'paging': true,
			'pagingType': "numbers",
			'lengthChange': false,
			'searching': false,
			'ordering': true,
			'info': true,
			'autoWidth': true
		});

        /* 
        =================================================================
        Note Date JS
        =================================================================	
        */

		$('.picker_1').daterangepicker({
			singleDatePicker: true,
		});


	});


}(jQuery));