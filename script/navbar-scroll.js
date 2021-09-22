$(function() {
    $(document).scroll(function() {
        var $header = $(".navbar-fixed-top");
        var $page = $(".page-content");
        $header.toggleClass("scrolled", $(this).scrollTop() > $header.height() + 330 || $(this).scrollTop() > $page.height() + 200);
    });
});