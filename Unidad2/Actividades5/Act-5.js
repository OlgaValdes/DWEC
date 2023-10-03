'use strict';
let nombre = prompt("Introduce tu nombre:");
let apellidos = prompt("Introduce tus apellidos:");
let salario = parseFloat(prompt("Introduce tu salario:"));
let edad = parseInt(prompt("Introduce tu edad:"));

if(salario >= 1000 && salario <= 2000)
{
    if(edad > 45)
    {
        salario = salario * 1.03;
    }
    else
    {
        salario = salario * 1.10;
    }
}

if(salario < 1000)
{
    if(edad < 30)
    {
        salario = 1100;
    }
    else if(edad >= 30 && edad <= 45)
    {
        salario = salario * 1.03;
    }
    else
    {
        salario = salario * 1.15;
    }
}

alert("Nombre: " + nombre + "\n Apellidos: " + apellidos + "\n Salario: " + salario.toFixed(2) + "\n Edad:" + edad);