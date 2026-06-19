function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // we say it that don't use your own this
   
    this.email = email
    this.password = password
}

const king = new createUser("Babar King", "king@blabla.com", "123")
console.log(king);
