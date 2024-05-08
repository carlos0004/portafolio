// // nav a {
// //     display: block;
// // }
// // header nav 
// .header-nav{
//     display: flex;
//     flex-direction: column;
//     height: 100dvh;
//     padding-top: 20%;
//     gap: 10%;
// }

// // .menu a 
// .menu-a{
//     display: flex;
//     justify-content: center;
//     padding: 10px;
//     width: 100%;
//     position: relative;
// }

// .menu a::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 2px;
//     background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 49%, rgba(0, 0, 0, 1) 100%);
// }

const $abrirCerrarMenu = document.querySelector(".abrir-cerrar");
const $headerNav = document.querySelector("header nav");
const $links = document.querySelectorAll("nav a");

$abrirCerrarMenu.getElementsByTagName("input")[0].addEventListener("click", () => {

    $headerNav.classList.toggle("active");

    $links.forEach(link => {
        link.addEventListener("click", () => {
            $headerNav.classList.remove("active");
        })
    })

});
