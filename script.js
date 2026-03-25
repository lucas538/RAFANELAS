// Teste de conexão (Verifique no F12 se isso aparece)
console.log("O arquivo script.js foi carregado com sucesso!");

let vendas = 9800;

function atualizarContador() {
    const el = document.getElementById('contador');
    if (el) {
        vendas += Math.floor(Math.random() * 5) + 1;
        el.innerText = "🔥 " + vendas.toLocaleString('pt-BR') + " panelas vendidas hoje!";
    }
}

// Inicia o contador imediatamente
setInterval(atualizarContador, 50);

// Funções dos botões (Uso o 'window' para garantir que o HTML as encontre)
window.zoar = function() {
    alert("CUIDADO: Você acaba de contratar o seguro de vida do Rafa. Valor: 1 panela por mês.");
};

window.comprar = function() {
    alert("ERRO: O Rafa deu nó em pingo d'água e o estoque sumiu!");
};