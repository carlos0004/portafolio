const $abrirCerrarMenu = document.querySelector(".abrir-cerrar input");
const $headerNav = document.querySelector("header nav");
const $links = document.querySelectorAll("nav a");

$abrirCerrarMenu.addEventListener("click", (e) => {
    if ($abrirCerrarMenu.checked) {
        document.body.style.overflow = "hidden"; // Desactiva el scroll cuando el menú está abierto
        $headerNav.classList.add("active"); // Añade la clase 'active' al nav
    } else {
        document.body.style.overflow = "auto"; // Activa el scroll cuando el menú se cierra
        $headerNav.classList.remove("active");
    }
});

// Cerrar el menú al hacer clic en cualquier enlace
$links.forEach(link => {
    link.addEventListener("click", () => {
        document.body.style.overflow = "auto"; // Activa el scroll
        $headerNav.classList.remove("active"); // Remueve la clase 'active' del nav
        $abrirCerrarMenu.checked = false; // Desactiva el checkbox, lo que cierra el menú
    });
});
