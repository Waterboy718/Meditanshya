var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');
var sun_icon = document.querySelector('.fa-sun');
var moon_icon = document.querySelector('.fa-moon');
var modeContainer = document.getElementById('modeContainer');
var modeLabel = document.getElementById('modeLabel');
var currentMode = 'light';
var items = document.querySelectorAll('.item');
var active_tab = document.querySelector('.active-tab');
var logoSpans = document.querySelectorAll('.logo span');
var queue = [0, 4, 8, 10, 1, 2, 3, 5, 6, 7, 9];
var delays = [200, 200, 200, 200, 100, 100, 100, 100, 100, 100, 100];

var home = document.getElementById('home');
// home.style.color = 'lightblue';
var shop = document.getElementById('shop');
var aboutus = document.getElementById('aboutus'); 
var services = document.getElementById('services');
var currentActiveTab = 'Home';
var currentActiveElement = home;
let elementsList = [home, shop, aboutus, services];
var userIcon = document.getElementById('userIcon');
var cartIcon = document.getElementById('cartIcon');
var settingsIcon = document.getElementById('settingsIcon');
var menu_account = document.querySelector('.menu-account');
let menuTimeout, menuaccount_open;
menuaccount_open = false;


function register() {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
    document.querySelectorAll('#login input').forEach(element => {
       setTimeout(() => {
            element.value = '';
       }, 50);
    });
}

function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0';
    document.querySelectorAll('#register input').forEach(element => {
        setTimeout(() => {
            element.value = '';
        }, 50);
        
    });
}


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

// Call the animation function when the page loads
window.addEventListener('load', () => {
    animateLogo(0);
});


// home.onclick = () => {
//     shop.style.color = 'white';
//     aboutus.style.color = 'white';
//     services.style.color = 'white';
//     home.style.color = 'lightblue';
// }

// shop.onclick = () => {
    
//     aboutus.style.color = 'white';
//     services.style.color = 'white';
//     home.style.color = 'white';
//     shop.style.color = 'lightblue';
// }

// aboutus.onclick = () => {
//     shop.style.color = 'white';
    
//     services.style.color = 'white';
//     home.style.color = 'white';
//     aboutus.style.color = 'lightblue';
// }

// services.onclick = () => {
//     shop.style.color = 'white';
//     aboutus.style.color = 'white';
//     home.style.color = 'white';
//     services.style.color = 'lightblue';
// }



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

if(currentMode === 'light') {
    changeElements('light')
} else {
    changeElements('dark')
}

function changeElements(mode) {
    if(mode === 'light') {
        var white = 'white';
        document.querySelector('body').style.backgroundColor = 'linen';
        document.querySelector('nav').style.background = 'transparent';
        document.querySelectorAll('#logocontainer span').forEach(element => {
            element.style.color = 'black'
        })
        document.querySelectorAll('.menu li a').forEach(element => {
            element.style.color = 'black';
        })
        document.querySelector('#userIcon').style.color = 'black';
        document.querySelector('#cartIcon').style.color = 'black';
        document.querySelector('#settingsIcon').style.color = 'black';
        document.querySelectorAll('.iconTable li a i').forEach(element => {
            element.style.color = 'black';
        })
        // Account Menu
        document.querySelector('.menu-account').style.backgroundColor = 'white';
        document.querySelectorAll('.menu-account label').forEach(element => {
            element.style.color = 'black';
        })
        document.getElementById('hr').style.borderBottom = '0.5px solid #999'
        
        try {
            document.querySelector('.menu-account label a').style.color = 'blue';
        } catch (error) {
            
        }
        document.querySelectorAll('.input-field').forEach(element => {
           element.style.color = 'black'; 
        })
        document.querySelectorAll('.toggle-btn').forEach(element => {
            element.style.color = 'black';
        })
        document.querySelectorAll('.icons').forEach(element => {
            element.style.color = 'black';
            element.style.fontSize = '16px'
        })
        
        document.querySelectorAll('.terms').forEach(element => {
            element.style.color = '#838181';
        })
        querySelectAllWithColorChange('.social-icons i', 'black');

    } else {
        document.querySelector('body').style.backgroundColor = '#24252A';
        document.querySelector('nav').style.backgroundColor = 'transparent';
        document.querySelectorAll('#logocontainer span').forEach(element => {
            element.style.color = 'white'
        })
        document.querySelectorAll('.menu li a').forEach(element => {
            element.style.color = 'white';
        })
        document.querySelectorAll('.iconTable li a i').forEach(element => {
            element.style.color = 'white';
        })
        // Account Menu
        document.querySelector('.menu-account').style.backgroundColor = '#333';
        document.querySelectorAll('.menu-account label').forEach(element => {
            element.style.color = 'white'
            element.style.fontFamily = 'Work Sans';
            element.style.fontWeight = '400';
        })
        document.getElementById('hr').style.borderBottom = '0.5px solid #999'
        
        try {
            document.querySelector('.menu-account label a').style.color = '#6495ED';
        } catch (error) {
            
        }
        document.querySelectorAll('.icons').forEach(element => {
            element.style.color = 'whitesmoke'
            element.style.fontSize = '15.5px'
        })
        document.querySelectorAll('.terms').forEach(element => {
            element.style.color = '#909090';
        })
        querySelectAllWithColorChange('.social-icons i', 'white')

    }
}

