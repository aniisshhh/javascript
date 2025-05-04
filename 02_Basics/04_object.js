//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "anish"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email : " Someone@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Anish",
            lastname : "Gupta",
        }
    }
}
// console.log(regularUser.email)
// console.log(regularUser.fullname)

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "c", 4 : "d"}

//const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1 , obj2)
const obj3 = {...obj1 , ...obj2};
console.log(obj3);

//++++++++++++++++++++++++++++++

const user = [
    {
        gmail : "anish@gmail.com",
        id : 1,

    },
    {
        gmail : "anish@gmail.com",
        id : 1,

    }
]