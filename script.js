/* =====================================================================
   script.js — Portfólio Eduarda
   Responsabilidades:
     1. Alternar tema claro/escuro e lembrar a escolha do usuário.
     2. Abrir/fechar o menu responsivo em telas pequenas.
     3. Validar e simular o envio do formulário de contato.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------------------------------------------------------------
     1) TEMA CLARO / ESCURO
     A preferência é salva no localStorage para persistir entre visitas.
  --------------------------------------------------------------- */
  var htmlEl = document.documentElement;
  var themeToggleBtn = document.getElementById("themeToggle");
  var iconSun = document.getElementById("iconSun");
  var iconMoon = document.getElementById("iconMoon");

  function aplicarTema(tema) {
    htmlEl.setAttribute("data-theme", tema);
    // Alterna qual ícone (sol/lua) fica visível
    if (tema === "dark") {
      iconSun.style.display = "none";
      iconMoon.style.display = "inline";
    } else {
      iconSun.style.display = "inline";
      iconMoon.style.display = "none";
    }
  }

  // Recupera tema salvo, ou usa a preferência do sistema operacional como padrão
  var temaSalvo = localStorage.getItem("portfolio-tema");
  if (!temaSalvo) {
    temaSalvo = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  aplicarTema(temaSalvo);

  themeToggleBtn.addEventListener("click", function () {
    var temaAtual = htmlEl.getAttribute("data-theme");
    var novoTema = temaAtual === "dark" ? "light" : "dark";
    aplicarTema(novoTema);
    localStorage.setItem("portfolio-tema", novoTema);
  });

  /* ---------------------------------------------------------------
     2) MENU RESPONSIVO (hambúrguer em telas pequenas)
  --------------------------------------------------------------- */
  var menuToggleBtn = document.getElementById("menuToggle");
  var mainNav = document.getElementById("mainNav");

  menuToggleBtn.addEventListener("click", function () {
    var aberto = mainNav.classList.toggle("open");
    menuToggleBtn.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  // Fecha o menu automaticamente ao clicar em um link (boa prática em mobile)
  var linksMenu = mainNav.querySelectorAll(".nav-link");
  linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
      menuToggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------------------------------------------------------
     3) FORMULÁRIO DE CONTATO — validação + simulação de envio
  --------------------------------------------------------------- */
  var form = document.getElementById("contactForm");
  var modal = document.getElementById("successModal");
  var closeModalBtn = document.getElementById("closeModal");

  var campoNome = document.getElementById("nome");
  var campoEmail = document.getElementById("email");
  var campoMensagem = document.getElementById("mensagem");

  // Expressão regular simples para validar formato de e-mail (ex: usuario@dominio.com)
  var regexEmail = /^[^\s@]+@(?:[a-zA-Z0-9-]+\.)+(?:(?:com|net|org|gov|edu|mil|info|biz|co|io)(?:\.[a-z]{2})?|[a-z]{2})$/i;

  function mostrarErro(campo, elementoErro, mensagem) {
    campo.closest(".form-field").classList.add("invalid");
    elementoErro.textContent = mensagem;
  }

  function limparErro(campo, elementoErro) {
    campo.closest(".form-field").classList.remove("invalid");
    elementoErro.textContent = "";
  }

  form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // impede o recarregamento da página (é uma simulação de envio)

    var nome = campoNome.value.trim();
    var email = campoEmail.value.trim();
    var mensagem = campoMensagem.value.trim();
    var formularioValido = true;

    // Validação: nome preenchido
    if (nome === "") {
      mostrarErro(campoNome, document.getElementById("erroNome"), "Por favor, informe seu nome.");
      formularioValido = false;
    } else {
      limparErro(campoNome, document.getElementById("erroNome"));
    }

    // Validação: e-mail preenchido e em formato válido
    if (email === "") {
      mostrarErro(campoEmail, document.getElementById("erroEmail"), "Por favor, informe seu e-mail.");
      formularioValido = false;
    } else if (!regexEmail.test(email)) {
      mostrarErro(campoEmail, document.getElementById("erroEmail"), "Informe um e-mail válido (ex: usuario@dominio.com).");
      formularioValido = false;
    } else {
      limparErro(campoEmail, document.getElementById("erroEmail"));
    }

    // Validação: mensagem preenchida
    if (mensagem === "") {
      mostrarErro(campoMensagem, document.getElementById("erroMensagem"), "Escreva uma mensagem antes de enviar.");
      formularioValido = false;
    } else {
      limparErro(campoMensagem, document.getElementById("erroMensagem"));
    }

    if (!formularioValido) {
      return; // interrompe o envio até que todos os campos estejam corretos
    }

    // Simulação do envio: como não há servidor/back-end nesta atividade,
    // apenas limpamos o formulário e exibimos a confirmação.
    form.reset();
    modal.hidden = false;
  });

  closeModalBtn.addEventListener("click", function () {
    modal.hidden = true;
  });

  // Fecha o modal também ao clicar fora da caixa
  modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
      modal.hidden = true;
    }
  });

  /* ---------------------------------------------------------------
     4) Ano dinâmico no rodapé
  --------------------------------------------------------------- */
  document.getElementById("anoAtual").textContent = new Date().getFullYear();
});
