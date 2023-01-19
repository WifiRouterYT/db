// credits: https://codepen.io/henryegloff/pen/Eqwzeb

var app = document.getElementsByTagName("BODY")[0];
var themetoggle = document.getElementById("theme-toggle");
var menu = document.getElementById("menu");
var hamburger = document.getElementById("hamburger");
var menuopen = 0;

function toggle_light_mode() {
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        menu.style.transition = ".2s linear";
        app.classList.remove("dark");
        themetoggle.classList.remove("fa-moon");
        themetoggle.classList.add("fa-sun");
        setTimeout(function() {
            menu.style.transition = ".7s ease-in-out";
        }, 250);
    } else {
        localStorage.lightMode = "dark";
        menu.style.transition = ".2s linear";
        app.classList.add("dark");
        themetoggle.classList.remove("fa-sun");
        themetoggle.classList.add("fa-moon");
        setTimeout(function() {
            menu.style.transition = ".7s ease-in-out";
        }, 250);
    }
}

if (localStorage.lightMode == "dark") {
    app.classList.add("dark");
    themetoggle.classList.remove("fa-sun");
    themetoggle.classList.add("fa-moon");
} else {
    app.classList.remove("dark");
    themetoggle.classList.remove("fa-moon");
    themetoggle.classList.add("fa-sun");
}

function toggleMenu() {
    if(menuopen == 0) {
        menu.style.width = "255px";
        menuopen = 1;
        hamburger.style.animationName = "open";
        hamburger.classList.remove("fa-bars");
        hamburger.classList.add("fa-chevron-left");
        setTimeout(function() {
          hamburger.style.animationName = "";
        }, 1000);
    } else {
        menu.style.width = "0px";
        menuopen = 0;
        hamburger.style.animationName = "close";
        hamburger.classList.remove("fa-chevron-left");
        hamburger.classList.add("fa-bars");
        setTimeout(function() {
          hamburger.style.animationName = "";
        }, 1000);
    }
}