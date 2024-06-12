$(document).ready(function () {
    $(".menuButton").click(function () {
        $("#sidebar").toggleClass("active");
        $(".menuButton").toggleClass("active");
    });
});