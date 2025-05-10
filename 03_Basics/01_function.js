function addTwoNums(a,b) {
    console.log(a + b);
}
addTwoNums(3,2)
const result= addTwoNums(2,4)
console.log("Result" , result);

function logInUserMessage(username){
    if(!username){
        console.log("please enter a user name");
        return;
    }
    return `${username} just logged in`
}
//console.log(logInUserMessage("Anish"))
console.log(logInUserMessage())