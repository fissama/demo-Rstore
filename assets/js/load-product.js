const productItems = [
    {
        name: 'Product 1',
        price: 100000,
        image: './images/product-1.png',
        type: 'woman',
        description: 'This is a description of product 1'
    },
    {
        name: 'Product 2',
        price: 200000,
        image: './images/product-2.png',
        type: 'woman',
        description: 'This is a description of product 2'
    },
    {
        name: 'Product 3',
        price: 300000,
        image: './images/product-3.png',
        type: 'woman',
        description: 'This is a description of product 3'
    },
    {
        name: 'Product 4',
        price: 100000,
        image: './images/product-4.png',
        type: 'men',
        description: 'This is a description of product 4'
    },
    {
        name: 'Product 5',
        price: 200000,
        image: './images/product-5.png',
        type: 'men',
        description: 'This is a description of product 5'
    },{
        name: 'Product 6',
        price: 100000,
        image: './images/product-6.png',
        type: 'men',
        description: 'This is a description of product 6'
    },
    {
        name: 'Product 7',
        price: 200000,
        image: './images/product-7.png',
        type: 'woman',
        description: 'This is a description of product 7'
    },
    {
        name: 'Product 8',
        price: 300000,
        image: './images/product-8.png',
        type: 'woman',
        description: 'This is a description of product 8'
    },
    {
        name: 'Product 9',
        price: 100000,
        image: './images/product-9.png',
        type: 'men',
        description: 'This is a description of product 9'
    }
];

const chooseProduct = [];
function createProduct(product)
{
    //console.log());
    const productItemElem = document.createElement('div');
    //create product image
    const productImageElem = document.createElement('img');
    productImageElem.setAttribute('src', product.image);
    productItemElem.appendChild(productImageElem);
    //create product title
    const productTitleElem = document.createElement('h5');
    productTitleElem.innerHTML = product.name;
    productTitleElem.classList.add('title');
    productItemElem.appendChild(productTitleElem);
    //create product description
    const productDescriptionElem = document.createElement('small');
    productDescriptionElem.innerHTML = product.description;
    productItemElem.appendChild(productDescriptionElem);
    //create product prices
    const productPriceElem = document.createElement('p');
    productPriceElem.innerHTML = `<strong>${product.price.toLocaleString('en-US', {style : 'currency', currency : 'VND'})}</strong>`;
    productItemElem.appendChild(productPriceElem);
    //create product button
    const productButtonElem = document.createElement('button');
    productButtonElem.innerHTML = "ADD TO CART";
    productButtonElem.setAttribute('class','btn btn-primary btn-block product-btn');
    productButtonElem.addEventListener('click',(e)=> {
        e.preventDefault(),
        addToCartClick(product)
    });

    productItemElem.appendChild(productButtonElem);
    productItemElem.setAttribute('id','productMargin');
    productItemElem.classList.add('text-center');
    return productItemElem;
}

function loadProductList(ProductList,id){
    const allProductCol = document.getElementById(id);
    if(allProductCol != null){
    while (allProductCol.firstChild) {
        allProductCol.removeChild(allProductCol.lastChild);
      }
    }
    const rowProduct = document.createElement('div');
    rowProduct.setAttribute('class','row');
    rowProduct.setAttribute('id','rowProductPadding');
    allProductCol.appendChild(rowProduct);
    ProductList.forEach(element => {
        rowProduct.appendChild(createProduct(element));
        
    });
}

function loadWomanProduct(){
    const womenProductItems = productItems.filter(x=>x.type==='woman');
    loadProductList(womenProductItems,'womenProduct');
}

function loadAllProduct(){
    loadProductList(productItems,'allProduct');
    loadWomanProduct();
    loadMenProduct();
}

function loadMenProduct(){
    const menProductItems = productItems.filter(x=>x.type==='men');
    loadProductList(menProductItems,'menProduct');
}

const filterBtn = document.getElementById('filter-btn');
filterBtn.addEventListener('click',(e)=> {
    e.preventDefault(),
    filterProduct()
})

function filterProduct(){
    //getFilterBtn
    const minVal = document.getElementById('min-price-txt').value;
    const maxVal = document.getElementById('max-price-txt').value;
    
    let filterMenProduct = productItems.filter(x=>x.type==='men');
    let filterWomenProduct = productItems.filter(x=>x.type==='woman');
    let filterProduct = productItems;
    if(minVal != 0 && maxVal != 0)
    {
        filterMenProduct = filterMenProduct.filter(x=>x.price<=maxVal && x.price>=minVal);
        filterWomenProduct = filterWomenProduct.filter(x=>x.price<=maxVal && x.price>=minVal);
        filterProduct = filterProduct.filter(x=>x.price<=maxVal && x.price>=minVal)
    }
    else if(minVal == 0 && maxVal != 0) 
    {
        filterMenProduct = filterMenProduct.filter(x=>x.price<=maxVal);
        filterWomenProduct = filterWomenProduct.filter(x=>x.price<=maxVal);
        filterProduct = filterProduct.filter(x=>x.price<=maxVal)
    }
    else if(minVal != 0 && maxVal == 0)
    {
        filterMenProduct = filterMenProduct.filter(x=>x.price>=minVal);
        filterWomenProduct = filterWomenProduct.filter(x=>x.price>=minVal);
        filterProduct = filterProduct.filter(x=>x.price>=minVal)
    }
    loadProductList(filterProduct,'allProduct');
    loadProductList(filterMenProduct,'menProduct');
    loadProductList(filterWomenProduct,'womenProduct');
}

function addToCartClick(product) {
    chooseProduct.push(product);
    console.log(chooseProduct);
    const cartCounter = document.getElementById('cartCounter');
    cartCounter.innerHTML = chooseProduct.length;
}

