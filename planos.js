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