$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        if ($(this).scrollTop() > $nav.height()) {
            $nav.addClass("scrolled");
            $nav.removeClass("navbar-dark");
            $nav.addClass("navbar-light");

        } else {
            $nav.removeClass("scrolled");
            $nav.addClass("navbar-dark");
            $nav.removeClass("navbar-light");
        }
    });
});

document.addEventListener("click", function(e) {
    if(e.target.classList.contains("foto-galeri")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('galeri-modal'));
        myModal.show();
    }
})