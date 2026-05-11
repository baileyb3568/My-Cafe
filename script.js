// =========================
// VELVET ROAST SCRIPT
// =========================


// NAVBAR SCROLL EFFECT

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(20,20,20,0.55)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.background = "rgba(20,20,20,0.25)";
        navbar.style.boxShadow = "none";

    }

});


// FADE-IN ANIMATION ON SCROLL

const fadeElements = document.querySelectorAll(
    ".card, .hero-content, .section-title, .contact-box, .image-placeholder"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("fade-in");

        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach((el) => {
    observer.observe(el);
});


// BUTTON HOVER GLOW EFFECT

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
        "0 0 25px rgba(180,90,90,0.45)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});


// SMOOTH PAGE TRANSITION EFFECT

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(href && href.endsWith(".html")){

            e.preventDefault();

            document.body.style.opacity = "0";

            setTimeout(() => {

                window.location.href = href;

            }, 300);

        }

    });

});


// PAGE LOAD FADE-IN

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// INITIAL BODY STYLE

document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.5s ease";


// SIMPLE FLOATING EFFECT FOR CARDS

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-6px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 4000 + (index * 500),
            iterations: Infinity
        }
    );

});


// PARALLAX HERO EFFECT

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if(hero){

        let offset = window.scrollY * 0.3;

        hero.style.backgroundPositionY = `${offset}px`;

    }

});


// CONSOLE MESSAGE

console.log(
`
☕ Velvet Roast Website Loaded Successfully
Elegant • Cozy • Luxury
`
);
