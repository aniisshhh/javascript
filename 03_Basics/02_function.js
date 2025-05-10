const user ={
    username : "Anish",
    price : 199,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)


// function with array
 
const newarray = [100, 200, 300, 400]
function returnsecondvalue(getArray){
    return getArray[1];
}
console.log(returnsecondvalue(newarray))