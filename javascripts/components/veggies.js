import print from '../helpers/util.js'

const veggies = {
  lettuce: 0.65,
  tomato: 0.90,
  onions: 0.60,
  spinach: 0.95,
  pickles: 0.75
};

const addVeggie = (event) => {
  const checked = event.target.checked;
  const veggieType = event.target.id;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = veggieType;
    ingredient.price = `$${veggies[veggieType]}`;
    print.addToCart(ingredient);
  }
};

export default {addVeggie};
