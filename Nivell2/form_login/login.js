
function validarEmail(e){
  e.preventDefault();
  var txtEmail = document.getElementById("email").value;

         //Test email obligatorio
    if(txtEmail == null || !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(txtEmail)){
      document.getElementById("caja1").innerHTML ="Email incorrecto";
      document.getElementById("caja1").style.color = "red";
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("caja1").style.fontSize = "18px";
    }else{
      document.getElementById("email").style.border = "1px solid lightgrey";
      document.getElementById("caja1").innerHTML ="Email correcto";
      document.getElementById("caja1").style.color = "lightblue";
      document.getElementById("email").style.border = "1px solid lightblue";
      document.getElementById("caja1").style.fontSize = "18px";
    }   
}

function validarContraseña(e){
  e.preventDefault(); 

  var txtContraseña= document.getElementById('contraseña').value;
  
    // Contraseña
    if(txtContraseña == null || !/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/i.test(txtContraseña)){
      
      document.getElementById("caja2").innerHTML = "Ingrese más de 8 carácteres, mínimo 1 mayúscula y 1 número";
      document.getElementById("caja2").style.color = "red"
      document.getElementById("contraseña").style.border = "1px solid red";
      document.getElementById("caja2").style.fontSize = "18px";
    }else {
      document.getElementById("contraseña").style.border = "1px solid lightgrey";
      document.getElementById("caja2").innerHTML ="Contraseña válida";
      document.getElementById("caja2").style.color = "lightblue"
      document.getElementById("contraseña").style.border = "1px solid lightblue";
      document.getElementById("caja2").style.fontSize = "18px";
    }
}

function validar_todo(e){
   e.preventDefault();

  validarEmail(e);
  validarContraseña(e);
 
  var caja1 = document.getElementById("caja1").value;
  var caja2 = document.getElementById("caja2").value;
 
  if (typeof(caja1) == "undefined" && typeof(caja2) == "undefined"){
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
 
    if (email != "" && contraseña != ""){
      document.getElementById("mensaje").style.display = "block";
    }
    
  }

}  
 
   

