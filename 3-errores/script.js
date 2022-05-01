"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

const comprobarDni = (dni) => {
  try {
    const datos = dni.split("-");

    const resto = datos[0] % 23; //9
    if (datos[1].toUpperCase() === letras[resto]) {
      console.log("El dni es valido");
    } else {
      throw new Error("El dni no es valido");
    }
  } catch (error) {
    console.error(error.message);
  }
};
comprobarDni("32797457-d");
