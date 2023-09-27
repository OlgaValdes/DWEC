'use strict';
let num = parseInt(prompt("Introduce un número:"));
let numCheck = parseInt(prompt("Adivina el número:"));
let check;
while(num != numCheck)
{
    check = num > numCheck ? alert("El número introducido es más pequeño que el correcto.") : alert("El número introducido es más grande que el correcto.")
    numCheck = parseInt(prompt("Introduce otro número:"));
}
alert("Has adivinado el número.");