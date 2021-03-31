
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
		
		// Sustituyo la letra inicial X, Y o Z por 0, 1 o 2 respectivamente
		let primeraLetra = dni[0];
		
		if (primeraLetra === "X") primeraLetra = 0;
		else if (primeraLetra === "Y") primeraLetra = 1;
		else if (primeraLetra === "Z") primeraLetra = 2;
		
		dni = primeraLetra + dni.slice(1);
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

