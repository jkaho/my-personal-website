var theme = "";

var background = $("#bg");
var outerBackground = $("#bg-outer");
var sun = $("#sun");
var moon = $("#moon");
var clouds = $("#clouds");
var dawnBtn = $("#dawn-btn");
var dayBtn = $("#day-btn");
var duskBtn = $("#dusk-btn");
var darkBtn = $("#dark-btn");
var doomBtn = $("#doom-btn");
var bannerDiv = $("#bg-outer");
var themeBtnDiv = $("#theme-div");
var navLinks = $(".nav-link");

var portfolioNav = $("#portfolio-navbar");
var contactNav = $("#contact-navbar");

var footerDiv = $(".footer");
var portfolioFooter = $("#portfolio-footer");
var contactFooter = $("#contact-footer");
var indexSpan = $("#index-span");
var portfolioSpan = $("#portfolio-span");
var contactSpan = $("#contact-span");

renderTheme();

responsiveBackground();

function responsiveBackground(){
    if ($(window).width() > 768) {
        var updatedTheme = localStorage.getItem("theme");
        background.css("width", "600px");
        background.css("height", "450px");
        outerBackground.css("height", "450px");
        sun.css("display", "inline-block");
        if (updatedTheme === "day") {
            clouds.css("display", "inline-block");
        } else if (updatedTheme === "dark") {
            moon.css("display", "inline-block");
        }
    } else {
        background.css("width", "400px");
        background.css("height", "300px");
        outerBackground.css("height", "300px");
        sun.css("display", "none");
        moon.css("display", "none");
        clouds.css("display", "none");
    }
}

$(window).on("resize", responsiveBackground);

