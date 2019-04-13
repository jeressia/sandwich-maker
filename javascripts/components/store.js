import cart from './cart.js'

import util from '../helpers/util.js'
import getBread from './bread.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    const myBread= getBread.getBread();
    cart.setCart(getBread);
    cart.cartToDom();
    };

const logThis = (e) => {
    console.log(e.target.id);
}
const makeStore = () => {
    const myBread = getBread.getBread();
    let domString = `<h2> Our Only Book</h2>`;
    domString += `<input type="checkbox" aria-label="Bread" id="italian" class="item"> Italian: ${myBread.Italian}`
    domString += `<input type="checkbox" aria-label="Bread" id="wheat" class="item"> Wheat: ${myBread.Wheat}`
    domString += `<input type="checkbox" aria-label="Bread" id="rye" class="item"> Rye: ${myBread.Rye}`
    domString += `<input type="checkbox" aria-label="Bread" id="bun" class="item"> Bun: ${myBread.Bun}`
    domString += `<input type="checkbox" aria-label="Bread" id="garlic" class="item"> Garlic:  ${myBread.Garlic}`
    domString += `<button class="btn btn-danger" id="cartButton" class="item">Add to Cart</button>`
    util.printToDom('store-container',domString);
    document.getElementById('italian').addEventListener('click', addToCartEvent);
    document.getElementById('wheat').addEventListener('click', logThis);
    document.getElementById('rye').addEventListener('click', logThis);
    document.getElementById('bun').addEventListener('click', logThis);
    document.getElementById('garlic').addEventListener('click', logThis);
};

export default {makeStore};