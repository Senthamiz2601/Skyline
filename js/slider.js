/* ==========================================
   SKYLINE RESEARCH WORKS
   TESTIMONIAL SLIDER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".testimonial-slider");

    if (!slider) return;

    const slides =
        slider.querySelectorAll(".testimonial-item");

    const prevBtn =
        document.querySelector(".slider-prev");

    const nextBtn =
        document.querySelector(".slider-next");

    let currentIndex = 0;

    function showSlide(index) {

        slides.forEach((slide) => {

            slide.style.display = "none";

            slide.classList.remove("active");

        });

        slides[index].style.display = "block";

        slides[index].classList.add("active");

    }

    function nextSlide() {

        currentIndex++;

        if (currentIndex >= slides.length) {

            currentIndex = 0;

        }

        showSlide(currentIndex);

    }

    function prevSlide() {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex = slides.length - 1;

        }

        showSlide(currentIndex);

    }

    if (nextBtn) {

        nextBtn.addEventListener("click", nextSlide);

    }

    if (prevBtn) {

        prevBtn.addEventListener("click", prevSlide);

    }

    setInterval(() => {

        nextSlide();

    }, 5000);

    showSlide(currentIndex);

});