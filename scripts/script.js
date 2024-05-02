import { listProduct } from './produtos.js';

const nike = document.getElementById('nike');
const adidas = document.getElementById('adidas');
const puma = document.getElementById('puma');
const vans = document.getElementById('vans');
const marcas = document.querySelectorAll('.btn_marcas');

function Produtos() {
  const produtosIniciais = listProduct;

  function exibirProdutos(produtos) {
    const produtosElementos = document.getElementById('lista_produtos');

    const arrayProdutos = produtos.map(
      (produto) =>
        ` <div class="produto">
      <div class="container_img">
        <img class="produto_img" src="${produto.src}" alt="">
      </div>
        <h2>${produto.nome}</h2>
        <p>${produto.estilo}</p>
        <p>${produto.preco}</p>
        <div class="tamanhos">
                <div class="tamanhos_info">
                    <h2>Tamanhos</h2>
                    <ul class="lista_tamanhos">
                    ${produto.tamanho
                      .map((tamanho) => `<li><a href="">${tamanho}</a></li>`)
                      .join('')}           
                    </ul>
                    <button class="btn_comprar">Comprar</button>
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
