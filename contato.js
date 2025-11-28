/* Evento load */
window.addEventListener("load", () => {});

/* Quando o HTML terminar de carregar, será executado */
document.addEventListener("DOMContentLoaded", () => {

    /* <li> dentro da ul.contato-info */
    const itens = document.querySelectorAll(".contato-info li");

    /* Se não existir, não faz nada */
    if (itens.length === 0) return;

    itens.forEach(item => {

        /* mouseover (efeito ao passar o mouse) */
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "#e9e2b2ff";
            item.style.transform = "scale(1.05)";
            item.style.cursor = "pointer";
            item.style.transition = "0.2s";
        });

        /* mouseout (tira o efeito) */
        item.addEventListener("mouseout", () => {
            item.style.backgroundColor = "transparent";
            item.style.transform = "scale(1)";
        });
    });

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