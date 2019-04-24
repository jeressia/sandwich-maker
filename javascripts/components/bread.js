import print from '../helpers/util.js'

const breads = {
  Italian: 0.65,
  Rye: 0.90,
  Bun: 0.60,
  Flatbread: 0.95,
  Wrap: 0.75
};

const addBread = (event) => {
  const breadType = event.target.id;
  const checked = event.target.checked;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = breadType;
    ingredient.price = `$${breads[breadType]}`;
    print.addToCart(ingredient);
};
}

export default {addBread};
