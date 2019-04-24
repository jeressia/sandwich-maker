import print from '../helpers/util.js'

const meats = {
  turkey: 3.60,
  roastbeef: 3.00,
  grchick: 3.75,
  meatball: 3.50,
  tuna: 3.25
};

const addMeat = (event) => {
  const checked = event.target.checked;
  const meatType = event.target.id;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = meatType;
    ingredient.price = `$${meats[meatType]}`;
    print.addToCart(ingredient);
  }
};

export default {addMeat};
