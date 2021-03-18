$(function() {
    $(document).scroll(function() {
        var $header = $(".navbar-fixed-top");
        $header.toggleClass("scrolled", $(this).scrollTop() > $header.height() + 330);
    });
});