function renderTheme() {
    var updatedTheme = localStorage.getItem("theme");
    if (updatedTheme === "dawn" || updatedTheme === null) {
        footerDiv.css("background", "#FFE8EF");
        indexSpan.css("color", "rgb(177, 75, 75)");
        portfolioFooter.css("background", "#FFE8EF");
        portfolioSpan.css("color", "rgb(177, 75, 75)")
        contactFooter.css("background", "#FFE8EF");
        contactSpan.css("color", "rgb(177, 75, 75)");
        navLinks.css("color", "rgb(177, 75, 75)");
        portfolioNav.css("background", "#FFE8EF");
        contactNav.css("background", "#FFE8EF");
        themeBtnDiv.css("background", "rgb(177, 75, 75)");
        outerBackground.css("background", "#FFE8EF");
        background.attr("style", "background: url('./assets/images/general/bg-dawn.png'); position: absolute; background-size: contain; background-repeat: no-repeat; margin: 0 auto; z-index: 3");
        sun.attr("style", "position: absolute; top: 175px; left: 380px; background: url('./assets/images/general/bg-dawn-sun.png'); background-size: contain; background-repeat: no-repeat; height: 25%; width: 200px; z-index: 1");
        background.attr("class", "dawn");
    } else if (updatedTheme === "day") {
        footerDiv.css("background", "#95E4EC");
        indexSpan.css("color", "#2f7b96");
        portfolioFooter.css("background", "#95E4EC");
        portfolioSpan.css("color", "#2f7b96");
        contactFooter.css("background", "#95E4EC");
        contactSpan.css("color", "#2f7b96");
        navLinks.css("color", "#2f7b96");
        portfolioNav.css("background", "#95E4EC");
        contactNav.css("background", "#95E4EC");
        themeBtnDiv.css("background", "rgb(75, 121, 177)");
        outerBackground.css("background", "#95E4EC");
        background.attr("style", "background: url('./assets/images/general/bg-day.png'); position: absolute; background-size: contain; background-repeat: no-repeat; margin: 0 auto; z-index: 3");
        sun.attr("style", "position: absolute; top: 30px; left: 100px; background: url('./assets/images/general/bg-day-sun.png'); background-size: contain; background-repeat: no-repeat; height: 25%; width: 200px; z-index: 1");
        clouds.attr("style", "visibility: visible; top: 70px; left: 75px; position: absolute; background: url('./assets/images/general/bg-day-clouds.png'); background-size: contain; background-repeat: no-repeat; height: 20%; width: 200px; z-index: 2");
        background.attr("class", "day");
    } else if (updatedTheme === "dusk") {
        footerDiv.css("background", "#FFE76C");
        indexSpan.css("color", "#c48900");
        portfolioFooter.css("background", "#FFE76C");
        portfolioSpan.css("color", "#c48900");
        contactFooter.css("background", "#FFE76C");
        contactSpan.css("color", "#c48900");
        navLinks.css("color", "#c48900");
        portfolioNav.css("background", "#FFE76C");
        contactNav.css("background", "#FFE76C");
        themeBtnDiv.css("background", "rgb(225, 153, 45)");
        outerBackground.css("background", "#FFE76C");
        background.attr("style", "background: url('./assets/images/general/bg-dusk.png'); position: absolute; background-size: contain; background-repeat: no-repeat; margin: 0 auto; z-index: 3");
        sun.attr("style", "position: absolute; top: 350px; left: 55px; background: url('./assets/images/general/bg-dusk-sun.png'); background-size: contain; background-repeat: no-repeat; height: 25%; width: 200px; z-index: 1");
        background.attr("class", "dusk");
    } else if (updatedTheme === "dark") {
        footerDiv.css("background", "#08366D");
        indexSpan.css("color", "white");
        portfolioFooter.css("background", "#08366D");
        portfolioSpan.css("color", "white");
        contactFooter.css("background", "#08366D");
        contactSpan.css("color", "white");
        navLinks.css("color", "white");
        portfolioNav.css("background", "#08366D");
        contactNav.css("background", "#08366D");
        themeBtnDiv.css("background", "rgb(124, 125, 171)");
        outerBackground.css("background", "#08366D");
        background.attr("style", "background: url('./assets/images/general/bg-dark.png'); position: absolute; background-size: contain; background-repeat: no-repeat; margin: 0 auto; z-index: 3");
        sun.attr("style", "position: absolute; top: 450px; left: 380px; background: url('./assets/images/general/bg-dawn-sun.png'); background-size: contain; background-repeat: no-repeat; height: 25%; width: 200px; z-index: 1");
        moon.attr("style", "visibility: visible; position: absolute; top: 65px; left: 55px; background: url('./assets/images/general/bg-dark-moon.png'); background-size: contain; background-repeat: no-repeat; height: 20%; width: 100px; z-index: 1");
        background.attr("class", "dark");
    } else {
        footerDiv.css("background", "#BDA5A0");
        indexSpan.css("color", "#66442c");
        portfolioFooter.css("background", "#BDA5A0");
        portfolioSpan.css("color", "#66442c");
        contactFooter.css("background", "#BDA5A0");
        contactSpan.css("color", "#66442c");
        navLinks.css("color", "#66442c");
        portfolioNav.css("background", "#BDA5A0");
        contactNav.css("background", "#BDA5A0");
        themeBtnDiv.css("background", "rgb(69, 67, 67)");
        outerBackground.css("background", "#BDA5A0");
        background.attr("style", "background: url('./assets/images/general/bg-doom.png'); position: absolute; background-size: contain; background-repeat: no-repeat; margin: 0 auto; z-index: 3");
        sun.attr("style", "position: absolute; top: 30px; left: 100px; background: url('./assets/images/general/bg-doom-sun.png'); background-size: contain; background-repeat: no-repeat; height: 25%; width: 200px; z-index: 1");
        background.attr("class", "doom");
    }
}

function storeTheme() {
    localStorage.setItem("theme", theme);
}

dawnBtn.on("click", function(event){
    event.preventDefault();

    theme = "dawn";
    storeTheme();

    themeBtnDiv.css("background", "rgb(177, 75, 75)");
    footerDiv.css("background", "#FFE8EF");
    indexSpan.css("color", "rgb(177, 75, 75)");
    navLinks.css("color", "rgb(177, 75, 75)");

    dayBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.attr("class", "no-clouds");
    }
    
    if (background.attr("class") === "dark") {
        moon.attr("class", "dark-moon-exit");
        setTimeout(function(){
            sun.attr("class", "dawn-sun");
        }, 600)
    } else {
        sun.attr("class", "dawn-sun");
    }

    background.attr("class", "dawn");   
    bannerDiv.attr("class", "dawn-outer");

    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-dawn.png'); background-size: contain; background-repeat: no-repeat"
        );
        // if ($(window).width() > 768) {
        //     background.css("width", "600");
        //     background.css("height", "450");
        // } else {
        //     background.css("width", "80%");
        //     background.css("height", "0")
        //     background.css("padding-top", "60%");
        // }

        sun.attr("style", 
        "position: absolute; top: 175px; left: 380px; background: url('./assets/images/general/bg-dawn-sun.png'); background-size: contain; background-repeat: no-repeat; width: 200px; z-index: 1"
        );
        responsiveBackground();
        bannerDiv.css("background", "#FFE8EF");
        dayBtn.attr("disabled", false);
        duskBtn.attr("disabled", false);
        darkBtn.attr("disabled", false);
        doomBtn.attr("disabled", false);
    }, 2000) 
})

