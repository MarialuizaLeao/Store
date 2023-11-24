import ShoppingCart from "./classes/shoppingCart";
import Product from "./classes/product";

const shoppingCart = new ShoppingCart();

const p1 = new Product("PS5", 500);
const p2 = new Product("Xbox Series X", 500);
const p3 = new Product("Nintendo Switch", 400);

shoppingCart.addItem(p1, 2);
shoppingCart.addItem(p2, 1);
shoppingCart.addItem(p3, 2);

console.log(shoppingCart.getTotalPrice());
console.log(shoppingCart.getInfo());

shoppingCart.removeItem(p1, 1);
shoppingCart.removeItem(p2, 1);

console.log(shoppingCart.getTotalPrice());
console.log(shoppingCart.getInfo());