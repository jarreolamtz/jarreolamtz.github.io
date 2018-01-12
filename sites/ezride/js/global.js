$(document).ready(function(){
  var lineHeight = $("#controls .line").height() / 4;
  // SELECTORS:--------------------------------------
  //general -------------------------
  var h_textLink = ("header .sideB .text-link");
  var ctrl_lineBold = ("#controls .lineBold");
  //section-01 ---------------------
  var s1_fillBlue = ("#section-01 .fill-dots-blue");
  var s1_centerXY = ("#section-01 .center-y");
  var s1_fillBack = ("#section-01 .fill-dots-black");
  //section-02 ---------------------
  var s2_textBlock = ("#section-02 .textBlock");
  var s2_textSubHeading = ("#section-02 .blockTop .text-subHeading");
  var s2_textBody = ("#section-02 .blockTop .text-body");
  var s2_fillBlue = ("#section-02 .fill-dots-blue");
  var s2_fillTrans = ("#section-02 .fill-dots-trans");
  var s2_ctrl_lineBold = ("#section-02 .fill-dots-blue .controlsBlue .lineBold");
  var s2_mision = ("#section-02 .fill-dots-blue .slide-blue.mision");
  var s2_vision = ("#section-02 .fill-dots-blue .slide-blue.vision");
  var s2_array = [s2_textBlock, s2_textSubHeading, s2_textBody ];
  //section-03 -----------------------
  var s3_video = (".video-area");
  var s3_fillTrans = ("#section-03 .fill-dots-trans");
  var s3_bulletFirst = ("#section-03 .bullet.first");
  var s3_bulletLast = ("#section-03 .bullet.last");
  var s3_array = [ s3_bulletFirst, s3_bulletLast ];



  $('#fullpage').fullpage({
    anchors:['section01', 'section02', 'section03', 'section04'],
    css3: true,
    scrollingSpeed: 1800,
    easingcss3: 'cubic-bezier(0.480, 0.945, 0.500, 1.000)',
    fixedElements: '#controls',
    onLeave: function(index, nextIndex, direction){
  		var leavingSection = $(this);
      //LEAVING SECTION - DOWN ------------------
  		if(index == 1 && direction =='down'){
        // CONTROLS LINE BOLD Y
        var topSelect = (lineHeight * 1);
        TweenMax.to(ctrl_lineBold, 1.6, {
          y: topSelect,
          ease:Power1. easeInOut
        });
        // HEADER TEXT COLOR
        TweenMax.to(h_textLink,1,{
          color: "#35393E",
          delay: 1
        });
        // FILL DOT BLUE: section-01
        TweenMax.to(s1_fillBlue, 3.2, {
          position:"absolute",
          x:"-100%",
          ease:Power1. easeInOut
        });
        // TEXT CENTER XY: section-01
        TweenMax.fromTo(s1_centerXY, 1.6, {y: "-50%",opacity:1}, {y: "-20%",opacity:0});
        // FILL DOTS BLACK: section-01
        TweenMax.to(s1_fillBack, 1.6, {
          height: 0,
          ease:Power1. easeInOut,
        });
        // TEXT BLOCK: section-02
        TweenMax.staggerFromTo(s2_array, 1.2,{y: "20%", opacity: 0}, {y: "0%", opacity: 1, ease:Power1. easeInOut, delay: 1.2}, .4);
        // FILL DOTS BLUE: section-02
        TweenMax.fromTo(s2_fillBlue, 1.6,
          {x:"50%", opacity:0}
          ,{x:"0%", opacity:1, ease:Power1. easeInOut, delay: 1}
        );
        // FILL DOTS TRANS: section-02
        TweenMax.to(s2_fillTrans, 1.6, {
          height: 300,
          ease:Power1. easeInOut,
          delay: 1
        });
        // VIDEO: section-03
        if(window.location.href.indexOf("#section03") > -1) {

        } else {
          TweenMax.fromTo(s3_video, 1.6, {y: "0px"}, {y: "-140px", delay: 2});
        }
  		}
      if(index == 2 && direction =='down'){
        // CONTROLS LINE BOLD Y
        var topSelect = (lineHeight * 2);
        // OBJECTS ONE
        TweenMax.to(ctrl_lineBold, 1.6, {
          y: topSelect,
          ease:Power1. easeInOut
        });
        // OJECTS TWO
        TweenMax.staggerFromTo(s2_array, 1.2,{y: "0%", opacity: 1}, {y: "20%", opacity: 0, ease:Power1. easeInOut}, .4);
        // VIDEO
        TweenMax.to(s3_video, 1.2, {
          y: "0px",
          ease:Power1. easeInOut
        });
        // FILL DOTS TRANS: Section-03
        var halfVh = ($(window).height()/2) - 60;
        TweenMax.fromTo(s3_fillTrans, 1.6, {
          height: "0px"
          }, {
          height: halfVh,
          ease:Power1. easeInOut,
          delay: 1.6
        });
        // BULLETS: s3
        TweenMax.staggerFromTo(s3_array, 1.6,{y:"20%", opacity:0 },{y:"0%", opacity:1, ease:Power1. easeInOut,delay: 1.6 }, .4);
  		}
      if(index == 3 && direction =='down'){
        var topSelect = (lineHeight * 3);
        TweenMax.to(ctrl_lineBold, 1.6, {
          y: topSelect,
          ease:Power1. easeInOut
        });
  		}
      //LEAVING SECTION - UP --------------------
  		else if(index == 2 && direction == 'up'){
        TweenMax.to(h_textLink,1,{
          color: "#FFFFFF"
        });
        TweenMax.to(ctrl_lineBold, 1.6, {
          y: 0,
          ease:Power1. easeInOut
        });
        // FILL DOT BLUE ANIMATE
        TweenMax.fromTo(s1_centerXY, 1.6, {y: "-20%",opacity:0}, {y: "-50%",opacity:1, delay: 1.4});
        TweenMax.fromTo(s1_fillBlue, 1.2, {x: "-50%", opacity:0}, {x: "0%", opacity:1});
        TweenMax.to(s2_fillBlue, 1.2, {
          x: "50%",
          opacity: 0,
          ease:Power1. easeInOut
        });
        TweenMax.staggerFromTo(s2_array, 1,{y: "0%", opacity: 1}, {y: "20%", opacity: 0, ease:Power1. easeInOut}, .2);
        // FILL DOTS BLACK
        TweenMax.to(s1_fillBack, 1.2, {
          height: 140,
          ease:Power1. easeInOut
        });
  		}
      else if(index == 3 && direction == 'up'){
        var topSelect = (lineHeight * 1);
        TweenMax.to(ctrl_lineBold, 1.6, {
          y: topSelect,
          ease:Power1. easeInOut
        });
        TweenMax.staggerFromTo(s2_array, 1.2,{y: "20%", opacity: 0}, {y: "0%", opacity: 1, ease:Power1. easeInOut, delay: .8}, .4);
        TweenMax.to(s3_video, 1.2, {
          y: "-140px",
          ease:Power1. easeInOut
        });
        // Fill Blue s2
        TweenMax.fromTo(s2_fillBlue, 1.2,
          {x:"50%", opacity:0}
          ,{x:"0%", opacity:1, ease:Power1. easeInOut}
        );
        // VIDEO
        if( $(s3_video).hasClass("active") == true ) {
          $(s3_video).removeClass("active");
          TweenMax.to(s3_video, 1.2, {
            width: "33.33vw",
            ease:Power1. easeInOut
          });
          TweenMax.to("#controls", 1, {
            opacity:1,
            ease:Power1. easeInOut
          });
          TweenMax.to("header", 1, {
            opacity:1,
            ease:Power1. easeInOut
          });
        } else {}
        // FILL DOTS TRANS: Section 3
        TweenMax.to(s3_fillTrans, 1.3, {
          height: "0px",
          ease:Power1. easeInOut
        });
        // BULLETS: s3
        TweenMax.staggerFromTo(s3_array, 1,{y:"0%", opacity:1 },{y:"20%", opacity:0, ease:Power1. easeInOut }, .4);
  		}
      else if(index == 4 && direction == 'up'){
        var topSelect = (lineHeight * 2);
        TweenMax.to(ctrl_lineBold, 1.6, {
          y: topSelect,
          ease:Power1. easeInOut
        });
  		}
  	}
  });
  // CONTROLS: Generals ---------------------
  // Cntrl - Up
  $("#controls .circle.up").click(function(){
    $.fn.fullpage.moveSectionUp();
  });
  // Cntrl - Down
  $("#controls .circle.down").click(function(){
    $.fn.fullpage.moveSectionDown();
  });
  // ON REFRESH -----------------------------
  setTimeout(function(){
    // IF IT'S SECTION-01 --
    if ($("#fullpage #section-01").hasClass("active") === true ) {
      // FILL DOT BLUE: section-02
      TweenMax.fromTo(s2_fillBlue, 1.2,
        {x: "80%",opacity:0}
        ,{x: "0%",opacity:1, delay: 1.2}
      );
      // CENTER XY
      TweenMax.from(s1_centerXY, 1.6, {
        position:"absolute",
        y: "+=40px",
        opacity:0,
        delay: 1.6
      });
      //FILL BLUE
      TweenMax.from(s1_fillBlue, 1, {
        position:"absolute",
        x:"-50%",
        delay: 1.2
      });
      //FILL BLACK
      TweenMax.from(s1_fillBack, 1, {
        position:"absolute",
        x:"-50%",
        delay: .8,
        className:"+=transition-remove"
      });
    }
    // IF IT'S SECTION-02 --
    else if( $("#fullpage #section-02").hasClass("active") === true ){
      // FILL DOT BLUE: section-01
      // TweenMax.to(s1_fillBlue, 3.2, {
      //   position:"absolute",
      //   x:"-50%",
      //   ease:Power1. easeInOut,
      // });
      // BACK BLUE s2
      // TweenMax.fromTo(s2_fillBlue, 1.6,
      //   {x:"50%",
      //     opacity:0},
      //   {x:"0%",
      //     opacity:1,
      //     ease:Power1. easeInOut,
      //     delay: 1
      // });
    }
    // IF IT'S SECTION-03 --
    else if ($("#fullpage #section-03").hasClass("active") === true ){
      // ARRAY s2
      TweenMax.to(s2_array, .2,{y: "20%", opacity: 0});
      // VIDEO
      TweenMax.to(s3_video, 1.2, {
        y: "0px",
        ease:Power1. easeInOut
      });
      var halfVh = ($(window).height()/2) - 60;
      // Fill trans s3
      TweenMax.fromTo(s3_fillTrans, 1.2,
      {height: "0px"},
      {height: halfVh,
        ease:Power1. easeInOut,
        delay: .8
      });
      // BULLETS: s3
      TweenMax.staggerFromTo(s3_array, 1.6,{y:"20%", opacity:0 },{y:"0%", opacity:1, ease:Power1. easeInOut,delay: 1.4 }, .4);
    }
  }, 300);
  //ANIMATION START ------------------------
  TweenMax.to(s2_fillTrans, 1.6, {
    height: 300,
    ease:Power1. easeInOut,
    delay: 1
  });

  // BLUE CONTROLS: Section-02 ---------------------
  $("#section-02 .controlsBlue .circle").click(function(){
    if($(this).hasClass("left") === true ){
      TweenMax.to(s2_mision, 1, {
        opacity: 1,
        left: "0%",
        delay: .2
      });
      TweenMax.to(s2_vision, 1, {
        opacity: 0,
        left: "100%"
      });
      TweenMax.to(s2_ctrl_lineBold, 1, {
        left: "0%",
        ease:Power1. easeInOut
      });
    }
    else {
      TweenMax.to(s2_mision, 1, {
        opacity: 0,
        left: "-100%"
      });
      TweenMax.to(s2_vision, 1, {
        opacity: 1,
        left: "0%",
        delay: .2
      });
      TweenMax.to(s2_ctrl_lineBold, 1, {
        left: "50%",
        ease:Power1. easeInOut
      });
    }
  });
  // VIDEO CLICK
  $(s3_video).click(function(){
    if( $(s3_video).hasClass("active") == true ) {
      $(s3_video).removeClass("active");
      TweenMax.to(s3_video, 1.2, {
        width: "33.33vw",
        ease:Power1. easeInOut
      });
      TweenMax.to("#controls", 1, {
        opacity:1,
        ease:Power1. easeInOut
      });
      TweenMax.to("header", 1, {
        opacity:1,
        ease:Power1. easeInOut
      });
    } else {
      $.fn.fullpage.moveTo('section03', 3);
      $(s3_video).addClass("active");
      TweenMax.to(s3_video, 1.2, {
        width: "100vw",
        ease:Power1. easeInOut
      });
      TweenMax.to("#controls", 1, {
        opacity:0,
        ease:Power1. easeInOut
      });
      TweenMax.to("header", 1, {
        opacity:0,
        ease:Power1. easeInOut
      });
    }
  });
});
