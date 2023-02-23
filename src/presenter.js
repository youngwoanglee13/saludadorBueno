import saludo from "./saludador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const genero = document.querySelector("#comboGenero");
const edad = document.querySelector("#edad");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<h3>" + saludo(nombre.value, genero.options[genero.selectedIndex].value,edad.value) + "</h3>";
});
