document.getElementById("finalizarCompra").addEventListener("click", function() {
    document.getElementById("mensagemSucesso").style.display = "block";
  });

  document.getElementById("retornarInicio").addEventListener("click", function() {
    document.getElementById("mensagemSucesso").style.display = "none";
  });


  function finalizarCompra() {

    alert('Compra finalizada');
  
  
    window.location.href = 'index.html';
  }
 