//Fetch Api

let productsObj;
async function fetchProducts(){
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json()
        productsObj = json
        
    } catch (error) {
        console.log("there was an error")
    }
}

fetchProducts();


let input = document.querySelector('#search')
let matchingProducts;

input.addEventListener('input',debounce())

function debounce (){

    let debounceTimer;
    return function(e){
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(()=>{
            console.log('productsObj called')
            matchingProducts = productsObj.filter((product)=>{
        if(e.target.value){
            return product.title.toLowerCase().includes((e.target.value).toLowerCase())
        }
    })

    const search_res = document.querySelector('#search_res')
    search_res.innerHTML = ''
    
    // console.log(matchingProducts)
    if(matchingProducts.length !== 0){
        matchingProducts.map((ele)=>{
            const li = document.createElement('li')
            li.classList.add('listItem')
            li.textContent = ele.title
            search_res.appendChild(li)
        })
    }      
        },300)
    }
     
       

}


