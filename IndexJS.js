let shoppingCart = function() {
  // Private methods and properties
  const cart = [];

  class Item {
    constructor(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
  }

  function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (cart === null) {
      cart = [];
    }
  }

  loadCart();

  // Public methods and properties
  let obj = {};

  function addItemToCart(name, price, count) {
    for (let i in cart) {
      if (cart[i].name === name) {
        cart[i].count += count;
        saveCart();
        return;
      }
    }

    console.log("addItemToCart:", name, price, count);

    let item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
};
