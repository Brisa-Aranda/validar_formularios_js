function validarNombre(e) {
  e.preventDefault();

  var txtNombre = document.getElementById('nombre').value;
  //Test nombre obligatorio
  if (txtNombre == null || txtNombre.length < 3 || !/^[a-zA-Z]*$/.test(txtNombre)) {
    document.getElementById("caja1").innerHTML = "Has de escribir minimo tres letras";
    document.getElementById("caja1").style.color = "red";
    document.getElementById("nombre").style.border = "1px solid red";
    document.getElementById("caja1").style.fontSize = "18px";
  } else {
    document.getElementById("nombre").style.border = "1px solid lightgrey";
    document.getElementById("caja1").innerHTML = "Correcto";
    document.getElementById("caja1").style.color = "lightblue"
    document.getElementById("nombre").style.border = "1px solid lightblue";
    document.getElementById("caja1").style.fontSize = "18px";
  }

}
function validarApellido(e) {
  e.preventDefault();

  var txtApellido = document.getElementById('apellido').value;

  //Test apellidos obligatorio
  if (txtApellido == null || txtApellido.length < 3 || !/^[a-zA-Z]*$/.test(txtApellido)) {
    document.getElementById("caja2").innerHTML = "Has de escribir mínimo tres letras";
    document.getElementById("caja2").style.color = "red";
    document.getElementById("apellido").style.border = "1px solid red";
    document.getElementById("caja2").style.color = "red";
    document.getElementById("apellido").style.border = "1px solid red";
    document.getElementById("caja2").style.fontSize = "18px";
  } else {
    document.getElementById("apellido").style.border = "1px solid lightgrey";
    document.getElementById("caja2").innerHTML = "Correcto";
    document.getElementById("caja2").style.color = "lightblue"
    document.getElementById("apellido").style.border = "1px solid lightblue";
    document.getElementById("caja2").style.fontSize = "18px";
  }
}
function validarEmail(e) {
  e.preventDefault();
  var txtEmail = document.getElementById("email").value;

  //Test email obligatorio
  if (txtEmail == null || !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(txtEmail)) {
    document.getElementById("caja3").innerHTML = "Email incorrecto";
    document.getElementById("caja3").style.color = "red";
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("caja3").style.fontSize = "18px";
  } else {
    document.getElementById("email").style.border = "1px solid lightgrey";
    document.getElementById("caja3").innerHTML = "Email correcto";
    document.getElementById("caja3").style.color = "lightblue";
    document.getElementById("email").style.border = "1px solid lightblue";
    document.getElementById("caja3").style.fontSize = "18px";
  }
}

function validarContraseña(e) {
  e.preventDefault();

  var txtContraseña = document.getElementById('contraseña').value;

  // Contraseña
  if (txtContraseña == null || txtContraseña.length < 8) {

    document.getElementById("caja4").innerHTML = "Ingrese mínimo 8 carácteres";
    document.getElementById("caja4").style.color = "red"
    document.getElementById("contraseña").style.border = "1px solid red";
    document.getElementById("caja4").style.fontSize = "18px";
  } else {
    document.getElementById("contraseña").style.border = "1px solid lightgrey";
    document.getElementById("caja4").innerHTML = "Contraseña válida";
    document.getElementById("caja4").style.color = "lightblue"
    document.getElementById("contraseña").style.border = "1px solid lightblue";
    document.getElementById("caja4").style.fontSize = "18px";
  }
}

function validarConfirmarContraseña(e) {
  e.preventDefault();

  var txtConf_Contraseña = document.getElementById('contraseña2').value;
  var txtContraseña = document.getElementById('contraseña').value;

  // Confirmar Contraseña
  if (txtConf_Contraseña == null || txtConf_Contraseña != txtContraseña) {

    document.getElementById("caja5").innerHTML = "La contraseña no coincide";
    document.getElementById("caja5").style.color = "red"
    document.getElementById("contraseña2").style.border = "1px solid red";
    document.getElementById("caja5").style.fontSize = "18px";
  } else {
    document.getElementById("contraseña2").style.border = "1px solid lightgrey";
    document.getElementById("caja5").innerHTML = "La contraseña coincide";
    document.getElementById("caja5").style.color = "lightblue"
    document.getElementById("contraseña").style.border = "1px solid lightblue";
    document.getElementById("caja5").style.fontSize = "18px";
  }
}
function validarProvincias(e) {
  e.preventDefault();

  var txtProvincias = document.getElementById('provincias').value;

  // Confirmar Provincias
  if (txtProvincias == /^[-]{2} Select [-]{2}$/.test(txtProvincias)) {

    document.getElementById("caja6").innerHTML = "Elige una opción";
    document.getElementById("caja6").style.color = "red"
    document.getElementById("provincias").style.border = "1px solid red";
    document.getElementById("caja6").style.fontSize = "18px";
  } else {
    document.getElementById("provincias").style.border = "1px solid lightgrey";
    document.getElementById("caja6").innerHTML = "Ya has elegido una opción";
    document.getElementById("caja6").style.color = "lightblue"
    document.getElementById("provincias").style.border = "1px solid lightblue";
    document.getElementById("caja6").style.fontSize = "18px";
  }
}


function validar_todo(e) {
  e.preventDefault();

  validarNombre(e);
  validarApellido(e);
  validarEmail(e);
  validarContraseña(e);
  validarConfirmarContraseña(e);
  validarProvincias(e);


  var caja1 = document.getElementById("caja1").value;
  var caja2 = document.getElementById("caja2").value;
  var caja3 = document.getElementById("caja3").value;
  var caja4 = document.getElementById("caja4").value;
  var caja5 = document.getElementById("caja5").value;
  var caja6 = document.getElementById("caja6").value;

  if (typeof (caja1) == "undefined" && typeof (caja2) == "undefined" && typeof (caja3) == "undefined" && typeof (caja4) == "undefined" && typeof (caja5) == "undefined" && typeof (caja6) == "undefined") {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    var contraseña2 = document.getElementById("contraseña2").value;
    var provincias = document.getElementById("provincias").value;

    if (nombre != "" && apellido != "" && email != "" && contraseña != "" && contraseña2 != "" && provincias != "") {
      document.getElementById("mensaje").style.display = "block";
    }
  
  }

}



