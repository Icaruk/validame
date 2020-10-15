
exports.dni = (stringParaValidar, config) => {
	
	// *******************
	// Compruebo estructura
	// *******************
	
	let regex = new RegExp(/^[XYZ]?[0-9]{5,8}[A-Z]$/, "");
	let correcto = regex.test(stringParaValidar);
	
	if (! correcto) {
		return config.symbols.dni.messages.invalid[config.language];
	};
	
	
	
	// *******************
	// Compruebo letra
	// *******************
	
	let dni = stringParaValidar; // copio el string
	
	if (isNaN( parseInt(stringParaValidar[0]) )) {// el primer dígito es una letra
		
		// Sustituyo las letras XYZ por 012, respectivamente
		dni = dni.replace("X", 0);
		dni = dni.replace("Y", 1);
		dni = dni.replace("Z", 2);
	};
	
	let length = stringParaValidar.length;
	let cifra = dni.slice(0, length - 1); 			// (12345678) Z
	let letra = dni.substr(length - 1, length); 	// 12345678 (Z)
	
	
	// Calculo el resto y su letra asignada
	let resto = parseInt(cifra) % 23;
	
	const arrLetras = "TRWAGMYFPDXBNJZSQVHLCKE"; // en orden del 0 al 22: 0 = T, 1 = R, 2 = W...
	let letraCorrecta = arrLetras[resto];
	
	
	if (letra !== letraCorrecta) {
		// return `La letra final del DNI es incorrecta, debería ser ${letraCorrecta}.`;
		return config.symbols.dni.messages.finalLetter[config.language];
	};
	
	
	return "";
	
};

