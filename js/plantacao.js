//Controle de Plantação: Gerencie uma plantação com 3 tipos de frutas: maçã, banana e laranja.
// - Cada planta produz uma quantidade aleatória de frutas por semana.
// - Calcule a produção total no mês e exiba qual fruta foi mais produzida.

let maca = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let banana = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let laranja = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

let numAleatorio = Math.floor(Math.random() * (7 - 1 + 1)) + 1;

function SafraPorSemana() {
  let macaPorSemana = maca * numAleatorio;
  let bananaPorSemana = banana * numAleatorio;
  let laranjaPorSemana = laranja * numAleatorio;

  armazemDaSemana = {
    maca: macaPorSemana,
    banana: bananaPorSemana,
    laranja: laranjaPorSemana,
  };
  console.log("Safra da semana:", armazemDaSemana);
  return armazemDaSemana;
}

function safraDoMes(semanal) {
  let fatorMensal = 31 / 7;

  let armazemDoMes = {
    maca: Math.round(semanal.maca * fatorMensal),
    banana: Math.round(semanal.banana * fatorMensal),
    laranja: Math.round(semanal.laranja * fatorMensal),
  };

  console.log("Safra do mes:", armazemDoMes);
  return armazemDoMes;
}

let semanal = SafraPorSemana();

safraDoMes(semanal);

console.log(
  `Produção por dia: Maçã = ${maca}; Banana = ${banana}; Laranja = ${laranja}`
);
