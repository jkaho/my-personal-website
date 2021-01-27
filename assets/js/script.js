var background = $("#bg");
var sun = $("#sun");
var clouds = $("#clouds");
var dawnBtn = $("#dawn-btn");
var dayBtn = $("#day-btn");
var duskBtn = $("#dusk-btn");
var darkBtn = $("#dark-btn");
var doomBtn = $("#doom-btn");
var bannerDiv = $("#bg-outer");
var themeBtnDiv = $("#theme-div");
var footerDiv = $(".footer");

$(window).on("resize", function(){
    if ($(window).width() > 768) {
        background.css("width", "600px");
        background.css("height", "450px");
    } else {
        background.css("width", "80%");
        background.css("height", "0")
        background.css("padding-top", "60%");
    }
})

dawnBtn.on("click", function(event){
    event.preventDefault();

    themeBtnDiv.css("background", "rgb(177, 75, 75)");
    footerDiv.css("background", "#FFE8EF");
    dayBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.addClass("no-clouds");
    }
    background.attr("class", "dawn");   
    sun.attr("class", "dawn-sun");
    bannerDiv.attr("class", "dawn-outer");
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-dawn.png'); background-size: contain; background-repeat: no-repeat"
        );
        if ($(window).width() > 768) {
            background.css("width", "600");
            background.css("height", "450");
        } else {
            background.css("width", "80%");
            background.css("height", "0")
            background.css("padding-top", "60%");
        }

        sun.attr("style", 
        "position: absolute; top: 120px; left: 55vw; background: url('./assets/images/general/bg-dawn-sun.png'); background-size: contain; background-repeat: no-repeat; height: 100%; width: 200px; z-index: 1"
        );
        bannerDiv.css("background", "#FFE8EF");
        dayBtn.attr("disabled", false);
        duskBtn.attr("disabled", false);
        darkBtn.attr("disabled", false);
        doomBtn.attr("disabled", false);
    }, 2000) 
})

dayBtn.on("click", function(event){
    event.preventDefault();

    themeBtnDiv.css("background", "rgb(75, 121, 177)");
    footerDiv.css("background", "#95E4EC");
    dawnBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    background.attr("class", "day");   
    sun.attr("class", "day-sun");
    clouds.attr("class", "day-clouds");
    bannerDiv.attr("class", "day-outer");
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-day.png'); background-size: contain; background-repeat: no-repeat"
        );
        if ($(window).width() > 768) {
            background.css("width", "600");
            background.css("height", "450");
        } else {
            background.css("width", "80%");
            background.css("height", "0")
            background.css("padding-top", "60%");
        }
        sun.attr("style", 
        "position: absolute; top: 20px; left: 15vw; background: url('./assets/images/general/bg-day-sun.png'); background-size: contain; background-repeat: no-repeat; height: 100%; width: 200px; z-index: 1"
        );
        clouds.attr("style", 
        "position: absolute; background: url('./assets/images/general/bg-day-clouds.png'); background-size: contain; background-repeat: no-repeat; height: 100%; width: 250px; z-index: 2"
        )
        bannerDiv.css("background", "#95E4EC");
        dawnBtn.attr("disabled", false);
        duskBtn.attr("disabled", false);
        darkBtn.attr("disabled", false);
        doomBtn.attr("disabled", false);
    }, 2000) 
})

duskBtn.on("click", function(event){
    event.preventDefault();

    themeBtnDiv.css("background", "rgb(225, 153, 45)");
    footerDiv.css("background", "#FFE76C");
    dawnBtn.attr("disabled", true);
    dayBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.addClass("no-clouds");
    }
    background.attr("class", "dusk");
    sun.attr("class", "dusk-sun");
    bannerDiv.attr("class", "dusk-outer");
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-dusk.png'); background-size: contain; background-repeat: no-repeat"
        );
        if ($(window).width() > 768) {
            background.css("width", "600");
            background.css("height", "450");
        } else {
            background.css("width", "80%");
            background.css("height", "0")
            background.css("padding-top", "60%");
        }
        sun.attr("style", 
        "position: absolute; top: 320px; left: 15vw; background: url('./assets/images/general/bg-dusk-sun.png'); background-size: contain; background-repeat: no-repeat; height: 100%; width: 200px; z-index: 1"
        );

        bannerDiv.css("background", "#FFE76C");
        dawnBtn.attr("disabled", false);
        dayBtn.attr("disabled", false);
        darkBtn.attr("disabled", false);
        doomBtn.attr("disabled", false);
    }, 2000) 
})

darkBtn.on("click", function(event){
    event.preventDefault();

    themeBtnDiv.css("background", "rgb(124, 125, 171)");
    footerDiv.css("background", "#08366D");
    dawnBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    dayBtn.attr("disabled", true);
    doomBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.addClass("no-clouds");
    }
    background.attr("class", "dark");
    sun.attr("class", "dark-moon");
    bannerDiv.attr("class", "dark-outer");
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-dark.png'); background-size: contain; background-repeat: no-repeat"
        );
        if ($(window).width() > 768) {
            background.css("width", "600");
            background.css("height", "450");
        } else {
            background.css("width", "80%");
            background.css("height", "0")
            background.css("padding-top", "60%");
        }
        sun.attr("style", 
        "position: absolute; top: 20px; left: 15vw; background: url('./assets/images/general/bg-dark-moon.png'); background-size: contain; background-repeat: no-repeat; height: 100%; width: 100px; z-index: 1"
        );

        bannerDiv.css("background", "#08366D");
        dawnBtn.attr("disabled", false);
        duskBtn.attr("disabled", false);
        dayBtn.attr("disabled", false);
        doomBtn.attr("disabled", false);
    }, 2000) 
})

doomBtn.on("click", function(event){
    event.preventDefault();

    themeBtnDiv.css("background", "rgb(69, 67, 67)");
    footerDiv.css("background", "#BDA5A0");
    dawnBtn.attr("disabled", true);
    duskBtn.attr("disabled", true);
    dayBtn.attr("disabled", true);
    darkBtn.attr("disabled", true);

    if (background.attr("class") === "day") {
        clouds.addClass("no-clouds");
    }
    background.attr("class", "doom");
    bannerDiv.attr("class", "doom-outer");
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-doom.png'); background-size: contain; background-repeat: no-repeat"
        );
        if ($(window).width() > 768) {
            background.css("width", "600");
            background.css("height", "450");
        } else {
            background.css("width", "80%");
            background.css("height", "0")
            background.css("padding-top", "60%");
        }

        bannerDiv.css("background", "#BDA5A0");
        dawnBtn.attr("disabled", false);
        duskBtn.attr("disabled", false);
        dayBtn.attr("disabled", false);
        darkBtn.attr("disabled", false);
    }, 2000) 
})


