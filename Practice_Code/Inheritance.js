class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} is login successfully.`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const TEACHER = new Teacher("Teacher", "Ali@teacher.com", "1dh823")

TEACHER.logMe()
const Student = new User("Amir")

Student.logMe()

console.log(TEACHER instanceof User);
