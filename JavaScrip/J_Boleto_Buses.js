// Mostrar hospedaje
const hospedajeOpcion = document.getElementById("hospedaje-opcion");
const hospedajeContainer = document.getElementById("hospedaje-container");

hospedajeOpcion.addEventListener("change", function() {
  if (hospedajeOpcion.value === "Si") {
    hospedajeContainer.style.display = "block";
  } else {
    hospedajeContainer.style.display = "none";
  }
});

// Enviar formulario
document.getElementById("formBoletoBuses").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevenir envío

  // Obtener valores
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const fecha = document.getElementById("fecha").value;
  const personas = parseInt(document.getElementById("personas").value);
  const tipoViaje = document.getElementById("tipo-viaje").value;
  const hospedajeRespuesta = hospedajeOpcion.value;
  const hospedaje = document.getElementById("hospedaje").value;

  // Precios base por destino
  let precios = {
    "Cusco": 100,
    "Arequipa": 90,
    "Lima": 120,
    "Puno": 80,
    "Paracas": 70,
    "Iquitos": 150,
    "Cajamarca": 85
  };

  let precioBase = precios[destino] || 100; // Si no se encuentra, default 100

  // Calcular precio
  let precioTotal = precioBase * personas;

  if (tipoViaje === "Ida y vuelta") {
    precioTotal *= 1.5; // 50% adicional
  }

  if (hospedajeRespuesta === "Si") {
    precioTotal += 200; // Hospedaje fijo
  }

  // Formatear precio
  let precioFinal = `$${precioTotal.toFixed(2)}`;

  // Crear mensaje
  let mensaje = `
    <h3>¡Boleto Generado!</h3>
    <p><strong>Origen:</strong> ${origen}</p>
    <p><strong>Destino:</strong> ${destino}</p>
    <p><strong>Fecha:</strong> ${fecha}</p>
    <p><strong>Cantidad de personas:</strong> ${personas}</p>
    <p><strong>Tipo de viaje:</strong> ${tipoViaje}</p>
    <p><strong>Hospedaje:</strong> ${hospedajeRespuesta}</p>
  `;

  if (hospedajeRespuesta === "Si" && hospedaje) {
    mensaje += `<p><strong>Hotel seleccionado:</strong> ${hospedaje}</p>`;
  }

  mensaje += `<p><strong>Precio total:</strong> ${precioFinal}</p>`;

  // Mostrar resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = mensaje;
  resultado.style.display = "block";
});
