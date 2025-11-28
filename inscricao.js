/* Evento load */
window.addEventListener("load", () => {});

/* Quando o HTML terminar de carregar, será executado */
document.addEventListener("DOMContentLoaded", () =>
{

    /* Botão WhatsApp */
    const whatsappBtn = document.createElement("a");
    whatsappBtn.href = "https://wa.me/5551981606666";
    whatsappBtn.target = "_blank";
    whatsappBtn.className = "whatsapp-fixo";

    const icone = document.createElement("i");
    icone.className = "fa-brands fa-whatsapp";

    whatsappBtn.appendChild(icone);
    document.body.appendChild(whatsappBtn);
    
    /* Focus */
    const campos = document.querySelectorAll("input");

    campos.forEach(campo =>
    {
    campo.addEventListener("focus", () =>
        {
            campo.style.backgroundColor = "#e8f5e9";
        });
    });

    /* Blur */
    campos.forEach(campo =>
    {   
    campo.addEventListener("blur", () =>
        {
        campo.style.backgroundColor = "white";

            if (campo.value.trim() === "")
            {
                campo.style.border = "2px solid red";
            }
        });
    });

    
    /* Formulário de inscrição */
    
    /* Botão entrar (Sem função por enquanto) */
    const btn_entrar = document.querySelector(".entrar-button button");

    if (btn_entrar)
        {
            btn_entrar.addEventListener("click", (e) =>
            {
                e.preventDefault();
                alert("Área de login em construção!");
            });
        }
    
    /* Validações dos campos de inscrição */
    const nome = document.getElementById("firstname");
    const sobrenome = document.getElementById("lastname");
    const email = document.getElementById("email");
    const tel = document.getElementById("number");
    const senha = document.getElementById("password");
    const confirmar_senha = document.getElementById("confirmPassword");

    /* Borda verde */
    function validarCampo(campo, condicao)
    {
        campo.style.border = condicao ? "2px solid green" : "2px solid red";
    }

    /* Campo nome */
    nome.addEventListener("input", () =>
    {
        validarCampo(nome, nome.value.length >= 3);
    });

    /* Campo sobrenome */
    sobrenome.addEventListener("input", () =>
    {
        validarCampo(sobrenome, sobrenome.value.length >= 3);
    });

    /* Campo email */
    email.addEventListener("input", () =>
    {
        const valido = email.value.includes("@") && email.value.includes(".");
        validarCampo(email, valido);
    });

    /* Campo telefone */
    tel.addEventListener("input", () =>
    {
        const somente_numeros = tel.value.replace(/\D/g, "");
        validarCampo(tel, somente_numeros.length >= 11);
    });

    /* Campo senha */
    senha.addEventListener("input", () =>
    {
        validarCampo(senha, senha.value.length >= 6);
    });

    /* Campo confirmação de senha */
    confirmar_senha.addEventListener("input", () =>
    {
        validarCampo(confirmar_senha, confirmar_senha.value === senha.value && confirmar_senha.value !== "");
    });


    /* Animação leve no botão ENVIAR com mensagem */
    const btn = document.querySelector(".continuar-button button");

    btn.addEventListener("click", (e) =>
    {
        e.preventDefault();

        const nome = document.getElementById("firstname");
        const sobrenome = document.getElementById("lastname");
        const email = document.getElementById("email");
        const tel = document.getElementById("number");
        const senha = document.getElementById("password");
        const confirma_senha = document.getElementById("confirmPassword");

        /* Verificar se algum campo está vazio */
        if (
            nome.value.trim() === "" ||
            sobrenome.value.trim() === "" ||
            email.value.trim() === "" ||
            tel.value.trim() === "" ||
            senha.value.trim() === "" ||
            confirma_senha.value.trim() === ""
        )
        {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Verificar se gênero está selecionado
        const selecao_genero = document.querySelector("input[name='gender']:checked");
        if (!selecao_genero)
        {
            alert("Por favor, selecione o gênero!");
            return;
        }

        // Verificar se as senhas conferem
        if (senha.value !== confirma_senha.value)
        {
            alert("As senhas não conferem!");
            return;
        }

        // Se tudo estiver correto
        alert("Formulário enviado com sucesso!");
    });
});