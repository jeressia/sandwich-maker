import print from '../helpers/util.js'

const breads = {
  italian: 0.65,
  grain: 0.90,
  handcheese: 0.60,
  flatbread: 0.95,
  letwrap: 0.75
};

const addBread = (event) => {
  const checked = event.target.checked;
  const breadType = event.target.id;
  
  if(checked) {
    let ingredient = {};
    ingredient.type = breadType;
    ingredient.price = bread[breadType];
    print.addToCart(ingredient);
};
}

export default {addBread};
