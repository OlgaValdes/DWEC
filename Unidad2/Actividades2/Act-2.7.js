'use strict';
let num;
let res = 0;
while(num != 0)
{
    num = parseInt(prompt("Introduce un número:"));
    res += num;
}
alert("El total de la suma es: " + res);