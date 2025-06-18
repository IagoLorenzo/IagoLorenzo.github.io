const entradas = [
  {
    titulo: "Proyecto OSINT con Gemini y Python",
    resumen: "Un análisis completo sobre cómo hacer OSINT de imágenes en Instagram usando Google AI y Python.",
    enlace: "blog/entrada1.html"
  },
  {
    titulo: "Cómo convertir tu Arduino en un Rubber Ducky",
    resumen: "Guía paso a paso para usar un Arduino Pro Micro como emulador HID para pentesting.",
    enlace: "blog/entrada2.html"
  },
  // Añade más entradas aquí
];

const porPagina = 2;
let paginaActual = 1;

function mostrarEntradas() {
  const inicio = (paginaActual - 1) * porPagina;
  const fin = inicio + porPagina;
  const entradasPagina = entradas.slice(inicio, fin);

  const contenedor = document.getElementById("blog-entradas");
  contenedor.innerHTML = "";

  entradasPagina.forEach(entrada => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${entrada.titulo}</h3><p>${entrada.resumen}</p><a href="${entrada.enlace}">Leer más →</a>`;
    contenedor.appendChild(div);
  });

  generarPaginacion();
}

function generarPaginacion() {
  const totalPaginas = Math.ceil(entradas.length / porPagina);
  const paginacion = document.getElementById("paginacion");
  paginacion.innerHTML = "";

  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement("button");
    boton.innerText = i;
    if (i === paginaActual) boton.disabled = true;
    boton.addEventListener("click", () => {
      paginaActual = i;
      mostrarEntradas();
    });
    paginacion.appendChild(boton);
  }
}

document.addEventListener("DOMContentLoaded", mostrarEntradas);

