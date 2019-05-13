// $(function() {



// });

// sidebar
const sidebarBox = document.querySelector('#menu-content'),
    sidebarBtn = document.querySelector('#menu-hamburger'),
    pageWrapper = document.querySelector('#hero');

sidebarBtn.addEventListener('click', function () {
    sidebarBtn.classList.toggle('active');
    sidebarBox.classList.toggle('active');
});

pageWrapper.addEventListener('click', function () {

    if (sidebarBox.classList.contains('active')) {
        sidebarBtn.classList.remove('active');
        sidebarBox.classList.remove('active');
    }
});

window.addEventListener('keydown', function (event) {

    if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
        sidebarBtn.classList.remove('active');
        sidebarBox.classList.remove('active');
    }
});