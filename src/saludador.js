function saludo(nombre, genero, edad) {
  saludo =""
  if(genero != "vacio" && edad < 29){
    saludo+= genero;
  }
  if(genero == "vacio" && edad > 29){
    saludo+= "Sr/Sra.";
  }
  if(genero != "vacio" && edad > 29){
    if (genero == "joven") {
      saludo+= "Sr.";
    }else{
      saludo+= "Sra.";
    }
  }
  saludo="Hola " + saludo + " " + nombre;
  return saludo;
}

export default saludo;
