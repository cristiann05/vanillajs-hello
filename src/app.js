/* eslint-disable */
import "bootstrap";

window.onload = function() {
  //write your code here

  let quien = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let accion = ["se comió", "orinó", "aplastó", "rompió"];
  let que = ["mi tarea", "mi teléfono", "el coche"];
  let cuando = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras estaba rezando"
  ];

  function excusarandom() {
    let quienlohizo = Math.floor(Math.random() * quien.length);
    let accionhecha = Math.floor(Math.random() * accion.length);
    let quehizo = Math.floor(Math.random() * que.length);
    let cuandolohizo = Math.floor(Math.random() * cuando.length);

    let excusa =
      quien[quienlohizo] +
      " " +
      accion[accionhecha] +
      " " +
      que[quehizo] +
      " " +
      cuando[cuandolohizo] +
      ".";

    document.getElementById("excusa").innerHTML = excusa;
  }

  excusarandom();
};
