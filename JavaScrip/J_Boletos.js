// Redirigir boleto
document.getElementById("btnGenerar").addEventListener("click", function() {
  const combo = document.getElementById("comboBoleto");
  const url = combo.value;

  if (url) {
    window.location.href = url;
  } else {
    alert("Por favor, seleccioná un tipo de boleto.");
  }
});
