function checkOffset() {
  if($('.wordmark-div').offset().top + $('.wordmark-div').height() >= $('#section-01').height() - 10)
      $('.wordmark-div').addClass("unActive");
  if($(document).scrollTop() + window.innerHeight < $('#section-01').height())
      // restore when you scroll up
      $('.wordmark-div').removeClass("unActive");
}
$(document).scroll(function() {
    checkOffset();
});
checkOffset();
