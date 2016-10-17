function validateForm(){
	/* Escribe tú código aquí */
		var elNombre=document.getElementById("name").value;
		var elApellido=document.getElementById("lastname").value;
		var elCorreo=document.getElementById("input-email").value;
		var elPassword=document.getElementById("input-password").value;
		// validando el campo obligatorio de nombre
		if(elNombre == null || elNombre.length == 0 || /^\s+$/.test(elNombre))
		{
			alert('El campo nombre no debe ir vacío');
			return false;

			/*if (/^[A-Z][a-z]*$/ || elNombre.length) {
				alert('Coloca la primera letra Mayuscula');
			}*/
		}

		// validando el campo obligatorio de apellido
		if(elApellido == null || elApellido.length == 0 || /^\s+$/.test(elApellido))
		{
			alert('El campo apellido no debe ir vacío');
			return false;
		}

		/*validando el campo de correo electronico no pude validar el correo
		if(!(/\S+@\S+\.\S+/.test("input-email"))){
			alert('ERROR: Debe escribir un correo válido');
			return false;
		}*/

		//validando 6 digitos del pass
		if (elPassword.length <6) {
			alert("Debes de colocar 6 digitos minímo");
		}
		/*if (elPassword == 123456 || elPassword.length < 6 || elPassword == "password" || elPassword= 0987654) {
		alert('ERROR: La contraseña debe ser minimo de 6 caracteres');
		return false;
			}*/
	}
