document.addEventListener("DOMContentLoaded", () => {
  const nombreUsuario = document.getElementById("nombre-usuario");
  const input = document.getElementById("nombre");
  const boton = document.getElementById("aplicar");

  // Guardar nombre
  boton.addEventListener("click", () => {
    const nombre = input.value.trim();
    if (nombre) {
      localStorage.setItem("usuario", nombre);
      nombreUsuario.textContent = nombre;
      input.value = "";
    }
  });

  // Cargar nombre guardado
  const guardado = localStorage.getItem("usuario");
  if (guardado) {
    nombreUsuario.textContent = guardado;
  }

  // Registrar Service Worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
});
