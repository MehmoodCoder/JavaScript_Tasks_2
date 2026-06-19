// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

let amir = new User("Amir", "amir@blabla.com", "123")

console.log(amir.encryptPassword());
console.log(amir.changeUsername());

// behind the scene

// same


function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


let babar = new User2("babar", "king@blabla.com", "123")

console.log(babar.encryptPassword());
console.log(babar.changeUsername());
