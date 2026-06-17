/* ==========================================
   SKYLINE RESEARCH WORKS
   MAIN.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       NAVBAR SCROLL EFFECT
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

    /* ==========================
       SCROLL PROGRESS BAR
    ========================== */

    const progressBar = document.createElement("div");
    progressBar.classList.add("scroll-progress");

    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    /* ==========================
       COUNTER ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".counter");

    const startCounter = (counter) => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = target / 150;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    };

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(
        ".reveal, .fade-up, .fade-left, .fade-right, .zoom-in"
    );

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translate(0,0)";
                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       BACK TO TOP BUTTON
    ========================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.id = "backToTop";

    document.body.appendChild(topBtn);

    topBtn.style.position = "fixed";
    topBtn.style.bottom = "100px";
    topBtn.style.right = "20px";
    topBtn.style.width = "50px";
    topBtn.style.height = "50px";
    topBtn.style.border = "none";
    topBtn.style.borderRadius = "50%";
    topBtn.style.background = "#2563EB";
    topBtn.style.color = "#fff";
    topBtn.style.fontSize = "22px";
    topBtn.style.cursor = "pointer";
    topBtn.style.display = "none";
    topBtn.style.zIndex = "9999";
    topBtn.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.15)";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});