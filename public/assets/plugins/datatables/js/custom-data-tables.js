/*------------------------------------------------------------------
[Dashboard Javascript]

Project	     : Seipkon - Responsive Admin Template
Author       : Hassan Rasu
Version      : 1.0
Template By  : Themescare
Primary use  : Used only for the main dashboard (index.html)

-------------------------------------------------------------------*/


$(function () {

  'use strict';
    
    
     $('#product-order').DataTable({
        'paging'      : true,
        'pagingType'  :"numbers",
        'lengthChange': true,
        'searching'   : true,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : true    
    });	
    
    
    $('#employee-clients-list, #employee-staff-list, #employee-list, #employee-private-list').DataTable({
        'paging'      : true,
        'pagingType'  :"numbers",
        'lengthChange': true,
        'searching'   : true,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : true    
    });

  


}); // End of use strict