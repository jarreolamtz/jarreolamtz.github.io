<!DOCTYPE html>
<html>
  <head>
    <!-- Iso -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Title is the first phrase you see as a search result. -->
    <title>Area 83</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>

    <!-- Description of your website. Max 160 Characters-->
    <meta name="description" content="Page description. No longer than 155 characters."/>

    <!-- Most important word to use on specific page. / No more than 10 keyword phrases -->
    <meta name="keywords" content="words">

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="favicons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="favicons/manifest.json">
    <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#2b2b2b">
    <meta name="theme-color" content="#ffffff">

    <!-- Allows robots to crawl your website. https://yoast.com/robots-meta-tags/ -->
    <meta name="robots" content="selection">

    <!-- Schema.org markup for Google+ and Pinterest  http://schema.org/docs/gs.html-->
    <meta itemprop="name" content="The Name or Title Here">
    <meta itemprop="description" content="This is the page description">
    <meta itemprop="image" content="http://www.example.com/image.jpg">

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="Company Name">
    <meta name="twitter:site" content="@publisher_handle">
    <meta name="twitter:title" content="Page Title">
    <meta name="twitter:description" content="Page description less than 200 characters">
    <meta name="twitter:creator" content="@author_handle">
    <meta name="twitter:image" content="http://www.example.com/image.jpg">


    <!-- Open Graph data for sharing in Facebook -->
    <meta property="og:title" content="Company Name"/>
    <meta property="og:type" content="Company Name"/>
    <meta property="og:url" content="Company URL"/>
    <meta property="og:image" content="http://example.com/image.jpg"/>
    <meta property="og:description" content="Description Here"/>
    <meta property="og:site_name" content="Company Name site"/>
    <meta property="og:locale:alternate" content="es_MX"/>
    <meta property="og:locale:alternate" content="en_US"/>


    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/input/plugins/normalize.css">
    <!-- <link rel="stylesheet" href="css/input/plugins/cursor.css"> -->
    <link rel="stylesheet" href="css/input/fonts/font-awesome.css">
    <link rel="stylesheet" href="css/input/fonts/russo/font-russo.css">
    <link rel="stylesheet" href="css/output/global.css">
    <link rel="stylesheet" href="css/output/sections/index.css">

  </head>

  <body>
      <!-- LOADER -->
      <div class="loader">
          <img class="img center-xy" src="img/icons/a83.gif">
      </div>
      <!-- CURSOR -->
      <div class="cursor"></div>
      <div class="cursor-follower"></div>

      <!-- CONTENT -->
      <div class="site">
          <div class="site-content">
              <!-- Header -->
              <header>
              </header>
              <!-- Section - 01 -->
              <section id="section-01">
                <div class="videoDiv">
                  <img src="img/icons/icon-close-video.svg" alt="Close video" id="pauseButton" class="closeVideo transition-600">
                  <iframe id="video" src="https://player.vimeo.com/video/181581011?api=1&player_id=player1" id="video" class="center-xy" frameborder="0" autoplay webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
                <img src="img/icons/logo-color.svg" class="logo center-xy" alt="Area 83">
                <div class="elements">
                  <img src="img/icons/icon-play.svg" alt="Play video" id="playButton" class="transition-600">
                  <h1 class="text-heading color-white">Demo Reel </h1>
                  <p class="text-minHeading color-white">Comming soon / february 2018</p>
                </div>
                <div class="vertLines"></div>
                <div class="glitch"></div>
                <canvas id="canvas" width="300" height="300"></canvas>
              </section>
          </div>
      </div>


      <!-- Js -->
      <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <!--CDN link for  TweenMax-->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/froogaloop.js"></script>
      <script src="https://github.com/vimeo/player-api/blob/master/javascript/froogaloop.js"></script>
      <script src="https://a.vimeocdn.com/js/froogaloop2.min.js"></script>
      <!-- Mouse -->
      <!-- <script src="js/plugins/assets.js"></script>
      <script src="js/plugins/cursor.js"></script> -->
      <!-- Regular -->
      <script src="js/global.js"></script>
      <script src="js/framework/bootstrap.min.js"></script>
      <script src="js/sections/index.js"></script>
      <!-- <script src="js/plugins/grid.js"></script> -->

      <!-- Loader -->
      <script>
          $(window).load(function () {
            setTimeout(function(){
              $(".loader").fadeOut(1200);
            }, 3200);
          });
          home();
          cursorfollow()
      </script>
  </body>
</html>
