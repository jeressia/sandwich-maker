import cart from './cart.js'

import util from '../helpers/util.js'
import getBread from './bread.js';

// const addToCartEvent = (e) => {
//     e.preventDefault();
//     const bookInfo = book.getBook();
//     cart.setCart(bookInfo);
//     cart.cartToDom();
//     };

const logThis = (e) => {
    console.log(e.target.id);
}
const makeStore = () => {
    const myBread = getBread.getBread();
    let domString = `<h2> Our Only Book</h2>`;
    // domString += `<h3>${breadInfo.wheat}</h3>`
    domString += `<input type="checkbox" aria-label="Bread" id="italian"> Italian: ${myBread.Italian}`
    domString += `<input type="checkbox" aria-label="Bread" id="wheat"> Wheat: ${myBread.Wheat}`
    domString += `<input type="checkbox" aria-label="Bread" id="rye"> Rye: ${myBread.Rye}`
    domString += `<input type="checkbox" aria-label="Bread" id="bun"> Bun: ${myBread.Bun}`
    domString += `<input type="checkbox" aria-label="Bread" id="garlic"> Garlic:  ${myBread.Garlic}`
    domString += `<button class="btn btn-danger" id="cartButton">Add to Cart</button>`
    util.printToDom('store-container',domString);
    document.getElementById('italian').addEventListener('click', logThis);
    document.getElementById('wheat').addEventListener('click', logThis);
    document.getElementById('rye').addEventListener('click', logThis);
    document.getElementById('bun').addEventListener('click', logThis);
    document.getElementById('garlic').addEventListener('click', logThis);
};

export default {makeStore};