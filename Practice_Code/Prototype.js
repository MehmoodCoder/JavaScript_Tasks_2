// Task 

// let myName = "Babar     "
// let mychannel = "King     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.name = function(){
    console.log(`Babar is present in all objects`);
}

Array.prototype.sayBabar = function(){
    console.log(`Babar says hello`);
}

heroPower.name()
myHeros.name()
myHeros.sayBabar()
// heroPower.sayBabar() 

// it raise error because in js everything is Object and Arrays, Strings qnd may be Functions are child of Object





//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// inheritance


const User = {
    name: "Babar",
    email: "king@blabla.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // old
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Babar is King     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
// remember it is a prototype on Strings so its only work on Strings

anotherUsername.trueLength()
"Babar   ".trueLength()
"Amir".trueLength()
