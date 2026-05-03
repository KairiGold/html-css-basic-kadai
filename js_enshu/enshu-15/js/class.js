class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  describe() {
    console.log("この商品は" + this.name + "です。");
  }
}

const shampoo = new Product("シャンプー", 650, "生活雑貨");
console.log(shampoo);
shampoo.describe();
