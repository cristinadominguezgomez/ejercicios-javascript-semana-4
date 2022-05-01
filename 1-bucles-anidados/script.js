"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];
catalogo.sort((a, b) => a.localeCompare(b));

const posiblesCombinacionesPizzas = (catalogo) => {
  const pizza = [];

  for (let i = 0; i < catalogo.length; i++) {
    for (let j = 0; j < catalogo.length; j++) {
      if (
        catalogo[i] < catalogo[j] &&
        catalogo[i] !== undefined &&
        catalogo[j] !== undefined
      ) {
        pizza.push(catalogo[i] + "-" + catalogo[j]);
      }
    }
  }
  return pizza;
};
const totalCombinacionesPizzas = posiblesCombinacionesPizzas(catalogo);

const tiposPizzasSinRepeticion = [...new Set(totalCombinacionesPizzas)];
console.log(tiposPizzasSinRepeticion);
