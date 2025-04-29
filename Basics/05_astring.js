const name =" anish"
const repoCount = 50

console.log(`my name is ${name} and my repocount is ${repoCount}`);


const gameName = new String('anishhc')

console.log(gameName[0]); 

const newString = gameName.substring(0,4)
console.log(newString);

const anotherstring = gameName.slice(-5,7)
console.log(anotherstring);

const newtrim = "    anish    "
console.log(newtrim);
console.log(newtrim.trim());

const url = "https://iiitk.ac.in/"
console.log(url.replace('iiitk', 'iitk'))
console.log(url.includes('iiitk'))
console.log(url.includes('anish'))