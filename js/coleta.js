//Sistema de Coleta de Recicláveis: Simule um sistema onde um caminhão de recicláveis coleta plástico, vidro e papel em 5 bairros.
// - Cada bairro tem uma quantidade aleatória de cada material.
// - Mostre o total de recicláveis coletados em cada bairro e o material mais comum.

//Essa função cuida de gerar numeros aleatorios para cada tipo de lixo quando eu a chamo
function gerarValor(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let caminhaoDoLixo = {
  bairro1A: {
    vidro: gerarValor(1, 10),
    papel: gerarValor(7, 48),
    plastico: gerarValor(4, 80),
  },
  bairro2B: {
    vidro: gerarValor(1, 10),
    papel: gerarValor(7, 48),
    plastico: gerarValor(4, 80),
  },
  bairro3C: {
    vidro: gerarValor(1, 10),
    papel: gerarValor(7, 48),
    plastico: gerarValor(4, 80),
  },
  bairro4D: {
    vidro: gerarValor(1, 10),
    papel: gerarValor(7, 48),
    plastico: gerarValor(4, 80),
  },
  bairro5E: {
    vidro: gerarValor(1, 10),
    papel: gerarValor(7, 48),
    plastico: gerarValor(4, 80),
  },
};

//Essa função cuida de somar os materiais de cada bairro, retornando um total deles.
function somarTudoPorBairro(caminhaoDoLixo) {
  let totais = {};
  for (let bairro in caminhaoDoLixo) {
    let materiais = caminhaoDoLixo[bairro];
    totais[bairro] = materiais.vidro + materiais.papel + materiais.plastico;
  }
  return totais;
}

//Essa função cuida de verificar qual material(lixo) foi mais coletado em cada bairro
function materialComum(caminhaoDoLixo) {
  let comum = {};
  for (let bairro in caminhaoDoLixo) {
    let materiais = caminhaoDoLixo[bairro];

    //essa vaerial cuida dessa comparação.
    //O object.keys tras as chaves do obj "materiais" (vidro, plastico, papel)
    // já o reduce percorre pelos itens do objeto
    let maiorMaterial = Object.keys(materiais).reduce((a, b) =>
      materiais[a] > materiais[b] ? a : b
    );
    comum[bairro] = maiorMaterial;
  }
  return comum;
}

console.log(">>>>>>> Coleta de Recicláveis <<<<<<<<");
console.log("Dados de coleta:", caminhaoDoLixo);

let totais = somarTudoPorBairro(caminhaoDoLixo);
console.log("Totais por bairro:", totais);

let comumGlr = materialComum(caminhaoDoLixo);
console.log("Materiais comuns por bairro:", comumGlr);
