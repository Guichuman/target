const faturamento = [1000, 2000, 1500, 0, 5000, 2500, 0, 3000, 6000];

function calcularFaturamento(faturamento) {
    let diasComFaturamento = faturamento.filter(f => f > 0);
    let menor = Math.min(...diasComFaturamento);
    let maior = Math.max(...diasComFaturamento);
    let media = diasComFaturamento.reduce((a, b) => a + b, 0) / diasComFaturamento.length;
    let diasAcimaMedia = diasComFaturamento.filter(f => f > media).length;

    return {
        menorFaturamento: menor,
        maiorFaturamento: maior,
        diasAcimaMedia: diasAcimaMedia
    };
}

console.log(calcularFaturamento(faturamento));
