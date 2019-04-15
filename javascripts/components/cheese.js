import print from '../helpers/util.js'

const cheeses = {
  american: 0.30,
  cheddar: 0.30,
  swiss: 0.45,
  pjack: 0.45,
  mozz: 0.40
};

const addCheese = (event) => {
  const checked = event.target.checked;
  const cheeseType = event.target.id;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = cheeseType;
    ingredient.price = cheese[cheeseType];
    print.addToCart(ingredient);
};
}
export default {addCheese};