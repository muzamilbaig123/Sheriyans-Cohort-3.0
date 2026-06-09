// "use strict"
// ==========This==========
// normal function me use hota hai
// object me use hota hai this 
// arrow function me use hota hai div 
// eventlistner me use hota hai div 

// function greet () {
//     console.log(this)
// }

// greet()


// const obj = {
//     nmae: "muzamil",
//     objFun () {
//         console.log(this.nmae)
//     }
// }

// obj.objFun()


// const btn = document.getElementsByTagName("button")[0];

// btn.addEventListener("click", function () {
//     console.log(btn)
//     console.log(this)
// })

// const king = () => {
//     console.log(this)
// }

// king()


// Arrow function bhar vala this use karta hai aur normal function apna this bana tha hai 



// "use strict"
function hello () {
    console.log(this)
}
hello()


const obj = {
    name: "Muzamil Bhai"
}


const myName = () => {
    console.log(this)
}

myName()