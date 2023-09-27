'use strict';
let ciudad = prompt("Introduce dónde vives:");
let edad = prompt("Introduce tu edad:");
let carnet = (ciudad == "Alicante" && (edad >= 18 || edad <= 35)) ? 
"Puedes acceder al carnet de empresarios emprendedores." : "No puedes acceder al carnet de empresarios emprendedores.";
alert(carnet);