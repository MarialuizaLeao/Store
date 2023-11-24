class Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }

  public getName(): string {
    return this.name;
  }
  
  public setPrice(price: number): void {
    this.price = price;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public toString(): string {
    return `Product: ${this.name} - Price: ${this.price}`;
  }

}

export default Product;