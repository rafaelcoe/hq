$('#myModal').on('hidden.bs.modal', function () {
    $('.collapse').collapse('hide');
});
$('#myModal').on('shown.bs.modal', function () {
    $('#collapseOne').collapse('show');
});



$('#accordion').find('.panel-default:has(".in")').addClass('panel-primary');

$('#accordion').on('show.bs.collapse', function (e) {
    $(e.target).closest('.panel-default').addClass(' panel-primary');
    $('.collapse').collapse('hide');
}).on('hide.bs.collapse', function (e) {
    $(e.target).closest('.panel-default').removeClass(' panel-primary');
})