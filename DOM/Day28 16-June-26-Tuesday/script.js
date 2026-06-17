// ecommerse
// form create product
// productcart => read html
// update cart form

let deleteBtn = document.querySelectorAll(".deletebtn")[0];
let createProduct = document.querySelectorAll(".createPro")[0];
let form = document.querySelectorAll("form")[0];
let close = document.querySelectorAll(".close")[0];
let product = document.querySelectorAll(".container")[0];
let create = document.querySelectorAll(".create")[0];

let editIndex = null;


createProduct.addEventListener("click", (e) => {
 form.style.display = "block"
})
 

close.addEventListener("click", (e) => {
   form.style.display = "none"
})


let productArr = [];

let ui = () => {

   product.innerHTML = "";

   productArr.forEach((e, index) => {
      product.innerHTML += `
        <div class="product">
            <img src="${e.productUrl}" alt="">
            <h3>${e.productName}</h3>
            <p>${e.productDes}</p>
            <p>${e.productPrice}</p>
            <button class="updatebtn" data-index="${index}">
               update
            </button>
            <button class="deletebtn" data-index=${index}>
               delete
            </button>
        </div>
      `;
   });

}



form.addEventListener("submit", (e)=> {
   e.preventDefault()
 
   let productName = e.target[0].value;
   let productDes = e.target[1].value;
   let productPrice = e.target[2].value;
   let productUrl = e.target[3].value;

   if(productName.trim() === "" || productDes.trim() === "" || productPrice.trim() === "" || productUrl.trim() === ""){
    alert("pleae all required fields")
    return ;
   }

   let obj = {
      productName,
      productDes,
      productPrice,
      productUrl
   }

    if(editIndex === null){
   productArr.push(obj);
}else{
   productArr[editIndex] = obj;
}
   ui()
   console.log(productArr)
   form.reset()
   form.style.display = "none"

   editIndex = null;

})

  

product.addEventListener("click", (e) => {
   if(e.target.classList.contains("updatebtn")){
      
      let index = e.target.dataset.index;
editIndex = index;
      document.querySelectorAll(".updateheading")[0].innerHTML = "Update Product"
      create.innerHTML = "update"
     form.style.display = "block"


      form[0].value = productArr[index].productName
      form[1].value = productArr[index].productDes
      form[2].value = productArr[index].productPrice
      form[3].value = productArr[index].productUrl

   }

   if(e.target.classList.contains("deletebtn")){
      
      let index = e.target.dataset.index;

      productArr.splice(index, 1)

      ui()

   }



   
})