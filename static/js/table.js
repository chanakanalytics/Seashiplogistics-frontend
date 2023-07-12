$(document).ready(function() {
    var shipmentTable = $('#shipmentTable').DataTable( {
        lengthChange: false,
        buttons: [{
            extend: 'collection',
            text: '<i class="fas fa-file-export"></i>',
            buttons: [
                'excel', 'pdf', 'print', 'copy'
            ]
        }]
    } );
    shipmentTable.buttons().container()
        .appendTo( '#shipmentTable_wrapper .col-md-6:eq(0)');
});
$(document).ready(function() {
    var masterTable = $('#masterTable').DataTable( {
        lengthChange: false,
        buttons: [{
            extend: 'collection',
            text: '<i class="fas fa-file-export"></i>',
            buttons: [
                'excel', 'pdf', 'print', 'copy'
            ]
        }]
    } );
    masterTable.buttons().container()
        .appendTo( '#masterTable_wrapper .col-md-6:eq(0)');
} );