import print from '../helpers/util.js'

const condiments = {
  mustard: 0.50,
  mayonnaise: 0.50,
  ranch: 0.50,
  chipotle: 0.65,
  hmust: 0.60
};

const addCondiment = (event) => {
  const checked = event.target.checked;
  const condimentType = event.target.id;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = condimentType;
    ingredient.price = condiment[condimentType];
    print.addToCart(ingredient);
  } else if (!checked) {
    print.removeFromCart(condimentType);
  }
};

export default {addCondiment};