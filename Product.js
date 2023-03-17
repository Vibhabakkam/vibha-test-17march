window.onload = function () {
    var divFromHtml = document.getElementById("product");
    var products = JSON.parse(localStorage.getItem("userproduct"));
    
    var array = [];
  
    for (var i = 0; i < products.length; i++) {
      
      array += `<div><img src="${products[i].image}" alt="productImg" /><h2>${products[i].name}</h2><p>${products[i].price}</p><button onclick='addToCart(${JSON.stringify(products[i])})'>Add to cart</button></div>`;
    }
  
    divFromHtml.innerHTML = array;
  };

  function addToCart(pro){
    var product =JSON.stringify(pro);
    var dataFromLs =JSON.parse(localStorage.getItem("userData"));
    var currentUser =JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser){
        var allUsers =[];
        for( var i=0; i<dataFromLs.length; i++){
            if(dataFromLs[i].email === currentUser["current-user-email"]){
                var newObj = dataFromLs[i];
                newObj["cartProducts"] = newObj["cartProducts"] || [];
                newObj["cartProducts"].push(JSON.parse(product));
                allUsers.push(newObj);
            }
            else{
                allUsers.push(dataFromLs[i]);
            }
        }
        localStorage.setItem("userData",JSON.stringify(allUsers));
        alert("Product added to cart  sucessfully");
    }
    else{
        alert("login first to add product into cart");
    }
} 
  
  

