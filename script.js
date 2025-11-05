// Interatividade do botão
const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  mensagem.classList.toggle("oculto");
});

// Simulação de envio de formulário
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Obrigada por testar, Erika 😊");
  form.reset();
});