let itemTotal = 0;

function addToCart(product) {
    itemTotal += 1;
    const cartTotal = document.querySelector('.total');
    cartTotal.innerText = itemTotal;    
}


function toggleSize(){

    let smSize = document.querySelector('.size-s');
    let mdSize = document.querySelector('.size-m');
    let lgSize = document.querySelector('.size-l');

    let productSize = document.querySelector('h3 .selected-size');

    smSize.addEventListener("click", function(event){
        smSize.classList.toggle('selected-size');
        productSize.innerText = smSize.innerText;
    });
    mdSize.addEventListener("click", function(event){
        mdSize.classList.toggle('selected-size');
        productSize.innerText = mdSize.innerText;
    });
    lgSize.addEventListener("click", function(event){
        lgSize.classList.toggle('selected-size');
        productSize.innerText = lgSize.innerText;
    });

    
    console.log(selectedSize);

}

toggleSize();