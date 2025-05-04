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
console.log(regularUser.email)
console.log(regularUser.fullname)