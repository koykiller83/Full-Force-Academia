/* Evento load */
window.addEventListener("load", () => {});

/* Quando o HTML terminar de carregar, será executado */
document.addEventListener("DOMContentLoaded", () =>
{
    // Removendo o título H2
    const titulo_pagina = document.querySelector(".container-modalidades h2");
    if (titulo_pagina) titulo_pagina.remove();

    // Removendo o parágrafo abaixo do H2 e o vídeo junto
    const paragrafo_video = document.querySelector(".container-modalidades .paragrafo");
    if (paragrafo_video) paragrafo_video.remove();

        
    const novop = document.createElement("p");// Cria um novo parágrafo e elemento
    novop.className = "paragrafo-imc";
    novop.textContent = "Encontre o exercício perfeito para você! O seu Índice de Massa Corporal (IMC) é uma ferramenta valiosa para a recomendação da modalidade de atividade física que mais combina com você. Treinar do jeito certo é a chave para evoluir com segurança e motivação.";
   
    const calculadora = document.querySelector(".calculadora-imc"); // Inserir acima da calculadora
    if (calculadora) {
            calculadora.insertAdjacentElement("beforebegin", novop);
        }


    /* Botão da Calculadora IMC */
    const btn = document.getElementById("btnCalcular");

    /* Verificação de segurança */
    if (btn)
        {
            btn.addEventListener("click", function () {
            /* Converte peso para casas decimais. */
            const peso = parseFloat(document.getElementById("peso").value);
            
            /* Converte altura para casas decimais. */
            const altura = parseFloat(document.getElementById("altura").value);

            /* Mensagem de erro se tiver campo vazio */
            if (!peso || !altura) {
                
                document.getElementById("resultado").textContent = "Preencha todos os campos!";
                return;
            }

            /* Calcula o IMC */
            const imc = peso / (altura * altura);
            
            let classificacao = "";

            /* Compara o IMC e compara */
            if (imc < 18.5) classificacao = "Abaixo do peso";
            else if (imc < 24.9) classificacao = "Peso normal";
            else if (imc < 29.9) classificacao = "Sobrepeso";
            else if (imc < 39.9) classificacao = "Obesidade";
            else classificacao = "Obesidade grave";

            /* Resultado */
            document.getElementById("resultado").textContent =
                `IMC: ${imc.toFixed(2)} - ${classificacao}`;
        });
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