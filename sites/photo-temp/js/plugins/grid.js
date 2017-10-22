//Center your grid on screen
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top",'0');

    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
    return this;
};

$("body").prepend("<a href='javascript:void(0)' id='toggleGrid' style='position:fixed; border: 1px solid lightgray; background:white; color: #333; border-radius: 0 0 0 6px; z-index:999999; padding: 10px; width: 130px; top:0; right:0; font-size:11px; text-align:center; text-transform:uppercase;'>Toggle Grid</a>");
$( "body" ).append("<div id='gridContainer'></div>");
$("body").append("<div id='baselineContainer'></div>");


$("#toggleGrid").click(function(){
    $(this).toggleClass("on");
    gridMaker();
    if($("#toggleGrid").hasClass("on")){
        $(this).text("Hide Grid");
        $("#gridContainer").show();
        $("#baselineContainer").show();
    } else {
        $(this).text("Show Grid");
        $("#gridContainer").hide();
        $("#baselineContainer").hide();
    }

    var resizeId;

    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 300);
    });

});

$(document).keydown(function(e){
    if( e.which === 76 && e.ctrlKey){
        $("#toggleGrid").toggleClass("on");
        gridMaker();
        if($("#toggleGrid").hasClass("on")){
            $("#toggleGrid").text("Hide Grid");
            $("#gridContainer").show();
            $("#baselineContainer").show();
        } else {
            $("#toggleGrid").text("Show Grid");
            $("#gridContainer").hide();
            $("#baselineContainer").hide();
        }

        var resizeId;

        $(window).resize(function() {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 300);
        });
    }
});

function gridMaker() {
    $("#baselineContainer").empty();
    $("#gridContainer").empty();

    var column = "<div class='columnIn'></div>";
    if($(window).width() < 767 ){
        var columnQuant = 6;
        for(i = 0; i < columnQuant; i++){
            $(column).clone().appendTo("#gridContainer");
        }
    } else {
        var columnQuant = 12;
        for(i = 0; i < columnQuant; i++){
            $(column).clone().appendTo("#gridContainer");
        }
    }


    $(".columnIn").height(0);
    var documentHeight = ($(document).height() + "px");
    //Baseline Properties--------------------------
    var baselineFill = "rgba(0,144,255,0.16)";
    var baselineSize = 20;
    var baselineSizeDone = baselineSize - 1;
    var baselineQuant = (Math.round($( document ).height() / baselineSize));
    var baseline = "<div class='baselineIn'></div>";
    var baselinePrint = baseline;

    //Grid Properties----------------------------
    //Grid Sizes
    var gutter =  15;
    var xs = ($(window).width());
    var sm = 750;
    var md = 970;
    var lg =  1170;
    var fluid = ($(window).width());

    // if($(window).width() < 767 ){
    //     var gridSize = xs;
    //     //Select de type of Grid
    //     var columnW = (gridSize / 6 - (gutter + gutter) + "px" );
    //
    // } else if ($(window).width() >= 768 && $(window).width() < 991 ){
    //     var gridSize = sm;
    //     //Select de type of Grid
    //     var columnW = (gridSize / 12 - (gutter + gutter) + "px" ) ;
    //     $(".columnIn:nth-child(n+7)").show();
    // } else if ($(window).width() >= 992 && $(window).width() < 1199 ){
    //     var gridSize = md;
    //     //Select de type of Grid
    //     var columnW = (gridSize / 12 - (gutter + gutter) + "px" ) ;
    //     $(".columnIn:nth-child(n+7)").show();
    // } else if ($(window).width() >= 1200){
    //     var gridSize = lg;
    //     //Select de type of Grid
    //     var columnW = (gridSize / 12 - (gutter + gutter) + "px" ) ;
    //     $(".columnIn:nth-child(n+7)").show();
    // }

    var gridSize = fluid;
    //Select de type of Grid
    var columnW = (gridSize / 12 - (gutter + gutter) + "px" ) ;
    $(".columnIn:nth-child(n+7)").show();

    //Select your Column background-color
    var columnFill = "rgba(0,144,255,0.16)";


    $('.columnIn').css({'margin-left':  gutter + "px",'margin-right':  gutter + "px", 'height':documentHeight,'display':'inline-block','width': columnW,'background': columnFill});
    $('#baselineContainer').css({'width': gridSize + "px",'position':'fixed','top':'0'});
    $('#gridContainer').css({'width': gridSize + "px",'position':'fixed','top':'0'});


    //Apend Baselines
    for(i = 0; i < baselineQuant; i++){
        $(baseline).clone().appendTo("#baselineContainer");
    }
    $('.baselineIn').css({'height':'1px','margin-bottom': baselineSizeDone + "px",'background' : baselineFill,'width':'100%','top':'0'});
    //Center Grid container --------------------------------
    $("#gridContainer, #baselineContainer").center();
}




function doneResizing(){
    $("#gridContainer").height(0);
    gridMaker();
}
