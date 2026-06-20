const User = {
    _email: 'babar@king.com',
    _password: "a637bc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const babar = Object.create(User)
console.log(babar.email);
