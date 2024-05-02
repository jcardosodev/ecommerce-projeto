// Função para adicionar um item ao carrinho
function addToCart(event) {
  // Obter o nome e o preço do produto do atributo 'data' do botão
  const name = event.target.dataset.name;
  const price = event.target.dataset.price;

  // Criar um objeto representando o item a ser adicionado ao carrinho
  const item = {
    name: name,
    price: price,
    tamanho: dados,
  };

  console.log(item);

  // Verificar se já existe um carrinho no localStorage
  let cart = localStorage.getItem('cart');
  if (!cart) {
    // Se não existir, criar um carrinho vazio
    cart = [];
  } else {
    // Se existir, converter a string JSON em um array de objetos
    cart = JSON.parse(cart);
  }

  // Adicionar o novo item ao carrinho
  cart.push(item);

  // Atualizar o carrinho no localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Alerta de sucesso
  alert('Produto adicionado ao carrinho!');
}

// Adicionar um ouvinte de evento para o botão "Adicionar ao Carrinho"
document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.btn_comprar');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
  });
});

let dados = '';
const tamanhos = document.querySelectorAll('.tamanho01');
tamanhos.forEach((botao, index) => {
  botao.addEventListener('click', (event) => {
    event.preventDefault();
    dados = tamanhos[index].innerText;
    console.log(dados);
  });
});
