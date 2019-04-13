import cart from './cart.js'

import util from '../helpers/util.js'
import getBread from './bread.js';
import getCheese from './cheese.js';
import getMeats from './meat.js';
import getVeggies from './veggies.js';
import getCondiments from './condiments.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    //loop through all objects, see if they are checked, add all checked items to object, print to cart
    // const myBread= getBread.getBread();
    // cart.setCart(getBread);
    // cart.cartToDom();
    };

const logThis = (e) => {
    console.log(e.target.id);
}

const selectBread = () => {
    const myBread = getBread.getBread();
    let domString = `<h2> Bread:</h2>`;
    domString += `<input type="checkbox"  id="italian" class="item"> Italian </input>`
    domString += `<input type="checkbox"  id="wheat" class="item"> Wheat </input>`
    domString += `<input type="checkbox"  id="rye" class="item"> Rye </input>`
    domString += `<input type="checkbox"  id="ciabatta" class="item"> Ciabatta </input>`
    domString += `<input type="checkbox"  id="lettuce" class="item"> Lettuce Wrap </input>`
    util.printToDom('bread-container',domString);
};

const selectCheese = () => {
    const myCheese = getCheese.getCheese();
    let domString1 = `<h2> Cheese:</h2>`;
    domString1 += `<input type="checkbox" aria-label="Bread" id="american" class="item"> American </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="cheddar" class="item"> Cheddar </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="jack" class="item"> Jack </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="swiss" class="item"> Swiss </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="nocheese" class="item"> None </input>`
    util.printToDom('cheese-container',domString1);
};

const selectMeats = () => {
    const myMeat = getMeats.getMeats();
    let domString1 = `<h2> Meats:</h2>`;
    domString1 += `<input type="checkbox" id="turkey" class="item"> Turkey</input>`
    domString1 += `<input type="checkbox" id="roastbeef" class="item"> Roast Beef </input>`
    domString1 += `<input type="checkbox" id="grilledc" class="item"> Grilled Chicken </input>`
    domString1 += `<input type="checkbox" id="friedc" class="item"> Fried Chicken</input>`
    domString1 += `<input type="checkbox" id="nomeat" class="item"> None </input>`
    util.printToDom('meat-container',domString1);
};

const selectVeggies = () => {
    const myVeggies = getVeggies.getVeggies();
    let domString1 = `<h2> Veggies:</h2>`;
    domString1 += `<input type="checkbox" aria-label="Bread" id="mustard" class="item"> Lettuce </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="mayo" class="item"> Tomatoes </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="chipotle" class="item"> Pickles </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="ranch" class="item"> Peppers </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="nocond" class="item"> Onions </input>`
    util.printToDom('veggies-container',domString1);
};

const selectCondiments = () => {
    const myCondiments = getCondiments.getCondiments();
    let domString1 = `<h2> Condiments:</h2>`;
    domString1 += `<input type="checkbox" aria-label="Bread" id="mustard" class="item"> Mustard </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="mayo" class="item"> Mayonnaise </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="chipotle" class="item"> Chipotle </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="ranch" class="item"> Ranch </input>`
    domString1 += `<input type="checkbox" aria-label="Bread" id="nocond" class="item"> None </input>`
    util.printToDom('condiments-container',domString1);
};



export default {selectBread, selectCheese, selectCondiments, selectMeats, selectVeggies};