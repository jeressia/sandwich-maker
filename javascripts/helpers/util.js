let cart = [];

const addToCart = (ingredient) => {
  cart.push(ingredient);
  cartBuilder(cart);
};


const cartBuilder = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="d-flex justify-content-between">`
    domString += `<div>${item.type}</div>`
    domString += `<div>${item.price}</div>`
    domString += `</div>`
  })
  domString += `<button type="button" id="total-button" class="btn btn-info mb-3">Add to Cart</button>`
  printToDom('cart-container', domString);
};


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

export default {addToCart};