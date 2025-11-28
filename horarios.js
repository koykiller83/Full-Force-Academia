/* Evento load */
window.addEventListener("load", () => {});

/* Quando o HTML terminar de carregar, será executado */
document.addEventListener("DOMContentLoaded", () => 
{
    const tbody = document.querySelector(".tabela tbody");

    /* Verificação de segurança para tbody*/
    if (!tbody) return;

    /* Para trabalhar com vários itens ao mesmo tempo */
    const linhas = Array.from(tbody.querySelectorAll("tr"));

    /* Variáveis para as linhas 11:00 e 21:00 */
    let linha11h = null;
    let linha21h = null;

    /* Olhando linha por linha dentro da tabela */
    linhas.forEach(linha => {

        const primeira_celula = linha.querySelector("td");
        const texto = primeira_celula ? primeira_celula.textContent.trim() : "";
        
        if (texto === "11:00") linha11h = linha;

        if (texto === "21:00") linha21h = linha;
    });

    /* Função para criar uma nova linha */
    function mensagem_da_linha(texto) {

        const tr = document.createElement("tr");
        const td = document.createElement("td");

        td.colSpan = 6;

        /* Adicionando a mensagem */
        td.textContent = texto;

        /* Estilizando */
        td.style.background = "#f1c04b";
        td.style.color = "#000";
        td.style.fontWeight = "bold";
        td.style.padding = "12px";
        td.style.border = "1px solid #000";
        td.style.borderRadius = "5px";
        td.style.textAlign = "center";

        /* Coloca a célula dentro da linha */
        tr.appendChild(td);

        /* Retorna a linha já pronta */
        return tr;
    }

    /* Verificando se a linha existe, existindo adiciona nova linha */
    if (linha11h) {
        const intervalo = mensagem_da_linha("Intervalo. Sem atividades coletivas entre 12:00 e 13:00");

        linha11h.insertAdjacentElement("afterend", intervalo);
    }

    /* Verificando se a linha existe, existindo adiciona nova linha */
    if (linha21h) {
        const aviso = mensagem_da_linha("Não disponibilizamos atividades coletivas após as 21:00");

        linha21h.insertAdjacentElement("afterend", aviso);
    }
       
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