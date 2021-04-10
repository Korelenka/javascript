'use strict';
let n=98 ;
let arr = n.toString().split('').map(Number)
console.log(arr.reduce( (a,b) => a+b ));

let m=98;
let sum = m % 10 + (m - m % 10) / 10;
console.log(sum);


let a = 3, b = 5;
b = [a, a = b][0]
console.log(a,b);

a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

let c = 3, d = 5, g = 8;
let res = 2*(c*d) + (d*g) + (c*g);
console.log(res);

let start = 5; 
let end = 6;
let between = (start < end) ? end - start : 1; 
console.log(between)

//Даны 2 переменные типа number start и end.
//Если start меньше end переменной between присвоить значение end - start,
//в противном случае -1