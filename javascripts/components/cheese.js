import print from '../helpers/util.js'

const cheeses = {
  American: 0.30,
  Cheddar: 0.30,
  Swiss: 0.45,
  Jack: 0.45,
  Mozzarella: 0.40
};

const addCheese = (event) => {
  const checked = event.target.checked;
  const cheeseType = event.target.id;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = cheeseType;
    ingredient.price = `$${cheeses[cheeseType]}`;
    print.addToCart(ingredient);
};
}
export default {addCheese};