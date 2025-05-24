document.getElementById("energia-custo").addEventListener("input", function() {
    document.getElementById("valor-energia").innerText = `R$${this.value}`;
});

function calcularEconomia() {
    const valorEnergia = document.getElementById("energia-custo").value;
    const economiaMensal = valorEnergia * 0.75;
    const economiaAnual = economiaMensal * 12;
    const investimentoMin = economiaAnual * 5; // Estimativa mínima
    const investimentoMax = economiaAnual * 7; // Estimativa máxima
    const economiaTotal = economiaMensal * 12 * 30; // 30 anos

    document.getElementById("investimento").innerText = `R$ ${investimentoMin.toFixed(2)} a R$ ${investimentoMax.toFixed(2)}`;
    document.getElementById("economia-mensal").innerText = `R$ ${economiaMensal.toFixed(2)}`;
    document.getElementById("economia-total").innerText = `R$ ${economiaTotal.toFixed(2)}`;

    // Esconde a página da calculadora e exibe a página de resultados
    document.getElementById("calculator-page").style.display = "none";
    document.getElementById("result-page").style.display = "block";
}

function voltar() {
    // Retorna para a página da calculadora
    document.getElementById("calculator-page").style.display = "flex";
    document.getElementById("result-page").style.display = "none";
}
