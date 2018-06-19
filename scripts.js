$(document).ready(function () {

    $("#LinkList2 li a").addClass("fixed-social");
    $("#HTML5 h2.title").prepend("<i class='fa fa-book'/>");
    $("#HTML7 h2.title").prepend("<i class='fa fa-instagram'/>");
    $("#PopularPosts1 ul").prepend("<li class='bluebox'><div class='container'><div id='title'><i class='fa fa-star'/><h3>Popular<br/>posts</h3></div></div></li>");

    var stickyHeaderTop = 500;
    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderTop) {
            $("#LinkList2").css("display", "block")
        } else {
            $("#LinkList2").css("display", "none")
        }
    })

    var stickyHeaderTop = 320;
    $(window).scroll(function () {
        if ($(window).scrollTop() > stickyHeaderTop) {
            $("#menu").addClass("fixed")
        } else {
            $("#menu").removeClass("fixed")
        }
    })

    $("#menu .trigger").click(function () {
        $("#menu .trigger").css("display", "none");
        $("#menu .close").css("display", "block");
        $("#menu .full-menu").removeClass("hide").addClass("show")
    });
    $("#menu .close").click(function () {
        $("#menu .trigger").css("display", "block");
        $("#menu .close").css("display", "none");
        $("#menu .full-menu").removeClass("show").addClass("hide")
    });

    $("#menu-mobile .trigger").click(function () {
        $("#menu-mobile .dropdown").addClass("active")
    });
    $("#menu-mobile .close").click(function () {
        $("#menu-mobile .dropdown").removeClass("active");
        $(".nav-menu").removeClass("move-out")
    })
    
    $("#comments .avatar-image-container").find("img").each(function(n,image){var image=$(image);image.attr({src:image.attr('src').replace(/s\B\d{2,4}/,'s'+60)});image.attr("width",60);image.attr("height",60)})

    $("#Stats1 .widget-content").append("<span>visites sur le blog !</span>");
});
