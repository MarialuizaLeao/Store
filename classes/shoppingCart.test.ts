import ShoppingCart from "./shoppingCart";
import Product from "./product";

describe("ShoppingCart", () => {
  let cart: ShoppingCart;
  let product1: Product;
  let product2: Product;

  beforeEach(() => {
    cart = new ShoppingCart();
    product1 = new Product("Product 1", 10);
    product2 = new Product("Product 2", 20);
  });

  it("should add items to the cart", () => {
    cart.addItem(product1, 2);
    cart.addItem(product2, 1);

    expect(cart.getTotalPrice()).toBe(40);
  });

  it("should throw an error if quantity is less than or equal to 0", () => {
    expect(() => cart.addItem(product1, 0)).toThrow("Quantity must be greater than 0");
  });

  it("should remove items from the cart", () => {
    cart.addItem(product1, 2);
    cart.addItem(product2, 1);

    cart.removeItem(product1, 1);

    expect(cart.getTotalPrice()).toBe(30);
  });

  it("should throw an error if quantity is less than or equal to 0", () => {
    expect(() => cart.removeItem(product1, 0)).toThrow("Quantity must be greater than 0");
  });

  it("should throw an error if trying to remove an item that is not in the cart", () => {
    expect(() => cart.removeItem(product1, 1)).toThrow("Item not found");
  });

  it("should throw an error if trying to remove more quantity than available", () => {
    cart.addItem(product1, 2);

    expect(() => cart.removeItem(product1, 3)).toThrow("Cannot remove an amount greater than the current quantity");
  });

  it("should remove the item from the cart if the quantity is equal to the current quantity", () => {
    cart.addItem(product1, 2);

    cart.removeItem(product1, 2);

    expect(cart.getInfo()).toBe("");
  });

  it("should calculate the total price correctly", () => {
    cart.addItem(product1, 2);
    cart.addItem(product2, 1);

    expect(cart.getTotalPrice()).toBe(40);
  });

  it("should return the cart info as a string", () => {
    cart.addItem(product1, 2);
    cart.addItem(product2, 1);

    expect(cart.getInfo()).toBe("Product: Product 1 - Price: 10 - Quantity: 2\nProduct: Product 2 - Price: 20 - Quantity: 1\n");
  });
});

