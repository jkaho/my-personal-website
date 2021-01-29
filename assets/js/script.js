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

var footerDiv = $(".footer");
var portfolioFooter = $("#portfolio-footer");
var contactFooter = $("#contact-footer");

responsiveBackground();

function responsiveBackground(){
    if ($(window).width() > 768) {
        background.css("width", "600px");
        background.css("height", "450px");
        outerBackground.css("height", "450px");
        sun.css("display", "inline-block");
        moon.css("display", "inline-block");
        clouds.css("display", "inline-block");
    } else {
        background.css("width", "400px");
        background.css("height", "300px")
        outerBackground.css("height", "300px");
        sun.css("display", "none");
        moon.css("display", "none");
        clouds.css("display", "none");
    }
}

$(window).on("resize", responsiveBackground);

renderTheme();

function renderTheme() {
    var updatedTheme = localStorage.getItem("theme");
    if (updatedTheme === "dawn" || updatedTheme === null) {
        footerDiv.css("background", "#FFE8EF");
        portfolioFooter.css("background", "#FFE8EF");
        contactFooter.css("background", "#FFE8EF");

        outerBackground.css("background", "#FFE8EF");
        background.attr("style", "background: url('./assets/images/general/bg-dawn.png'); position: absolute; background-size: contain; background-repeat: no-repeat; margin: 0 auto; z-index: 3");
        sun.attr("style", "position: absolute; top: 175px; left: 380px; background: url('./assets/images/general/bg-dawn-sun.png'); background-size: contain; background-repeat: no-repeat; height: 25%; width: 200px; z-index: 1");
    } else if (updatedTheme === "day") {
        footerDiv.css("background", "#95E4EC");
        portfolioFooter.css("background", "#95E4EC");
        contactFooter.css("background", "#95E4EC");

        outerBackground.css("background", "#95E4EC");
        background.attr("style", "background: url('./assets/images/general/bg-day.png'); position: absolute; background-size: contain; background-repeat: no-repeat; margin: 0 auto; z-index: 3");
        sun.attr("style", "position: absolute; top: 30px; left: 100px; background: url('./assets/images/general/bg-day-sun.png'); background-size: contain; background-repeat: no-repeat; height: 25%; width: 200px; z-index: 1");
        clouds.attr("style", "visibility: visible; top: 70px; left: 75px; position: absolute; background: url('./assets/images/general/bg-day-clouds.png'); background-size: contain; background-repeat: no-repeat; height: 20%; width: 200px; z-index: 2");
    } else if (updatedTheme === "dusk") {
        footerDiv.css("background", "#FFE76C");
        portfolioFooter.css("background", "#FFE76C");
        contactFooter.css("background", "#FFE76C");

        outerBackground.css("background", "#FFE76C");
        background.attr("style", "background: url('./assets/images/general/bg-dusk.png'); position: absolute; background-size: contain; background-repeat: no-repeat; margin: 0 auto; z-index: 3");
        sun.attr("style", "position: absolute; top: 350px; left: 55px; background: url('./assets/images/general/bg-dusk-sun.png'); background-size: contain; background-repeat: no-repeat; height: 25%; width: 200px; z-index: 1");
    } else if (updatedTheme === "dark") {
        footerDiv.css("background", "#08366D");
        portfolioFooter.css("background", "#08366D");
        contactFooter.css("background", "#08366D");

        outerBackground.css("background", "#08366D");
        background.attr("style", "background: url('./assets/images/general/bg-dark.png'); position: absolute; background-size: contain; background-repeat: no-repeat; margin: 0 auto; z-index: 3");
        sun.attr("style", "position: absolute; top: 450px; left: 380px; background: url('./assets/images/general/bg-dawn-sun.png'); background-size: contain; background-repeat: no-repeat; height: 25%; width: 200px; z-index: 1");
        moon.attr("style", "visibility: visible; position: absolute; top: 65px; left: 55px; background: url('./assets/images/general/bg-dark-moon.png'); background-size: contain; background-repeat: no-repeat; height: 20%; width: 100px; z-index: 1");
    } else {
        footerDiv.css("background", "#BDA5A0");
        portfolioFooter.css("background", "#BDA5A0");
        contactFooter.css("background", "#BDA5A0");

        outerBackground.css("background", "#BDA5A0");
        background.attr("style", "background: url('./assets/images/general/bg-doom.png'); position: absolute; background-size: contain; background-repeat: no-repeat; margin: 0 auto; z-index: 3");
        sun.attr("style", "position: absolute; top: 30px; left: 100px; background: url('./assets/images/general/bg-doom-sun.png'); background-size: contain; background-repeat: no-repeat; height: 25%; width: 200px; z-index: 1");
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
    dayBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.addClass("no-clouds");
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
    dawnBtn.attr("disabled", true);
    dayBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.addClass("no-clouds");
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
    dawnBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    dayBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.addClass("no-clouds");
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
    dawnBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    dayBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.addClass("no-clouds");
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


