
// ACTUAL YEAR
const date = document.getElementById('date');
date.innerHTML = new Date().getUTCFullYear();

// Sidebar

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar')
})


// FIXED NAVBAR
const navbar = document.querySelector('.header__top');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
        navbar.classList.add('fixed-color');
    } else {
        navbar.classList.remove('fixed-nav');
    };

    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    };
});

// close links
const linksContainer = document.querySelector('.links__container');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', function () {
    const containerHeight = linksContainer.getBoundingClientRect().height; ///вычилясем высоту линков
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
})


// smooth-scroll
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault;
        sidebar.classList.remove('show-sidebar');
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0, top: position,
        });
        linksContainer.style.heigth = 0;
    });
});