// =========================================
// VELVET ROAST — SCRIPT.JS
// Modern Cozy Luxury Café
// =========================================


// NAVBAR SCROLL EFFECT

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.style.background =
        "rgba(255,255,255,0.88)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.05)";

        navbar.style.backdropFilter =
        "blur(20px)";

    }

    else{

        navbar.style.background =
        "rgba(255,255,255,0.65)";

        navbar.style.boxShadow =
        "none";

    }

});


// FADE IN ON SCROLL

const fadeElements = document.querySelectorAll(
    ".fade-in"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold:0.15
});

fadeElements.forEach((element) => {

    observer.observe(element);

});


// BUTTON HOVER EFFECT

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
        "translateY(-4px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
        "translateY(0px) scale(1)";

    });

});


// IMAGE PLACEHOLDER HOVER EFFECT

const placeholders = document.querySelectorAll(
    ".image-placeholder"
);

placeholders.forEach((placeholder) => {

    placeholder.addEventListener("mouseenter", () => {

        placeholder.style.transform =
        "translateY(-6px)";

        placeholder.style.boxShadow =
        "0 20px 40px rgba(0,0,0,0.08)";

    });

    placeholder.addEventListener("mouseleave", () => {

        placeholder.style.transform =
        "translateY(0px)";

        placeholder.style.boxShadow =
        "none";

    });

});


// SMOOTH PAGE TRANSITION


// PAGE LOAD ANIMATION

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition =
"opacity 0.4s ease";


// FLOATING HERO EFFECT

const heroImage = document.querySelector(
    ".hero-image"
);

if(heroImage){


}


// CARD FLOAT EFFECT

const cards = document.querySelectorAll(".card");



// SOFT SCROLL REVEAL

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll(
        "section"
    );

    sections.forEach((section) => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = "1";

            section.style.transform =
            "translateY(0px)";

        }

    });

});


// INITIAL SECTION STATE

document.querySelectorAll("section").forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
    "translateY(30px)";

    section.style.transition =
    "all 0.8s ease";

});


// ACTIVATION DELAY

setTimeout(() => {

    document.querySelectorAll("section").forEach((section) => {

        section.style.opacity = "1";

        section.style.transform =
        "translateY(0px)";

    });

}, 200);


// CONSOLE MESSAGE

console.log(

`
☕ Velvet Roast Loaded Successfully

Modern • Cozy • Luxury Café

`
);
