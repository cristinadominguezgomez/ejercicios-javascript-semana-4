"use strict";

const edad = (edad) => {
  const agePromise = new Promise((resolve, reject) =>
    setTimeout(
      () => resolve(Math.round(Math.random() * 100)),
      Math.random() * 1000
    )
  );
  return agePromise;
};

const getEdad = async () => {
  try {
    const resultado = await edad();

    if (resultado < 18) {
      throw new Error(`${resultado} es menor`);
    } else if (resultado % 2 === 0) {
      setTimeout(() => {
        console.log(`${resultado} es par`);
      }, 1000);
    } else {
      setTimeout(() => {
        console.log(`${resultado} es impar`);
      }, 2000);
    }
  } catch (error) {
    console.error(error.message);
  }
};
getEdad();
