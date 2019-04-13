import store from './components/store.js';

const init = () => {
store.selectBread();
store.selectCheese();
store.selectMeats();
store.selectVeggies();
store.selectCondiments();
};

init();