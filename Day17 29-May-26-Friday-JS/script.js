/* How JS is work

Javasript is a single thread scripting language ju ke syncronasly chalti hai
(Global Excucation Context)

1st Memory Creation      2nd code excucation
let a;                   a = 10;
let b;                   a = 20;
funcation                Function Excecation Context 


At a time one process hota hai sync

synchronous
order me chlti hai 

asynchronous 
unorder me chalti hai 




*/


// Hosting

// console.log(b)    //
// console.log(a)    // undefine

// var a = 10;
// let b = 20;

// Lexical Enviroment  apney parent ka global scope use kar sakta hai child function me access ho sakta hai
// function greet() {
//   let age = 22; //access ho pa raha hai is liye Lexical Env

//   function hi() {
//     console.log(`This is my age ${age}`);
//   }

//   return hi();
// }

// greet();

// stack over flow
// var     //global scope
// const   // block scope
// let     // block scope

// Lexical scope
// Lexical enviromnet
// Cloursers



// Scope Chaning
function parent() {
  let user = "Nadeem Baig";

  function child() {
    let childName = "Child Baig";
    console.log(`Parent Name ${user}`);
    console.log(`Child Name ${childName}`);

    function grandChildName() {
      let grandChildName = "Grand Child Baig";
      console.log(`Parent Name ${grandChildName}`);
    }

    return grandChildName

  }


  return child
}


parent()()()
