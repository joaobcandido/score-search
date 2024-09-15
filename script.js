document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let cpf = document.getElementById("cpf").value;
    let resultado = document.getElementById("resultado");

    if (cpf.length !== 11 || isNaN(cpf)) {
        resultado.textContent = "Por favor, insira um CPF válido com 11 dígitos numéricos.";
        resultado.style.color = "red";
        return;
    }

    // Simulando uma busca de score (dados fictícios)
    const scores = {
        "12345678901": 299,
        "12345678902": 499,
        "12345678903": 699,
        "12345678904": 799,
    };

    if (cpf in scores )  {
        if(scores[cpf] < 300){
        resultado.textContent = `CPF encontrado! Score: ${scores[cpf]},  alto risco de inadimplência. `;
        resultado.style.color = "red";
        }
        else if(scores[cpf] < 500){
            resultado.textContent = `CPF encontrado! Score: ${scores[cpf]}, Risco de inadimplência moderado.`;
            resultado.style.color = "black";
        }
        else if(scores[cpf] < 700){
            resultado.textContent = `CPF encontrado! Score: ${scores[cpf]}, Bom score, mas ainda há espaço para melhorar.`;
            resultado.style.color = "black";
        } else {
            resultado.textContent = `CPF encontrado! Score: ${scores[cpf]},  Excelente score, com baixas chances de inadimplência.`;
            resultado.style.color = "green";
        }
    } else {
        resultado.textContent = "CPF não encontrado ou sem score disponível.";
        resultado.style.color = "red";
    }
});
