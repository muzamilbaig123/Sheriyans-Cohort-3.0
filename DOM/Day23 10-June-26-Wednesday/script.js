let body = document.body;

console.log(body.childNodes)
console.log(body.children)


let h1 = document.querySelectorAll("h1")[0]
// h1.style.color = "red"
// h1 = document.querySelectorAll("h1")[0].innerHTML = "Hello How Are You"

let classCheck = h1.classList.contains("mayhello");
console.log(classCheck)

let btn = document.querySelectorAll("button")[0];
let div = document.querySelectorAll("div")[0];

let flag = true;

btn.addEventListener("click", (e) => {
   div.classList.toggle("onblub")
})