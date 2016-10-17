/*Inicio*/
var elInicia=document.getElementById('form-signin-heading');
elInicia.innerHTML="Por favor inicia sesión";

/*Cambio de atributos*/
var elEmail=document.getElementById('inputEmail');
elEmail.setAttribute('placeholder', 'Ingresa Correo Electrónico');
var elPassword=document.getElementById('inputPassword');
elPassword.setAttribute('placeholder', 'Contraseña');

/*Cambio de nodos por especificación*/
var elBox = document.getElementsByTagName('span')[0].innerHTML=("Recordar");
var elButton = document.getElementsByTagName('button')[0].innerHTML=("Entrar");