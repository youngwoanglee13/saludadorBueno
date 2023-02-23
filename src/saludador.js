function saludo(nombre, genero) {
  saludo = "Hola " + nombre;
  if (genero != "vacio") {
    saludo= "Hola " + genero + " " + nombre;
  }
  return saludo;
}

export default saludo;
