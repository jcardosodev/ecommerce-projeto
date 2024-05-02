// carrinho.js

// Função para exibir os itens do carrinho
function showCart() {
  // Obter o carrinho do localStorage
  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartItems = document.getElementById('carrinhoCompra');
  const totalElement = document.getElementById('total');

  // Verificar se há itens no carrinho
  if (cart && cart.length > 0) {
    // Limpar o conteúdo anterior
    cartItems.innerHTML = '';

    // Variável para calcular o total
    let total = 0;

    // Loop pelos itens do carrinho
    cart.forEach((item) => {
      // Criar um elemento de lista para cada item
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - R$ ${item.price}`;

      // Adicionar o item à lista de itens do carrinho
      cartItems.appendChild(listItem);

      // Adicionar o preço do item ao total
      total += parseFloat(item.price);
    });

    // Exibir o total
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
  } else {
    // Se o carrinho estiver vazio, exibir uma mensagem
    cartItems.innerHTML = '<li>Carrinho vazio</li>';
    totalElement.textContent = 'Total: R$ 0.00';
  }
}

// Chamada para exibir o carrinho quando a página carrega
window.addEventListener('DOMContentLoaded', showCart);

// Botão para finalizar compra e limpar carrinho
const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', function () {
  // Limpar o carrinho
  localStorage.removeItem('cart');
  // Atualizar a exibição do carrinho
  showCart();
  // Informar ao usuário que a compra foi finalizada
  alert('Compra finalizada! O carrinho foi limpo.');
});

// Botão para limpar o carrinho sem finalizar a compra
const clearCartBtn = document.getElementById('clear-cart-btn');
clearCartBtn.addEventListener('click', function () {
  // Limpar o carrinho
  localStorage.removeItem('cart');
  // Atualizar a exibição do carrinho
  showCart();
});
