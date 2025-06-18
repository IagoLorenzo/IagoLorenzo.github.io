const posts = [
  {
    title: "Proyecto OSINT con Gemini y Python",
    resumen: "Un análisis completo sobre cómo hacer OSINT de imágenes usando Google AI y Python.",
    link: "blog/post1.html"
  },
  {
    title: "Cómo convertir tu Arduino en un Rubber Ducky",
    resumen: "Una guía detallada para transformar tu Arduino uno R4 mínima en un teclado HID para pentesting.",
    link: "blog/post2.html"
  }
];

const porPagina = 2;
let paginaActual = 1;

function mostrarEntradas() {
  const contenedor = document.getElementById("blog-entries");
  contenedor.innerHTML = "";

  const inicio = (paginaActual - 1) * porPagina;
  const fin = inicio + porPagina;

  posts.slice(inicio, fin).forEach(post => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.resumen}</p>
      <a href="${post.link}">Leer más →</a>
    `;
    contenedor.appendChild(card);
  });

  mostrarPaginacion();
}

function mostrarPaginacion() {
  const totalPaginas = Math.ceil(posts.length / porPagina);
  const paginacion = document.getElementById("pagination");
  paginacion.innerHTML = "";

  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = () => {
      paginaActual = i;
      mostrarEntradas();
    };
    if (i === paginaActual) btn.disabled = true;
    paginacion.appendChild(btn);
  }
}

document.addEventListener("DOMContentLoaded", mostrarEntradas);

