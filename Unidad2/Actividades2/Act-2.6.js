'use strict';
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let ope = prompt("Introduce el carácter de la operación (+, -, * o /):");
let res;
switch (ope) {
    case "+":
        res = num1 + num2;
        break;
    case "-":
        res = num1 - num2;
        break;
    case "*":
        res = num1 * num2;
        break;
    case "/":
        res = num1 / num2;
        break;
    default:
        alert("Operación incorrecta.");
}
alert("El resultado es: " + num1 + ope + num2 + "=" + res);
