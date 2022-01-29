'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});

let cardArr = [];
class Product {
    constructor(id, name, price, qty) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = 1;
    }

    showLine() {
        return `      
        <div class="product">
            <div>${this.name}</div>            
            <div> ${this.price * this.qty} $</div>
            <div> ${this.price} $</div>
            <div>${this.qty}</div>            
        </div>
        <hr>
      `
    }
}





let totalPrice = 0;
const productTotal = document.querySelector('.productTotal');
const cardEl = document.querySelector(".featuredItems");
cardEl.addEventListener('click', function (event) {

    if (event.target.tagName == 'BUTTON') {

        const parEl = event.target.parentNode.parentNode.parentNode;
        const newEl = document.getElementById(parEl.id);
        let checkValue = cardArr.find(item => item.id == parEl.id);

        if (!checkValue) {
            checkValue = new Product(parEl.id,
                newEl.querySelector('.featuredName').innerHTML.replace(/\s+/g, ''),
                +newEl.querySelector('.featuredPrice').innerHTML.replace(/\s+\$/g, '')
            )
            cardArr.push(checkValue)
            const spanEl = document.getElementById("cardId").textContent = cardArr.length;

        }
        else {
            checkValue.qty++;

        }
        totalPrice += checkValue.price;
        productTotal.innerHTML = `Общая стоимость ${totalPrice} $`;
        productList.innerHTML = cardArr.map(el => el.showLine()).join('');
    }
})

const cartIconWrap = document.querySelector('.cartIconWrap');
const productList = document.querySelector('.productList');
const cartProduct = document.querySelector('.cartProduct');
cartIconWrap.addEventListener('click', function () {
    if (cardArr.length !== 0) {
        cartProduct.classList.toggle('active');
        productTotal.classList.toggle('active');
    }
})








