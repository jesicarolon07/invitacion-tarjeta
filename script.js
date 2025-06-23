


// menu hamburguesa
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// recomedar cancion 


document.getElementById('formularioCancion').addEventListener('submit', async function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombreCancion').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const error = document.getElementById('mensajeError');
  const resultado = document.getElementById('resultado');

  if (!nombre || !correo) {
    error.textContent = "Por favor completá todos los campos.";
    return;
  }

  error.textContent = "";
  resultado.textContent = "Enviando sugerencia...";

  // la api es una simulacion 
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correo: correo,
        cancion: nombre
      })
    });

    const data = await res.json();
    resultado.textContent = `Gracias ${correo} por sugerir: "${nombre}" 🎵 (Enviado correctamente)`;
  } catch (err) {
    resultado.textContent = "Error al enviar sugerencia.";
  }

  this.reset();
});
