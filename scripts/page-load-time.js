(function () {
    window.addEventListener("load", function () {
        const loadTime = (performance.now() / 1000).toFixed(3);
        const footer = document.querySelector(".footer");
        const stats = document.createElement("p");
        stats.textContent = `Page load time: ${loadTime} seconds`;
        stats.style.fontSize = "0.9rem";
        stats.style.color = "#ccc";
        stats.style.marginTop = "10px";
        footer.appendChild(stats);
    });
})();