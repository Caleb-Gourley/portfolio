(function () {
    "use strict";

    document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
        var track = carousel.querySelector(".project-carousel__track");
        var viewport = carousel.querySelector(".project-carousel__viewport");
        var slides = carousel.querySelectorAll("[data-carousel-slide]");
        var dots = carousel.querySelectorAll("[data-carousel-dot]");
        var current = 0;

        if (!track || slides.length < 2) {
            return;
        }

        function show(index) {
            current = (index + slides.length) % slides.length;
            track.style.transform = "translateX(-" + (current * 100) + "%)";
            var height = slides[current].offsetHeight;
            viewport.style.height = height ? height + "px" : "auto";

            dots.forEach(function (dot, dotIndex) {
                var active = dotIndex === current;
                dot.classList.toggle("is-active", active);
                dot.setAttribute("aria-selected", active ? "true" : "false");
            });
        }

        carousel.querySelector("[data-carousel-prev]").addEventListener("click", function () {
            show(current - 1);
        });

        carousel.querySelector("[data-carousel-next]").addEventListener("click", function () {
            show(current + 1);
        });

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                show(Number(dot.getAttribute("data-carousel-dot")));
            });
        });

        slides.forEach(function (slide) {
            slide.querySelector("img").addEventListener("load", function () {
                if (slide === slides[current]) {
                    viewport.style.height = slide.offsetHeight + "px";
                }
            });
        });

        window.addEventListener("resize", function () {
            viewport.style.height = slides[current].offsetHeight + "px";
        });

        show(0);

        carousel.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") {
                show(current - 1);
            } else if (event.key === "ArrowRight") {
                show(current + 1);
            }
        });
    });
})();
