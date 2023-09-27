'use strict';
let num = parseInt(prompt("Introduce un número:"));
let res = (num % 2 == 0 || num == 0) ? "par" : "impar";
alert('El número ' + num + ' es ' + res);