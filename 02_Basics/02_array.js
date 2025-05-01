const marvelheroes = ["thor", "ironman", "spiderman"]
const dcheroes =["superman", "flash", "batman"]
//marvelheroes.push(dcheroes)
//console.log(marvelheroes)
//console.log(marvelheroes[3][2])

//const allheroes = marvelheroes.concat(dcheroes)
//console.log(allheroes);

const allnewheroes = [...marvelheroes, ...dcheroes]
console.log(allnewheroes);

const anotherarray = [1,2,3,[4,5], 6,7,[8,9,[10,11,12]]]
const real_another_array1 = anotherarray.flat(1)
const real_another_array2 = anotherarray.flat(Infinity)
console.log(real_another_array1);
console.log(real_another_array2);

console.log(Array.isArray("Anish"));
console.log(Array.from("Anish"));
console.log(Array.from({name : "Anish"})) //intresting, it won't be able to convert this type so it wil give empty bracket

const score1 =100
const score2 =200
const score3 =300
console.log(Array.of(score1,score2,score3)); // to make array from number  