dayBtn.on("click", function(event){
    event.preventDefault();

    theme = "day";
    storeTheme();

    themeBtnDiv.css("background", "rgb(75, 121, 177)");
    footerDiv.css("background", "#95E4EC");
    indexSpan.css("color", "#2f7b96");
    navLinks.css("color", "#2f7b96");

    dawnBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    if (background.attr("class") === "dark") {
        moon.attr("class", "dark-moon-exit");
        setTimeout(function(){
            sun.attr("class", "day-sun");
        }, 600)
    } else {
        sun.attr("class", "day-sun");
    }

    background.attr("class", "day");   
    clouds.attr("class", "day-clouds");
    bannerDiv.attr("class", "day-outer");
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-day.png'); background-size: contain; background-repeat: no-repeat"
        );
        // if ($(window).width() > 768) {
        //     background.css("width", "600");
        //     background.css("height", "450");
        // } else {
        //     background.css("width", "80%");
        //     background.css("height", "0")
        //     background.css("padding-top", "60%");
        // }
        sun.attr("style", 
        "position: absolute; top: 30px; left: 100px; background: url('./assets/images/general/bg-day-sun.png'); background-size: contain; background-repeat: no-repeat; width: 200px; z-index: 1"
        );
        clouds.attr("style", 
        "position: absolute; background: url('./assets/images/general/bg-day-clouds.png'); background-size: contain; background-repeat: no-repeat; width: 200px; z-index: 2"
        );
        responsiveBackground();

        bannerDiv.css("background", "#95E4EC");
        dawnBtn.attr("disabled", false);
        duskBtn.attr("disabled", false);
        darkBtn.attr("disabled", false);
        doomBtn.attr("disabled", false);
    }, 2000) 
})

duskBtn.on("click", function(event){
    event.preventDefault();

    theme = "dusk";
    storeTheme();

    themeBtnDiv.css("background", "rgb(225, 153, 45)");
    footerDiv.css("background", "#FFE76C");
    indexSpan.css("color", "#c48900");
    navLinks.css("color", "#c48900");

    dawnBtn.attr("disabled", true);
    dayBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.attr("class", "no-clouds");
    }
    
    if (background.attr("class") === "dark") {
        moon.attr("class", "dark-moon-exit");
        setTimeout(function(){
            sun.attr("class", "dusk-sun");
        }, 600)
    } else {
        sun.attr("class", "dusk-sun");
    }

    background.attr("class", "dusk");
    bannerDiv.attr("class", "dusk-outer");
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-dusk.png'); background-size: contain; background-repeat: no-repeat"
        );
        // if ($(window).width() > 768) {
        //     background.css("width", "600");
        //     background.css("height", "450");
        // } else {
        //     background.css("width", "80%");
        //     background.css("height", "0")
        //     background.css("padding-top", "60%");
        // }
        sun.attr("style", 
        "position: absolute; top: 350px; left: 55px; background: url('./assets/images/general/bg-dusk-sun.png'); background-size: contain; background-repeat: no-repeat; width: 200px; z-index: 1"
        );
        responsiveBackground();

        bannerDiv.css("background", "#FFE76C");
        dawnBtn.attr("disabled", false);
        dayBtn.attr("disabled", false);
        darkBtn.attr("disabled", false);
        doomBtn.attr("disabled", false);
    }, 2000) 
})

