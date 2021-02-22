window.onload = function() {
    anchorTags = document.querySelectorAll("a");
    anchorTags.forEach(function(anchor) {
        if(anchor.href.substr(0, 3) === "id:") {
            anchor.href = "#" + anchor.href.substr(3);
        }
    });
}