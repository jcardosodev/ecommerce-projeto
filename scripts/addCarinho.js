import { listProduct } from './produtos.js';
const produtosIniciais = listProduct;
let cart = [{ name: 'lllllllll', price: 10.0 }];

function addToCart(name, price) {
  const existingProduct = cart.find((product) => product.name === name);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  renderCart();
}

function renderCart() {}

function addToCart(productName, price) {
  console.log(`Produto ${productName} adicionado ao carrinho por R$ ${price}`);
}
