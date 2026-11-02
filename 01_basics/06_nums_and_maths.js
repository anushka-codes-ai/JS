const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8954
console.log(otherNumber.toPrecision(3));// understand?

const hunderds = 1000000
console.log(hunderds.toLocaleString());// ac to us standard.by default
console.log(hunderds.toLocaleString('en-IN'));

//+++++++++++++         Maths         +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1)); // top value
// console.log(Math.ceil(4.0)); // same value 4
// console.log(Math.floor(4.99)); // low
// console.log(Math.min(4.6,4,3,8));
// console.log(Math.max(4.6));

console.log(Math.random());// value b/w 0 and 1
console.log((Math.random()*10) + 1 );// 1 value get shift // 10 mai 2 value shift
// 0.04 become  0.4 => cause avoid by +1
console.log(Math.floor(Math.random()*10) + 1 );// 0.1 => 0{add 1 to avoid 0}


const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1 ) +min) );
