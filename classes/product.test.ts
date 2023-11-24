import Product from './product';

describe('Product', () => {
  let product: Product;

  beforeEach(() => {
    product = new Product('Test Product', 10.99);
  });

  it('should return the correct string representation', () => {
    expect(product.toString()).toBe('Product: Test Product - Price: 10.99');
  });
});
