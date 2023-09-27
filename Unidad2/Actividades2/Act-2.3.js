'use strict';
let hermanos = prompt("Introduce el número de hermanos que tienes:");
let cantidad = prompt("Introduce una cantidad:");
let res = 0;
if(hermanos >= 3)
{
    res = cantidad - (cantidad * 0.15);
    alert("La cantidad es " + res);
}
else if(hermanos < 3 && hermanos != 0)
{
    res = cantidad - (cantidad * 0.05);
    alert("La cantidad es " + res);
}
else
{
    alert("La cantidad es " + cantidad);
}