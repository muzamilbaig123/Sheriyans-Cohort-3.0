// window.history.forward()


// Dom, Bom, Webapi, fetech, console, javascipt = v8 engine   =  browser


// Html convert to parser string browser = Dom       1
// Css convert to parser string browser = CSSOM      2
// Dom Tree + CssOM  =   Render tree


// Dom        Cssom       rendertree


// first h1 ge kar le ga
// let h1 = document.querySelector("h1").innerHTML;

// 
let h1 = document.querySelectorAll("h1")[0].innerHTML;
// let h1 = document.getElementsByTagName;

console.log(h1)


let boo = document.querySelector(".bodydiv").style.backgroundColor = "red"