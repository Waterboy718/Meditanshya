var items = document.querySelectorAll('.item');
var active_tab = document.querySelector('.active-tab');
items.forEach((element) => {
    element.addEventListener('click', (e) => {
        if (!element.classList.contains('button')) {
            items.forEach(item => {
                item.classList.remove('active-tab');
            });

            // Add 'active-tab' class to the clicked item
            element.classList.add('active-tab');
        }
    });
});

var logoSpans = document.querySelectorAll('.logo span');
var queue = [0, 4, 8, 10, 1, 2, 3, 5, 6, 7, 9];
var delays = [200, 200, 200, 200, 100, 100, 100, 100, 100, 100, 100];

// Hide all the logo spans initially and set their opacity to 0
logoSpans.forEach(span => {
    span.style.display = 'inline';
    span.style.opacity = 0;
});

// Loop through the queue and apply the animation effect with delays
function animateLogo(index) {
    if (index >= queue.length) {
        return;
    }

    setTimeout(() => {
        logoSpans[queue[index]].style.opacity = 1;
        animateLogo(index + 1);
    }, delays[index]); // Use the corresponding delay from the delays array
}
var home = document.getElementById('home');
home.style.color = '#aca';
var shop = document.getElementById('shop');
var aboutus = document.getElementById('aboutus'); 
var services = document.getElementById('services');
console.log(home, shop);
var currentActiveTab = 'Home';
var currentActiveElement = home;
console.log(home);
let elementsList = [home, shop, aboutus, services];

home.onclick = () => {
    shop.style.color = 'white';
    aboutus.style.color = 'white';
    services.style.color = 'white';
    home.style.color = '#aca';
}

shop.onclick = () => {
    
    aboutus.style.color = 'white';
    services.style.color = 'white';
    home.style.color = 'white';
    shop.style.color = '#aca';
}

aboutus.onclick = () => {
    shop.style.color = 'white';
    
    services.style.color = 'white';
    home.style.color = 'white';
    aboutus.style.color = '#aca';
}

services.onclick = () => {
    shop.style.color = 'white';
    aboutus.style.color = 'white';
    home.style.color = 'white';
    services.style.color = '#aca';
}



// WIDTH
    // HOME -> 55.7188px
    // SHOP -> 48.7031px
    // SERV -> 78.3125px
    // About Us -> 83.7969px
    // LEFT POSITION
    // home - 71.7px
    // shop - 152px
    // serv - 261px
    // as - 372px

// Call the animation function when the page loads

window.addEventListener('load', () => {
    animateLogo(0);
});

var userIcon = document.getElementById('userIcon');
var cartIcon = document.getElementById('cartIcon');
var settingsIcon = document.getElementById('settingsIcon');
var menu_account = document.querySelector('.menu-account');
let menuTimeout, menuaccount_open;
menuaccount_open = false;

userIcon.addEventListener('mouseover', () => {
    clearTimeout(menuTimeout);
    menu_account.style.display = 'block';
    userIcon.style.color = '#d1cfcf'; // Set the color immediately when hovering over userIcon
});

userIcon.addEventListener('mouseout', (e) => {
    if (!menu_account.contains(e.relatedTarget)) {
        menuTimeout = setTimeout(() => {
            menu_account.style.display = 'none';
            userIcon.style.color = '#fff'; // Set the color when the menu is closed
        }, 95); // Adjust the delay (in milliseconds) as needed
    }
});

menu_account.addEventListener('mouseover', () => {
    clearTimeout(menuTimeout);
    userIcon.style.color = '#d1cfcf'; // Set the color immediately when hovering over menu
    menu_account.style.display = 'block';
});

menu_account.addEventListener('mouseout', (e) => {
    if (!userIcon.contains(e.relatedTarget)) {
        menuTimeout = setTimeout(() => {
            menu_account.style.display = 'none';
            userIcon.style.color = '#fff'; // Set the color when the menu is closed
        }, 0); // Adjust the delay (in milliseconds) as needed
    }
});
