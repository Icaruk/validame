
exports.ibanEs = (stringParaValidar, config) => {
	
	// *******************
	// Compruebo estructura
	// *******************
	
	let regex = new RegExp(/([ES]{2})\s*\t*([0-9]{2})\s*\t*([0-9]{4})\s*\t*([0-9]{4})\s*\t*([0-9]{2})\s*\t*([0-9]{10})/, "");
	let correcto = regex.test(stringParaValidar);
	
	if (! correcto) {
		return config.symbols.ibanEs.messages.structure[config.language];
	};
	
	
	
	// *******************
	// Comprobación con algoritmo
	// *******************
	
	let iban = stringParaValidar.toUpperCase().trim(); // Todo a MAYÚSCULAS y quito espacios al inicio y al final
	iban = iban.replace(/\s/g, ""); // Quito los espacios en blanco dentro del string
	
	let letra1, letra2, num1, num2;
	let isBanaux;
	
	
	const modulo97 = (iban) => {
		let parts = Math.ceil(iban.length / 7);
		let remainer = "";
		for (let i = 1; i <= parts; i++) {
			remainer = String(parseFloat(remainer + iban.substr((i - 1) * 7, 7)) % 97);
		}
		return remainer;
	};
	const getNumIBAN = (letra) => {
		let ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return ls_letras.search(letra) + 10
	};
	
	
	// Se coge las primeras dos letras y se pasan a números
	letra1 = iban.substring(0, 1);
	letra2 = iban.substring(1, 2);
	num1 = getNumIBAN(letra1);
	num2 = getNumIBAN(letra2);
	
	//Se sustituye las letras por números.
	isBanaux = String(num1) + String(num2) + iban.substring(2);
	
	// Se mueve los 6 primeros caracteres al final de la cadena.
	isBanaux = isBanaux.substring(6) + isBanaux.substring(0, 6);
	
	//Se calcula el resto, llamando a la función modulo97
	let resto = modulo97(isBanaux);
	
	
	if (resto != 1) { // comparo STRING con NUMBER
		return config.symbols.ibanEs.messages.invalid[config.language];
	};	
	
	
	return "";
	
};

