function saludoES(nombre, genero, edad) {
  saludo =""
  if(genero != "vacio" && edad < 30)saludo+= genero;
  if(genero == "vacio" && edad > 29)saludo+= "Sr/Sra.";
  if(genero != "vacio" && edad > 29){
    if (genero == "joven") {
      saludo+= "Sr.";
    }else{
      saludo+= "Sra.";
    }
  }
  let fechaActual = new Date();
  if(fechaActual.getHours()<12) saludo="Buenos dias " + saludo + " " + nombre;
  if(fechaActual.getHours()>=19){
    saludo="Buenas noches " + saludo + " " + nombre;
  }else{
    saludo="Buenas tardes " + saludo + " " + nombre;
  }
  return saludo;
}
function saludoEN(nombre, genero, edad) {
  saludo =""
  if(genero != "vacio" && edad < 30){
    if (genero == "señorita") {
      saludo+= "Miss.";
    }
  }
  if(genero == "vacio" && edad > 29)saludo+= "Mr/Mrs.";
  if(genero != "vacio" && edad > 29){
    if (genero == "joven") {
      saludo+= "Mr.";
    }else{
      saludo+= "Mrs.";
    }
  }
  let fechaActual = new Date();
  if(fechaActual.getHours()<12) saludo="Good morning " + saludo + " " + nombre;
  if(fechaActual.getHours()>=19){
    saludo="Goog evening " + saludo + " " + nombre;
  }else{
    saludo="Good afternoon " + saludo + " " + nombre;
  }
  return saludo;
}

function saludo(nombre, genero, edad, idioma) {
  if(idioma == "ES"){
    return saludoES(nombre, genero, edad);
  }else{
    return saludoEN(nombre, genero, edad);
  }
}



export default saludo;
