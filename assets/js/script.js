// $(function() {



// });

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