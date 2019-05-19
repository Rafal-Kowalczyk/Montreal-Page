$(function() {

    // portfolio gallery
    $('.nav-item').click(function(e) {
        e.preventDefault();
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $(function() {

        var selectedClass = "";
        $('.nav-item').click(function() {
            //e.preventDefault();
            selectedClass = $(this).attr('data-rel');
            $('.portfolio-images li').fadeOut(500);
            $('.portfolio-images li.' + selectedClass).delay(300).fadeIn(300);
        })
    });


});

// sidebar
const sidebarBox = document.querySelector('#menu-content'),
    sidebarBtn = document.querySelector('#menu-hamburger'),
    pageWrapper = document.querySelector('#hero');

sidebarBtn.addEventListener('click', function (event) {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
});

sidebarBox.addEventListener('click', function (event) {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
});