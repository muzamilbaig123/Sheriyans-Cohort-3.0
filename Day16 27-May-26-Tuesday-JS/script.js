// let myBio = {name: "Muzamil", age: 22, email: "muzamilbaig24@gmail.com"}
// let user1Bio = {name: "ali", age: 20, email: "user1@gmail.com"}


// let users = [myBio, user1Bio];

// // console.log(users[users.length - 1])

// users[0].name = "Baig Shab"

// delete users[0];

// console.log(users)


// =======Callback===========

// function footPath (f) {
//     console.log(`I am footpath and my width is ${f}`)
// }


// footPath()

// console.log(`------------------`)

// function mainRoad (width , cb) {
//     console.log(`This is main road, total width of road is ${width}`)
// }




// function websiteComplete (webName, callback) {
//     console.log(`Your ${webName} is ready`)
//     callback()
// }

// function taskDone () {
//     console.log(`Task is completed`)
// }


// websiteComplete("E Commerse", taskDone)







// anoimous callback
// function welcomeUser (name, cb) {
//     console.log(`Welcome ${name}`)
//     cb()
// }


// welcomeUser("Muzamil Baig", function () {
//     console.log("Login Successfllt")
// })





// first class funcation

// let a = function () {
//     console.log("Hello")
// }

// a()



function dada () {
 
     console.log("I Am dada.....")

     function papa () {
        console.log("I Am Papa...")

        function child () {
            console.log("I Am Child...")

            return "Girl Firend"
        }

        return child

     }


     return papa

}

dada()()();