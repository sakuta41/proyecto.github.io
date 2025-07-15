// Obtener elementos
const hospedajeOpcion = document.getElementById("hospedaje-opcion");
const contenedorHospedaje = document.getElementById("hospedaje-container");
const form = document.getElementById("formBoletoCrucero");
const resultado = document.getElementById("resultado");

// Evento cambio hospedaje
hospedajeOpcion.addEventListener("change", () => {
  if (hospedajeOpcion.value === "Si") {
    contenedorHospedaje.style.display = "block";
  } else {
    contenedorHospedaje.style.display = "none";
  }
});

// Evento enviar
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener valores
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const fecha = document.getElementById("fecha").value;
  const personas = parseInt(document.getElementById("personas").value);
  const tipoCrucero = document.getElementById("tipo-crucero").value;
  const hospedajeSiNo = hospedajeOpcion.value;
  const hospedaje = document.getElementById("hospedaje").value;

  // Calcular precio base por persona
  let precioBase = 0;
  switch (tipoCrucero) {
    case "Lujo":
      precioBase = 500;
      break;
    case "Familiar":
      precioBase = 300;
      break;
    case "Aventura":
      precioBase = 350;
      break;
    case "Romántico":
      precioBase = 400;
      break;
    case "Económico":
      precioBase = 200;
      break;
    default:
      precioBase = 0;
  }

  // Sumar hospedaje si aplica
  let extraHospedaje = 0;
  if (hospedajeSiNo === "Si") {
    extraHospedaje = 100;
  }

  // Calcular total
  const precioTotal = (precioBase + extraHospedaje) * personas;

  // Armar resumen
  let resumen = `<h3>Resumen de tu boleto</h3>
    <p><strong>Origen:</strong> ${origen}</p>
    <p><strong>Destino:</strong> ${destino}</p>
    <p><strong>Fecha:</strong> ${fecha}</p>
    <p><strong>Personas:</strong> ${personas}</p>
    <p><strong>Tipo de crucero:</strong> ${tipoCrucero}</p>`;

  if (hospedajeSiNo === "Si") {
    resumen += `<p><strong>Hospedaje:</strong> ${hospedaje}</p>`;
  } else {
    resumen += `<p><strong>Hospedaje:</strong> No solicitado</p>`;
  }

  resumen += `<p><strong>Precio total:</strong> $${precioTotal}</p>`;

  // Mostrar resultado
  resultado.innerHTML = resumen;
});
