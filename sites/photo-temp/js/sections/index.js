
$(document).ready(function(){
  function checkOffset() {
    if($('.wordmark-div').offset().top + $('.wordmark-div').height() >= $('#section-02').offset().top - 10)
    $('.wordmark-div').addClass("unActive");
    if($(document).scrollTop() + window.innerHeight < $('#section-02').offset().top)
    // restore when you scroll up
    $('.wordmark-div').removeClass("unActive");
  }
  $(document).scroll(function() {
    checkOffset();
  });
  checkOffset();
});
