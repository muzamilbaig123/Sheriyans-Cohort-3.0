"use strict"

// function abc () {

//   console.log(this)        

// }

// abc()


// 3 type error 

// syntax error 
// refren error 
// type error


let b = 10; //let sey window me nahi ai ga 
var a = 10;
// c = 20;   //widnow obj me chaley jai ga aur agr "use strict" mode on karein gai to zara safe sey chzey check hongi 

console.log(window)








// Javascript decie karti hai This kis chez ki tarad point karey ga 
// Normal funcation this banatha hai 
// Arrow function this nahi banata vo bolta hai me global this use karun ga aur bhar ka this window hai 


let myobj = {
  firstName: "muzamil",
  lastName: "Baig",
  age: 22,
  getIntro: () => {
    console.log("Hello i am", this)  
  },
  //   getIntro: function () {
  //   console.log("Hello i am", this)    // pora obj access ho raha hai this sey
  //   this.firstName = "MUZAMIL"
  // }


  users: function () {
    () => {
      console.log(this, "I am arrow function")
    }
  } 

}

myobj.getIntro()

console.log(myobj)


