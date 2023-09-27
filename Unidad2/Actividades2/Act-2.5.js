'use strict';
let num = parseInt(prompt("Introduce un número:"));
let res = (num % 2 == 0 || num == 0) ? "par" : "impar";
let mul = (num % 3 == 0) ? ", es múltiplo de 3 " : " ";
let multi = (num % 5 == 0) ? ", es múltiplo de 5 " : " ";
alert("El número " + num + " es " + res + mul + multi);