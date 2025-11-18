// ===================================
// LÓGICA DO MODAL (LIGHTBOX)
// ===================================
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Função exposta globalmente para ser chamada pelo onclick do HTML
function openModal(src, alt) {
    modal.style.display = "flex";
    modalImg.src = src;
    captionText.innerHTML = alt;
    document.body.style.overflow = "hidden"; // Bloqueia o scroll da página principal
}

// Função exposta globalmente para ser chamada pelo onclick do HTML
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restaura o scroll
}

// Fechar o modal ao clicar fora dele
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

// ===================================
// LÓGICA DO MENU HAMBURGUER (MOBILE)
// ===================================
document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const iconBar = document.querySelector('.icon-bar');

    // Garante que o modal esteja escondido ao carregar a página
    document.getElementById("myModal").style.display = "none";

    // FUNÇÃO PARA ABRIR/FECHAR O MENU
    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen);

        // Alterna o ícone entre Hamburger (☰) e Fechar (×)
        if (isOpen) {
            iconBar.innerHTML = '&#215;'; // ×
            menuToggle.classList.add('open');
        } else {
            iconBar.innerHTML = '&#9776;'; // ☰
            menuToggle.classList.remove('open');
        }
    });

    // FUNÇÃO PARA FECHAR O MENU APÓS CLICAR EM UM LINK (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Fecha o menu após o clique
            navMenu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            iconBar.innerHTML = '&#9776;'; // Volta para o Hamburger
            menuToggle.classList.remove('open');
        });
    });
});