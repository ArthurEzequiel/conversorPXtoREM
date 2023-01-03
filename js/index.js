document.getElementById('conversor').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtém o valor em PX e o tamanho da fonte base em PX
    var valorPx = document.getElementById('valor-px').value;
    var tamanhoFonteBase = document.getElementById('tamanho-fonte-base').value;
  
    // Calcula o valor em REM
    var valorRem = valorPx / tamanhoFonteBase;
  
    // Exibe o resultado
    document.getElementById('resultado').innerHTML = valorRem + ' REM';
  });