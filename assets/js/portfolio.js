$(".overlay-container").on("click", function() {
    let isOpen;
    const overlay = this.children[1];
    if (overlay.getAttribute("visibility") === "hidden") {
        isOpen = true;
        overlay.setAttribute("style", "visibility: visible");
        overlay.setAttribute("visibility", "visible");
    } else {
        isOpen = false;
        overlay.setAttribute("style", "visibility: hidden");
        overlay.setAttribute("visibility", "hidden");
    }
});
