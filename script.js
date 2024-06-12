$(document).ready(function () {
    $("#sidebar").toggle();
    $(".menuButton").click(function () {
        //$("#sidebar").toggle();
        $("#sidebar").toggleClass("active");
    });
});