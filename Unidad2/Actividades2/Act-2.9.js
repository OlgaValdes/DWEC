'use strict';
let num = parseInt(prompt("Introduce un número:"));
let res = num;
if(num != 1)
{
    while(num > 1)
    {
        num --;
        res *= num;
    }
alert("El factorial del número introducido es: " + res);
}
else
{
    alert("El factorial del número introducido es: " + num); 
}
