"use strict";

const tiempo = (stop) => {
  let inicio = new Date();
  let segundo = 1000;
  let minuto = segundo * 60;
  let hora = minuto * 60;
  let dia = hora * 24;

  const intervalID = setInterval(() => {
    let fin = new Date();

    let tiempoPasado = fin - inicio;
    console.log("tiempoPasado", tiempoPasado);

    let dias = Math.floor(tiempoPasado / dia);

    tiempoPasado = tiempoPasado - dias * dia;
    let horas = Math.floor(tiempoPasado / hora);

    tiempoPasado = tiempoPasado - horas * hora;
    let minutos = Math.floor(tiempoPasado / minuto);

    tiempoPasado = tiempoPasado - minutos * minuto;
    let segundos = Math.floor(tiempoPasado / segundo);

    console.log(
      `Han pasado ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos desde la ejecución`
    );
  }, 5000);
};
tiempo();
