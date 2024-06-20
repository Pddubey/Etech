document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".parallaxImg").forEach(function(move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 100;
        var y = (e.clientY * moving_value) / 100;

        move.style.transform = `translate(${x}px, ${y}px)`;
    });
}