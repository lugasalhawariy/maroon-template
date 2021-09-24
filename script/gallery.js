$(function() {
    $(".thumb-item").click(function(e) {
        document.getElementById("img-preview-active").src = e.target.src;
        document.getElementById("img-preview-active").classList.add('fade');
        setTimeout(function(){
            document.getElementById("img-preview-active").classList.remove('fade');
        }, 300);

        // hilangkan elemen thumb yang memiliki class Active
        document.querySelectorAll(".thumb-item").forEach(function(thumb) {
            if(thumb.classList.contains("active")){
                thumb.classList.remove("active");
            }
        });

        e.target.classList.add('active');
    });
});