
const calculaPercentual = (faturamento) => {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    const percentuais = Object.entries(faturamento).map(([estado, valor]) => ({
        estado,
        percentual: (valor / total) * 100,
    }));

    percentuais.forEach(({ estado, percentual }) =>
        console.log(`${estado}: ${percentual.toFixed(2)}%`)
    );
};


const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

calcularPercentual(faturamentoMensal);