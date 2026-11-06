//menu
const botaoMenu = document.getElementById("botaoMenu");
const menuPrincipal = document.getElementById("menuPrincipal");

botaoMenu.addEventListener("click", function () {

    menuPrincipal.classList.toggle("hidden");

    const menuAberto = !menuPrincipal.classList.contains("hidden");

    botaoMenu.setAttribute("aria-expanded", menuAberto);

});

const linksMenu = menuPrincipal.querySelectorAll("a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 768) {
            menuPrincipal.classList.add("hidden");
            botaoMenu.setAttribute("aria-expanded", "false");
        }

    });

});


// carrosel
const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

let slideAtual = 0;


function mostrarSlide(indice) {

    slides.forEach(function (slide, i) {

        slide.classList.remove("opacity-100", "z-10");
        slide.classList.add("opacity-0");

        indicadores[i].classList.remove("bg-blue-700");
        indicadores[i].classList.add("bg-gray-400");
    });

    slides[indice].classList.remove("opacity-0");
    slides[indice].classList.add("opacity-100", "z-10");

    // Destaca a bolinha correspondente
    indicadores[indice].classList.remove("bg-gray-400");
    indicadores[indice].classList.add("bg-blue-700");

    slideAtual = indice;
}

botaoProximo.addEventListener("click", function () {

    let proximoSlide = (slideAtual + 1) % slides.length;
    mostrarSlide(proximoSlide);
});

botaoAnterior.addEventListener("click", function () {

    let anteriorSlide = (slideAtual - 1 + slides.length) % slides.length;
    mostrarSlide(anteriorSlide);
});

indicadores.forEach(function (indicador, indice) {

    indicador.addEventListener("click", function () {
        mostrarSlide(indice);
    });
});

mostrarSlide(0);

setInterval(function () {
    let proximoSlide = (slideAtual + 1) % slides.length;
    mostrarSlide(proximoSlide);
}, 5000);


// modal
const modal = document.getElementById("modalAviso");
const abrirModal = document.getElementById("abrirModal");

function mostrarModal() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function esconderModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");

}

abrirModal.addEventListener("click", mostrarModal);

modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
        esconderModal();
    }
});

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {
        esconderModal();
    }
});

mostrarModal();


// formulario
const formulario = document.getElementById("formAgendamento");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();
    const nome = document.getElementById("nome").value;
    alert("Solicitação recebida! Obrigado, " + nome + ".");
    formulario.reset();

});
