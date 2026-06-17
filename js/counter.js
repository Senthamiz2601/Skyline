/* ==========================================
   SKYLINE RESEARCH WORKS
   COUNTER.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {

        const target =
            parseInt(counter.getAttribute("data-target"));

        const duration = 2500;

        const startTime = performance.now();

        const updateCounter = (currentTime) => {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(elapsed / duration, 1);

            const value =
                Math.floor(progress * target);

            counter.textContent =
                value.toLocaleString();

            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent =
                    target.toLocaleString();

            }

        };

        requestAnimationFrame(updateCounter);

    };

    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.5
        }

    );

    counters.forEach(counter => {

        observer.observe(counter);

    });

});