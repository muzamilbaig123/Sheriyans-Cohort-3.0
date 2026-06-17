// setAttributes
// getAttributes
// removeAttributes
// hasAttributes

// Attributes vs properties

// Attributes pincipal keyword in html




// let h2 = document.querySelector("#id1");
// let res = h2.getAttribute("class");

// h2.setAttribute("width", 200);

// let get = h2.getAttribute("width")


// h2.removeAttribute("c3")
// console.log(get)

// let att = document.querySelectorAll("div")[0].getAttribute("data-user");
// console.log(att)





// ============creating inserting, updaing and deleted===========

let input = document.querySelectorAll("input")[0];
let btn = document.querySelectorAll("button")[0];
let box = document.querySelectorAll("div")[0];


btn.addEventListener("click", () => {
   console.log(input.value)
   console.log(input.getAttribute("value"))
})

console.log(btn)
console.log(box)




let footer = document.createElement("footer");
document.body.appendChild(footer)
console.log(footer)