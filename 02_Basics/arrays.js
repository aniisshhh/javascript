const myArray = [0, 10, 2, 3, 4, 5]
const myHeros = [ "anish", "shaktiman"]
const myarray2 = new Array(1, 2, 3, 4)

console.log(myArray[1])
console.log(myHeros[1])
console.log(myarray2[1])


//Arrays method
myArray.push(55)
myArray.pop()
myArray.unshift(9)
myArray.shift()
console.log(myArray.includes(9));
console.log(myArray.indexOf(9));
const newArr = myArray.join();

console.log(myArray);
console.log(newArr);

// slice, splice
console.log("A ",myArray);
const myn1 = myArray.slice(1,3)

console.log(myn1);

console.log("B ",myArray);
const myn2 = myArray.splice(1,3)

console.log(myn2);

