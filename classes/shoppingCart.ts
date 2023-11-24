import Product from "./product";

class ShoppingCart {
  private items: Map<Product, number>;

  public constructor() {
    this.items = new Map();
  }

  public addItem(item: Product, quantity: number): void {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than 0");
    }

    if (this.items.has(item)) {
      this.items.set(item, this.items.get(item)! + quantity);
    } else {
      this.items.set(item, quantity);
    }
  }

  removeItem(item: Product, quantity: number): void {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than 0");
    }

    if (!this.items.has(item)) {
      throw new Error("Item not found");
    }

    const currentQuantity = this.items.get(item)!;

    if (currentQuantity < quantity) {
      throw new Error("Cannot remove an amount greater than the current quantity");
    }
    
    this.items.set(item, currentQuantity - quantity);

    if (this.items.get(item) === 0) {
      this.items.delete(item);
    }
  }

  getTotalPrice(): number {
    let totalPrice = 0;

    this.items.forEach((quantity, item) => {
      totalPrice += item.getPrice() * quantity;
    });

    return totalPrice;
  }

  getInfo(): string {
    let info = "";

    this.items.forEach((quantity, item) => {
      info += `${item.toString()} - Quantity: ${quantity}\n`;
    });

    return info;
  }

}

export default ShoppingCart;