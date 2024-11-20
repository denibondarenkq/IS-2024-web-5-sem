(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const menuLinks = document.querySelectorAll(".header__link");

        menuLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("header__link--active");
            }
        });

        menuLinks.forEach(link => {
            link.addEventListener("mouseover", function () {
                link.style.color = "#ff6600";
            });
            link.addEventListener("mouseout", function () {
                if (!link.classList.contains("header__link--active")) {
                    link.style.color = "";
                }
            });
        });
    });
})();