$(".overlay-container").on("mouseover", function() {
    const overlay = this.children[1];
    overlay.setAttribute("style", "visibility: visible");
});

$(".overlay").on("mouseout", function() {
    const overlay = this;
    overlay.setAttribute("style", "visibility: hidden");
});