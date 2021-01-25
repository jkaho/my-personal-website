var background = $("#bg");
var dawnBtn = $("#dawn-btn");
var dayBtn = $("#day-btn");
var duskBtn = $("#dusk-btn");
var darkBtn = $("#dark-btn");
var doomBtn = $("#doom-btn");

dayBtn.on("click", function(event){
    event.preventDefault();
    background.attr("class", "day");   
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-day.png'); background-size: contain; background-repeat: no-repeat; width: 100%; height: 0; padding-top: 75%;"
        );
    }, 2000) 
})

duskBtn.on("click", function(event){
    event.preventDefault();
    background.attr("class", "dusk");
    setTimeout(function(){
        background.attr("style", 
        "background: url('./assets/images/general/bg-dusk.png'); background-size: contain; background-repeat: no-repeat; width: 100%; height: 0; padding-top: 75%;"
        );
    }, 2000) 
})

