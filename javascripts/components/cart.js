import util from '../helpers/buttons.js'
import getBread from '../components/bread.js'

const cart =[];

const getCart= () => {
    return cart;
}
const setCart = (bread) => {
 cart.push(bread);
};

const addToCartEvent = (e) => {
  e.preventDefault();
  //loop through all objects, see if they are checked, add all checked items to object, print to cart
  // const myBread= getBread.getBread();
  // cart.setCart(getBread);
  // cart.cartToDom();
  };

const myBread= getBread.getBread();
const buyEvent = (e) => {
    e.preventDefault();
    const myCart = getCart();
    // const total = myCart.reduce((a, b) => {return a + b.price}, 0);
    // window.alert(`Your total is $${total.toFixed(2)}`);
};

const cartToDom = () => {
    const myCart=getCart();
    let domString = '<div class="row">';
    domString += '<h2>Cart:</h2>';
    domString += '<button id="purchase-btn" class="btn btn-secondary">Purchase</button>'
    domString += '</div><div class="row d-flex flex-wrap">';
    myCart.forEach((bread) => {
      domString += `<div class="col-3 m-1">`;
    //   domString += `  <img src=${book.image} class="card-img-top" alt="...">`;
    //   domString += `  <div class="card-body">`;
    //   domString += `    <h5 class="card-title">${book.title}</h5>`;
      domString += `    <h1>Italian</h1>`;
    //   domString += `  </div>`;
      domString += `</div>`;
    });
    domString += `</div>`;
    util.printToDom('cart-container', domString);
    // document.getElementById('purchase-btn').addEventListener('click', buyEvent);
};


export default { setCart, cartToDom };