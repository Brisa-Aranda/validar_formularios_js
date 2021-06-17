function validarBuscador(e){
    e.preventDefault();
   
      var txtBuscador = document.getElementById('buscador').value;
         //Test palabra obligatoria mín 3 letras
      if(txtBuscador == null || txtBuscador.length < 3 || !/^[a-zA-Z]*$/.test(txtBuscador)) {
        document.getElementById("caja1").innerHTML ="Has de escribir mínimo tres letras";
        document.getElementById("caja1").style.color = "red";
        document.getElementById("buscador").style.border = "1px solid red";
        document.getElementById("caja1").style.fontSize = "18px";
      }else {
        document.getElementById("buscador").style.border = "1px solid lightgrey";
        document.getElementById("caja1").innerHTML ="";
      }
  
  }

  function validar_todo(e)
{
   e.preventDefault();

  validarBuscador(e);
  
  var caja1 = document.getElementById("caja1").value;
 

  if (typeof(caja1) == "undefined")
  {
    var buscador = document.getElementById("buscador").value;
   
   
    if (buscador != "")
    {
      document.getElementById("mensaje").style.display = "block";
    }
    document.getElementById("buscador").value = "";
   
  }

}  