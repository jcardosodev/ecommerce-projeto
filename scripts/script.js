import { listProduct } from './produtos.js';

const marcas = document.querySelectorAll('.btn_marcas');

function Produtos() {
  const produtosIniciais = listProduct;

  function exibirProdutos(produtos) {
    const produtosElementos = document.getElementById('lista_produtos');

    const arrayProdutos = produtos.map(
      (produto) =>
        ` <div class="produto">
      <div class="container_img">
        <img class="produto_img" src="${produto.src[0]}" alt="">
      </div>
     <div class="produto_info">
        <h2 class="nome_marca">${produto.nome}</h2>
        <p>${produto.estilo}</p>
        <p>${produto.pagamento}</p>
    </div>   
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
                    }" data-price="${produto.preco}" data-img="${
          produto.src[0]
        }" >Comprar</button>
                  </div>
                </div>
        </div>
        `,
    );
    produtosElementos.innerHTML = arrayProdutos.join('');
  }
  exibirProdutos(produtosIniciais);

  const nav = document.querySelectorAll('.links > a');
  nav.forEach((botao) => {
    botao.addEventListener('click', (event) => {
      event.preventDefault();
      const produtosFiltrados = listProduct.filter(
        (produto) => produto.genero === botao.innerText,
      );
      if (produtosFiltrados.length === 0) {
      } else {
        exibirProdutos(produtosFiltrados);
      }
    });
  });

  marcas.forEach((botao) => {
    botao.addEventListener('click', (event) => {
      event.preventDefault();
      const produtosFiltrados = listProduct.filter(
        (produto) => produto.marca === botao.innerText,
      );
      exibirProdutos(produtosFiltrados);
    });
  });
}
Produtos();

function showModal() {
  carrinho.classList.toggle('carrinho_escondido');
  carrinhoCompra.classList.toggle('exibir');
}

//-------------------------------------------------------------
const botaoMostrarCarrinho = document.getElementById('mostrarCarrinho');
const carrinho = document.getElementById('carrinho');
const carrinhoCompra = document.querySelector('.carrinho_compra');

botaoMostrarCarrinho.addEventListener('click', showModal);
//--------------------------------------------------------------
