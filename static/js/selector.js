$(function() {
  $('#picSelector').change(function(){
    $('.colors').hide();
    $('#' + $(this).val()).show();
  });
});