// object litrels
const mySym =Symbol("Key1")



const JsUser = {
    name : "Anish",
    age : 20,
    location : "Samatipur",
    email : "anishkumargupta1121@gmail.com",
    [mySym] : "myKey1",
    isLogedIn : false,
    LoginDays : ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])

JsUser.email = "anish123@gmail.com"
// Object.freeze(JsUser) // to lock the object so that we can't change anything inside it
JsUser.email = "anish@microsoft"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hellow Anisshh");
}
JsUser.greeting2 = function(){
    console.log(`hellowww, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())