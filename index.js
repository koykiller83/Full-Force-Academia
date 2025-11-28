/* Evento load */
window.addEventListener("load", () => {});

/* Quando o HTML terminar de carregar, será executado */
document.addEventListener("DOMContentLoaded", () =>
{
   /* Botão Whatsapp */
   /* Link principal */
   const whatsappBtn = document.createElement("a");
    whatsappBtn.href = "https://wa.me/5551981606666";
   whatsappBtn.target = "_blank";
   whatsappBtn.className = "whatsapp-fixo";

   /* Ícone */
   const icone = document.createElement("i");
    icone.className = "fa-brands fa-whatsapp";

   /* Adiciona o ícone dentro do link */
   whatsappBtn.appendChild(icone);

   /* Inserir dentro do body */
   document.body.appendChild(whatsappBtn);
});

/* Função para trocar a imagem ao passar o mouse */

   window.trocarImagem = function () {
      document.getElementById("js").src = "./img/js.jpg";
   }

    window.trocarImagem2 = function () {
     document.getElementById("js2").src = "./img/js2.jpg";
   }

   window.trocarImagem3 = function () {
      document.getElementById("js3").src = "./img/js3.jpg";
   }