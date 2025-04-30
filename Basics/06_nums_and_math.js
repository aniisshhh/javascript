const score = 500
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); //for conversion of number into string
console.log(balance.toString().length); // finding the length of thte the string
console.log(balance.toFixed(2)); // for precision upto 2 digit

const anothernumber = 23.4494
console.log(anothernumber.toPrecision(4)) // for overall significant digit

const hundred = 100000000
console.log(hundred.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5)); //
console.log(Math.round(4.501));
console.log(Math.ceil(4.001));
console.log(Math.floor(4.9999));
console.log(Math.min(12,33,44,58,57));
console.log(Math.max(22,33,44,55,66,77));
console.log(Math.random()); // any random value between 0 and 1
console.log(Math.random()*10 +1);
