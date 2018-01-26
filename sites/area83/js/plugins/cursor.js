function home() {
  follower = $(".cursor-follower"),
  cursor = $(".cursor"),
  cursorfollow(),
  setTimeout(function() {
    split_text("p")
  }, 200),
  setTimeout(function() {
    $(".hide").removeClass("hide")
  }, 500),
  $(document).on("mousemove", function(e) {
    mouseX = e.pageX,
    mouseY = e.pageY,
    0 == moved && (moved = !0, follower.removeClass("hide"), cursor.removeClass("hide"))
  })
}

function cursorfollow() {
  var e = 0,
    s = 0;
  setInterval(function() {
    e += (mouseX - e) / 9,
    s += (mouseY - s) / 9,
    follower.css({
      left: e - 12,
      top: s - 12
    }),
    cursor.css({left: mouseX, top: mouseY})
  }, 16);
  $(".cur, a").on("mouseenter", function() {
    follower.addClass("active"),
    cursor.addClass("active"),
    $(".hover").addClass("hovered"),
    $(this).removeClass("hovered")
  }),
  $(".cur, a").on("mouseleave", function() {
    follower.removeClass("active"),
    cursor.removeClass("active"),
    $(".hover").removeClass("hovered")
  })
  $(".fill-dots-blue").on("mouseenter", function() {
    cursor.addClass("circleBlue"),
    $(".hover").addClass("hovered"),
    $(this).removeClass("hovered")
  }),
  $(".fill-dots-blue").on("mouseleave", function() {
    cursor.removeClass("circleBlue"),
    $(".hover").removeClass("hovered")
  })
}
