$(document).ready(function () {
    var shipmentTable = $('#shipmentTable').DataTable({
        lengthChange: false,
        buttons: [
            {
                extend: 'collection',
                text: '<i class="fas fa-file-export"></i>',
                buttons: [
                    'excel', 'pdf', 'print', 'copy'
                ]
            }
        ]
    });
    shipmentTable.buttons().container()
        .appendTo('#shipmentTable_wrapper .col-md-6:eq(0)');
});
$(document).ready(function () {
    var masterTable = $('#masterTable').DataTable({
        lengthChange: false,
        buttons: [
            {
                extend: 'collection',
                text: '<i class="fas fa-file-export"></i>',
                buttons: [
                    'excel', 'pdf', 'print', 'copy'
                ]
            },
            {
                text: '<i class="fas fa-plus-square"></i>',
                className: "ms-2 add-button",
            },
            {
                text: '<i class="fas fa-trash-alt"></i>',
                className: "ms-2 edit-button",
            }
        ]
    });
    masterTable.buttons().container()
        .appendTo('#masterTable_wrapper .col-md-6:eq(0)');
    masterTable.buttons(".add-button").nodes().attr({"data-bs-toggle": "modal", "data-bs-target":"#addmodal"})
    masterTable.buttons(".edit-button").nodes().attr({"data-bs-toggle": "modal", "data-bs-target":"#editmodal"})
});