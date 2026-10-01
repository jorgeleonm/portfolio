// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Abrir menú");
        });
    });
}

// Resalta en el menú la sección visible
const links = document.querySelectorAll(".nav-menu a");
const sections = [...links]
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    links.forEach((a) =>
                        a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
                    );
                }
            });
        },
        { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
}

// Año actual en el pie de página
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
