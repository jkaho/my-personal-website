var background = $("#bg");
var sun = $("#sun");
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

    background.attr("class", "dawn");   
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
    sun.attr("class", "dawntoday");
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

    background.attr("class", "dusk");
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

    background.attr("class", "dark");
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


