const user = {
    username: "Amir",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}



console.log(user.username)
console.log(user.getUserDetails());
// console.log(this); // in node it is {} if global is empty


function User(username, loginCount, isLoggedIn){
    this.username = username; // this = self in python
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this // if you comment this line it also works
}

const userOne = new User("Babar", 12, true)
const userTwo = new User("Ali", 11, false)

console.log(userOne.constructor);
console.log(userTwo);
