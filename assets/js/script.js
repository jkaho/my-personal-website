var background = $("#bg");
var dawnBtn = $("#dawn-btn");
var dayBtn = $("#day-btn");
var duskBtn = $("#dusk-btn");
var darkBtn = $("#dark-btn");
var doomBtn = $("#doom-btn");

dayBtn.on("click", function(event){
    event.preventDefault();
    background.attr("class", "day");    
})