function querySelectAllWithColorChange(element, color) {
    document.querySelectorAll(element).forEach(element => {
        element.style.color = color;
    })
}


function changeMode() {
    if (moon_icon.classList.contains('fa-moon')) {
        moon_icon.classList.remove('fa-moon');
        moon_icon.classList.add('fa-sun'); // Change sun to moon icon
        modeLabel.innerHTML = 'Light Mode';
        currentMode = 'dark';
        changeElements(currentMode);
        userIconDefaultColor = 'white';
        userIconColor = '#aca';
        localStorage.setItem('currentMode', 'dark')
        document.querySelectorAll('.menuItemsContainer').forEach(element => {
            element.classList.toggle('darkmenuItemsContainer');
        })
        document.querySelectorAll('.menuItemsContainer').forEach(element => {
            element.classList.toggle('lightmenuItemsContainer');
        })
        document.querySelectorAll('.item').forEach(element => {
            element.classList.toggle('dark');
        })
        document.querySelectorAll('.item').forEach(element => {
            element.classList.toggle('light');
        })
        
    } else {
        moon_icon.classList.add('fa-moon'); // Change moon to sun icon
        moon_icon.classList.remove('fa-sun');
        modeLabel.innerHTML = 'Dark Mode';
        currentMode = 'light';
        changeElements(currentMode);
        userIconDefaultColor = 'black';
        userIconColor = '#5a5959';
        localStorage.setItem('currentMode', 'light')
        document.querySelectorAll('.menuItemsContainer').forEach(element => {
            element.classList.toggle('darkmenuItemsContainer');
        })
        document.querySelectorAll('.menuItemsContainer').forEach(element => {
            element.classList.toggle('lightmenuItemsContainer');
        })
        document.querySelectorAll('.item').forEach(element => {
            element.classList.toggle('dark');
        })
        document.querySelectorAll('.item').forEach(element => {
            element.classList.toggle('light');
        })
    }
}
var userIconColor;
var userIconDefaultColor;
modeContainer.addEventListener('click', changeMode); // Remove parentheses after changeMode


userIconDefaultColor = 'black';
userIconColor = '#383838';

userIcon.addEventListener('mouseover', () => {
    clearTimeout(menuTimeout);
    menu_account.style.display = 'block';
    userIcon.style.color = userIconColor; // Set the color immediately when hovering over userIcon
});

userIcon.addEventListener('mouseout', (e) => {
    if (!menu_account.contains(e.relatedTarget)) {
        menuTimeout = setTimeout(() => {
            menu_account.style.display = 'none';
            userIcon.style.color = userIconDefaultColor; // Set the color when the menu is closed
        }, 95); // Adjust the delay (in milliseconds) as needed
    }
});

menu_account.addEventListener('mouseover', () => {
    clearTimeout(menuTimeout);
    userIcon.style.color = userIconColor; // Set the color immediately when hovering over menu
    menu_account.style.display = 'block';
});

menu_account.addEventListener('mouseout', (e) => {
    if (!userIcon.contains(e.relatedTarget)) {
        menuTimeout = setTimeout(() => {
            menu_account.style.display = 'none';
            userIcon.style.color = userIconDefaultColor // Set the color when the menu is closed
        }, 0); // Adjust the delay (in milliseconds) as needed
    }
});

