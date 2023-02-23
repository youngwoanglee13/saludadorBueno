import saludo from "./saludador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const genero = document.querySelector("#comboGenero");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<h3>" + saludo(nombre.value, genero.options[genero.selectedIndex].value) + "</h3>";
});
