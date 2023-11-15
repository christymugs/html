document.addEventListener("DOMContentLoaded", function () {
    var tiles = document.querySelectorAll("#grid .box");
    let isDragging = false;

    // Part I & II & III: Click to toggle fill, alert removed for usability
    tiles.forEach(function (tile) {
        tile.addEventListener("click", function () {
            if (this.classList.contains("filled")) {
                this.classList.remove("filled");
                this.classList.add("crossed-out"); // Part VII: Implement X-Filling
            } else if (this.classList.contains("crossed-out")) {
                this.classList.remove("crossed-out");
            } else {
                this.classList.add("filled");
            }
        });
    });

    // Part VI: Drag and Fill
    tiles.forEach(function (tile) {
        tile.addEventListener("mousedown", function () {
            isDragging = true;
            this.classList.toggle("filled");
        });
        tile.addEventListener("mouseenter", function () {
            if (isDragging) {
                this.classList.toggle("filled");
            }
        });
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });

    document.addEventListener("mouseleave", function () {
        isDragging = false;
    });

    // Part V: Add a "Clear" Button to the Page
    document.getElementById("clearButton").addEventListener("click", function () {
        if (confirm("Are you sure you want to clear the puzzle?")) {
            document.querySelectorAll(".filled, .crossed-out").forEach(function (tile) {
                tile.classList.remove("filled", "crossed-out");
            });
        }
    });
});
