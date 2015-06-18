var productList = document.getElementsByTagName("tbody")[1].children;

var name = "";
productList.forEach(function(product){
    console.log(product);
    if(product === "tr.even" || product === "tr.odd"){
        name = product.childNodes[1].h3.innerText;
    }
});

//.getElementsByTagName('tbody').style.border = "thick solid #FFC700;
console.log("productList", productList);
