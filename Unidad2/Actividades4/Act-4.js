'use strict';
let num = prompt("Introduce un número:");
let res = (isNaN(num)) ? " no es un número." : " es un número.";
alert("El valor " + num + res);