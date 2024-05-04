// Função para exibir os itens do carrinho
function showCart() {
  // Obter o carrinho do localStorage
  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  // Verificar se há itens no carrinho
  if (cart) {
    // Limpar o conteúdo anterior
    cartItems.innerHTML = '';

    const total = cart
      .map(({ price }) => +price)
      .reduce((acc, item) => acc + item, 0);
    //.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const carrinho = `<div class="carrinho_itens">
    <h3>Subtotal</h3>
    <span id="total">${total}</span>
    <a class="finalizarcompra" href="./checkout.html" class="carrinho_finalizar">Finalizar Compra</a>
  </div>`;

    const carrinhoItens = cart.map(
      (item) =>
        `<div class="carrinho_itens">
          <img src=${item.img} alt="">
          <div class="carrinho_info_01">
              <div>
                  <p>${item.name}</p>
                  <p>Tamanho: ${item.tamanho}</p>
              </div>
              <div class="carrinho_info_02">
                  <p id="${item.price}" class="help">Preço: ${item.price}</p>
                  <div class="quantidade">
                      <button class="diminuir">-</button>
                      <input type="text" class="contador" value="1">
                      <button class="aumentar">+</button>
                  </div>
              </div>
          </div>
      </div>`,
    );

    cartItems.innerHTML = carrinho + carrinhoItens.join('');
    showQuantidade();
    finalizarCompra();

    /*
    // Exibir o total
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
*/
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
/*
checkoutBtn.addEventListener('click', function () {
  // Limpar o carrinho
  localStorage.removeItem('cart');
  // Atualizar a exibição do carrinho
  showCart();
  // Informar ao usuário que a compra foi finalizada
  alert('Compra finalizada! O carrinho foi limpo.');
});
*/
/*
// Botão para limpar o carrinho sem finalizar a compra
const clearCartBtn = document.getElementById('clear-cart-btn');
clearCartBtn.addEventListener('click', function () {
  // Limpar o carrinho
  localStorage.removeItem('cart');
  // Atualizar a exibição do carrinho
  showCart();
});
*/

function showQuantidade() {
  const botoesAumentar = document.querySelectorAll('.aumentar');
  const botoesDiminuir = document.querySelectorAll('.diminuir');

  botoesAumentar.forEach(function (botaoAumentar) {
    botaoAumentar.addEventListener('click', function () {
      const contador = botaoAumentar.parentElement.querySelector('.contador');
      contador.value = parseInt(contador.value) + 1;

      const div = botaoAumentar
        .closest('.carrinho_itens')
        .querySelector('.carrinho_info_02 > p');
      const valorPrimario = +div.getAttribute('id');
      div.innerHTML = `Preço: ${valorPrimario * contador.value} `;
      let subtotal = document.getElementById('total');

      let total = +subtotal.innerText;
      console.log(total, 'total');
      subtotal.innerText = valorPrimario + total;
      console.log(subtotal);
    });
  });

  botoesDiminuir.forEach(function (botaoDiminuir) {
    botaoDiminuir.addEventListener('click', function () {
      const contador = botaoDiminuir.parentElement.querySelector('.contador');
      if (contador.value > 1) {
        contador.value = parseInt(contador.value) - 1;
        const div = botaoDiminuir
          .closest('.carrinho_itens')
          .querySelector('.carrinho_info_02 > p');

        const valorPrimario = +div.getAttribute('id');
        const valorAtual = +div.innerHTML.replace('Preço: ', '');
        div.innerHTML = `Preço: ${valorAtual - valorPrimario} `;

        let subtotal = document.getElementById('total');

        let total = +subtotal.innerText;
        console.log(total, 'total');
        subtotal.innerText = total - valorPrimario;
      }
    });
  });
}

function finalizarCompra() {
  let finalizarCompra = document.querySelector('.finalizarcompra');
  finalizarCompra.addEventListener('click', () => {
    let subtotal = document.getElementById('total');
    localStorage.setItem('subtotal', +subtotal.innerText);
  });
}
