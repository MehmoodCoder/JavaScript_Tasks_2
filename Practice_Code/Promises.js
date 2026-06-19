const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})




const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "babar", email: "something@blabla.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "BABAR", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// same

fetch('https://api.github.com/users/MehmoodCoder')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


// Practice


const MyPromise = new Promise( (resolve ,reject) => {
  setTimeout( () => {
    resolve({name : 'BABAR',age : 30})
  },1000)
}).then( (data) => {
  return data.name
}).then( (name) => {
  console.log(name)
}).catch((ERROR) => {
  console.log(ERROR)
})



// promise.all


// 1. Fetch
const fetchUser = fetch('https://api.github.com/users/MehmoodCoder').then(res => res.json());

// 2. Fetch
const fetchRepos = fetch('https://api.github.com/users/MehmoodCoder/repos').then(res => res.json());


Promise.all([fetchUser, fetchRepos])
  .then(([userData, repoData]) => {
    console.log("User Followers:", userData.followers);
    console.log("Total Repos:", repoData.length);
  })
  .catch((err) => {
    console.error("Something error", err);
  });
