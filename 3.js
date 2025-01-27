

const calcularFaturamento = (dados) => {
    const diasValidos = dados.dias.filter((valor) => valor > 0);
    const menorValor = Math.min(...diasValidos);
    const maiorValor = Math.max(...diasValidos);
    const mediaMensal = diasValidos.reduce((acc, valor) => acc + valor, 0) / diasValidos.length;
    const diasAcimaMedia = diasValidos.filter((valor) => valor > mediaMensal).length;

    console.log("Menor valor:", menorValor);
    console.log("Maior valor:", maiorValor);
    console.log("Dias acima da média:", diasAcimaMedia);
};


const faturamento = {
    dias: [0, 100, 200, 0, 300, 400, 0, 50, 600, 0, 700, 800, 0, 0, 0],
};

calcularFaturamento(faturamento);