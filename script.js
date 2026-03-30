window.onload = function () {
    document.querySelector(".hero").style.opacity = "1";
};

const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = "opacity 1.5s ease";
});

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            section.style.opacity = 1;
        }
    });
});

const movies = document.querySelectorAll(".movie-row img");

movies.forEach(movie => {
    movie.addEventListener("mouseenter", () => {
        movie.style.transform = "scale(1.2)";
        movie.style.transition = "0.3s";
    });

    movie.addEventListener("mouseleave", () => {
        movie.style.transform = "scale(1)";
    });
});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.9)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});