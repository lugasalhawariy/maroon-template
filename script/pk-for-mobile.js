$(function() {
    $(document).scroll(function() {
        $(".btn-to-structure-imm").toggleClass("d-flex", 
            $(this).scrollTop() > $(".section-PK").height() + 500 &&
            $(this).scrollTop() < $(".section-review").height() + 500
        );
    });
});