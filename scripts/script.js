import { listProduct } from './produtos.js';

const nike = document.getElementById('nike');
const adidas = document.getElementById('adidas');
const puma = document.getElementById('puma');
const vans = document.getElementById('vans');
const marcas = document.querySelectorAll('.btn_marcas');

function Produtos() {
  const produtosIniciais = listProduct;

  listProduct.forEach((teste) => {
    if (teste.marca == 'Nike' && teste.id == 1) {
      console.log(teste.nome);
    }
  });

  function exibirProdutos(produtos) {
    const produtosElementos = document.getElementById('lista_produtos');

    const arrayProdutos = produtos.map(
      (produto) =>
        ` <div class="produto">
      <div class="container_img">
        <img class="produto_img" src="${produto.src}" alt="">
      </div>
        <h2 class="nome_marca">${produto.nome}</h2>
        <p>${produto.estilo}</p>
        <p>${produto.pagamento}</p>
        <div class="tamanhos">
                <div class="tamanhos_info">
                    <h2>Tamanhos</h2>
                    <ul class="lista_tamanhos">
                    ${produto.tamanho
                      .map(
                        (tamanho) =>
                          `<li><a class="tamanho01" href="#">${tamanho}</a></li>`,
                      )
                      .join('')}           
                    </ul>
                    <button class="btn_comprar" data-name="${
                      produto.nome
                    }" >Comprar</button>
                  </div>
                </div>
        </div>`,
    );
    produtosElementos.innerHTML = arrayProdutos.join('');
  }
  exibirProdutos(produtosIniciais);

  marcas.forEach((botao) => {
    botao.addEventListener('click', () => {
      const produtosFiltrados = listProduct.filter(
        (produto) => produto.marca === botao.innerText,
      );
      exibirProdutos(produtosFiltrados);
    });
  });
}
Produtos();

/*
const productsMenu = {
  prod01: { name: 'camisa', value: 100 },
  prod02: { name: 'calça', value: 200 },
  prod03: { name: 'boné', value: 50 },
};

const cart = [];

function addProductToCart(product, amount) {
  for (let i = 0; i < amount; i++) {
    cart.push(product);
  }
}

addProductToCart(productsMenu['prod01'], 4);
addProductToCart(productsMenu['prod02'], 2);
addProductToCart(productsMenu['prod03'], 1);

function getCartTotal(userCart) {
  return userCart.reduce((acc, next) => {
    return (acc += next.value);
  }, 0);
}

getCartTotal(cart);

console.log(getCartTotal(cart));

// 850

const compra = document.querySelector('.btn_comprar');
const nomeMarcar = document.querySelector('.nome_marca');

compra.addEventListener('click', () => {
  //console.log(nomeMarcar.innerText);
});


marcas.forEach((botao) => {
  botao.addEventListener('click', () => {
    const produtosFiltrados = listProduct.filter(
      (produto) => produto.marca === botao.innerText,
    );
    exibirProdutos(produtosFiltrados);
  });
});
*/

const tamanhos = document.querySelectorAll('.tamanho01');
tamanhos.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    const dados = tamanhos[index].innerText;
    console.log(dados);
  });
});