darkBtn.on("click", function(event){
    event.preventDefault();

    theme = "dark";
    storeTheme();

    themeBtnDiv.css("background", "rgb(124, 125, 171)");
    footerDiv.css("background", "#08366D");
    indexSpan.css("color", "white");
    navLinks.css("color", "white");

    dawnBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    dayBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.attr("class", "no-clouds");
    }
    if (background.attr("class") === "dawn") {
        sun.attr("class", "dawn-sun-exit");
        setTimeout(function(){
            sun.attr("style", 
            "position: absolute; top: 450px; left: 380px; background: url('./assets/images/general/bg-dawn-sun.png'); background-size: contain; background-repeat: no-repeat; width: 100px; z-index: 1"
        );
        }, 2000)
    } else if (background.attr("class") === "day") {
        sun.attr("class", "day-sun-exit");
        setTimeout(function(){
            sun.attr("style", 
            "position: absolute; top: 450px; left: 100px; background: url('./assets/images/general/bg-day-sun.png'); background-size: contain; background-repeat: no-repeat; width: 100px; z-index: 1"
            );
        }, 2000)
    } else if (background.attr("class") === "dusk") {
        sun.attr("class", "dusk-sun-exit");
        setTimeout(function(){
            sun.attr("style", 
            "position: absolute; top: 450px; left: 55px; background: url('./assets/images/general/bg-dusk-sun.png'); background-size: contain; background-repeat: no-repeat; width: 100px; z-index: 1"
            );
        }, 2000)
    } else if (background.attr("class") === "doom") {
        sun.attr("class", "doom-sun-exit");
        setTimeout(function(){
            sun.attr("style", 
            "position: absolute; top: 450px; left: 100px; background: url('./assets/images/general/bg-doom-sun.png'); background-size: contain; background-repeat: no-repeat; width: 100px; z-index: 1"
            );
        }, 2000)
    }

    background.attr("class", "dark");
    bannerDiv.attr("class", "dark-outer");
    setTimeout(function(){
        moon.attr("class", "dark-moon");
    }, 1100)
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-dark.png'); background-size: contain; background-repeat: no-repeat"
        );
        // if ($(window).width() > 768) {
        //     background.css("width", "600");
        //     background.css("height", "450");
        // } else {
        //     background.css("width", "80%");
        //     background.css("height", "0")
        //     background.css("padding-top", "60%");
        // }

        moon.attr("style", 
        "position: absolute; top: 20px; left: 15vw; background: url('./assets/images/general/bg-dark-moon.png'); background-size: contain; background-repeat: no-repeat; width: 100px; z-index: 1"
        );
        responsiveBackground();

        bannerDiv.css("background", "#08366D");
        dawnBtn.attr("disabled", false);
        duskBtn.attr("disabled", false);
        dayBtn.attr("disabled", false);
        doomBtn.attr("disabled", false);
    }, 2000) 
})

doomBtn.on("click", function(event){
    event.preventDefault();

    theme = "doom";
    storeTheme();

    themeBtnDiv.css("background", "rgb(69, 67, 67)");
    footerDiv.css("background", "#BDA5A0");
    indexSpan.css("color", "#66442c");
    navLinks.css("color", "#66442c");

    dawnBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    dayBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.attr("class", "no-clouds");
    }

    if (background.attr("class") === "dark") {
        moon.attr("class", "dark-moon-exit");
        setTimeout(function(){
            sun.attr("class", "doom-sun");
        }, 600)
    } else {
        sun.attr("class", "doom-sun");
    }

    background.attr("class", "doom");
    bannerDiv.attr("class", "doom-outer");
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-doom.png'); background-size: contain; background-repeat: no-repeat"
        );
        // if ($(window).width() > 768) {
        //     background.css("width", "600");
        //     background.css("height", "450");
        // } else {
        //     background.css("width", "80%");
        //     background.css("height", "0")
        //     background.css("padding-top", "60%");
        // }
        sun.attr("style", 
        "position: absolute; top: 30px; left: 100px; background: url('./assets/images/general/bg-doom-sun.png'); background-size: contain; background-repeat: no-repeat; width: 200px; z-index: 1"
        );
        responsiveBackground();

        bannerDiv.css("background", "#BDA5A0");
        dawnBtn.attr("disabled", false);
        duskBtn.attr("disabled", false);
        dayBtn.attr("disabled", false);
        darkBtn.attr("disabled", false);
    }, 2000) 
})


