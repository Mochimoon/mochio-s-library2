$(function(){
  $('.link-hover').hover(
    function() {
      $(this).find('.purchase').addClass('text-active');

    },
    function() {
      $(this).find('.purchase').removeClass('text-active');

    }
  );


});
