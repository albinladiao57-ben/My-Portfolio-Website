const text = "B.S. Information Technology";
const title = document.querySelector(".id h2");
let i = 0;

function typing() {
    if (i < text.length) {
        title.textContent += text[i];
        i++;
        setTimeout(typing, 70);
    }
}

title.textContent = "";
typing();

const sections = document.querySelectorAll("section");

function reveal() {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(link => link.classList.remove("active"));

            const active = document.querySelector(
                `nav a[href="#${section.id}"]`
            );

            if (active) active.classList.add("active");
        }
    });
});

document.querySelector("footer").innerHTML =
    `© ${september19().get2026()} Albin V. Ladiao. All rights reserved.`;