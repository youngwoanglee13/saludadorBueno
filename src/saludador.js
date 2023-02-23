function saludo(nombre, genero, edad) {
  saludo =""
  if(genero != "vacio" && edad < 30){
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
  let fechaActual = new Date();
  if(fechaActual.getHours()<12){
    saludo="Buenos dias " + saludo + " " + nombre;
  }
  if(fechaActual.getHours()>=19){
    saludo="Buenas noches " + saludo + " " + nombre;
  }else{
    saludo="Buenas tardes " + saludo + " " + nombre;
  }

 

  return saludo;
}

export default saludo;
