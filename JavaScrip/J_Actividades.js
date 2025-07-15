// Obtener elementos
const cards   = [...document.querySelectorAll('.actividad')];
const modal   = document.getElementById('modal');
const imgBig  = document.getElementById('modal-img');
const tBig    = document.getElementById('modal-titulo');
const dBig    = document.getElementById('modal-desc');
const eBig    = document.getElementById('modal-extra');
const prev    = document.getElementById('prev');
const next    = document.getElementById('next');

// Texto extra
const info = [
  "Vuelo de 15‑20 min con instructor, fotos HD y video 4K.",
  "10 km de rápidos II‑III, casco y almuerzo incluidos.",
  "Tres descensos + paseo en buggy y sunset en Huacachina.",
  "Ruta de 12 km, guías bilingües y oxígeno de emergencia.",
  "Paredes de 20‑35 m, equipo Petzl y rappel panorámico.",
  "Salto de 125 m, video GoPro y certificado de valentía."
];

let i = 0; // Índice actual

// Abrir modal
function abrir(idx){
  i = idx;
  const c = cards[i];
  imgBig.src       = c.querySelector('img').src;
  imgBig.alt       = c.querySelector('img').alt;
  tBig.textContent = c.querySelector('h3').textContent;
  dBig.textContent = c.querySelector('p').textContent;
  eBig.textContent = info[i];
  modal.style.display = 'flex';
}

// Cerrar modal
function cerrar(){ modal.style.display = 'none'; }

// Anterior tarjeta
function ant(){ abrir((i-1+cards.length)%cards.length); }

// Siguiente tarjeta
function sig(){ abrir((i+1)%cards.length); }

// Agregar eventos
cards.forEach((c,idx)=> c.addEventListener('click', ()=>abrir(idx)));
prev.addEventListener('click', ant);
next.addEventListener('click', sig);

// Click fuera
window.addEventListener('click', e => { if(e.target === modal) cerrar(); });

// Teclas navegación
document.addEventListener('keydown', e=>{
  if(modal.style.display !== 'flex') return;
  if(e.key === 'ArrowLeft')  ant();
  if(e.key === 'ArrowRight') sig();
  if(e.key === 'Escape')     cerrar();
});
 