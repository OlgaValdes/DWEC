'use strict';
let res;
let total = "Los números pares entre 25 al 1 son: ";
for (let i=25; i > 0; i--){
    res = (i % 2 == 0) ? total += i + " " : "";
}
alert(total);