$(function () {

    // portfolio gallery
    $('.nav-item').click(function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $(function () {

        var selectedClass = "";

        $('.nav-item').click(function () {
            selectedClass = $(this).attr('data-rel');
            $('.portfolio-images li').fadeOut(250);
            $('.portfolio-images li.' + selectedClass).delay(500).fadeIn(500);
        });
    });

    // scrollTop footer button
    var footerButton = $('.footer-button');

    $(footerButton).on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});

// sidebar
const sidebarBox = document.querySelector('#menu-content'),
    sidebarBtn = document.querySelector('#menu-hamburger');

sidebarBtn.addEventListener('click', function (event) {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
});

sidebarBox.addEventListener('click', function (event) {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
});


