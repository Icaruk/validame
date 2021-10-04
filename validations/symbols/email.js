
exports.email = (stringParaValidar, config) => {
	
	// *******************
	// Compruebo estructura
	// *******************
	
	// Compruebo que no empiece por un caracter inválido
	let regex = new RegExp(/^[^_a-zA-Z0-9\s]/, "g");
	let empiezaMal = regex.test(stringParaValidar);
	if (empiezaMal) return config.symbols.email.messages.invalid[config.language];
	
	let strPreArroba = stringParaValidar.split("@")[0];
	regex = new RegExp(/\(\)<>@,;:"\[\]ç%&áéíóúàèìòùäëÏöüâêîôû\s/gim);
	let tieneCaracteres = regex.test(strPreArroba);
	if (tieneCaracteres) return config.symbols.email.messages.invalid[config.language];
	
	// let regex = new RegExp(/^\w+([\.-]*\w+[\.-]*)*@\w+([\.-]?\w+)*(\.\w{2,16})+$/, "g"); // old: vulnerable to ReDoS
	regex = new RegExp(/^[\w\.\-\+]+@[a-zA-Z0-9\.-]+(\.[\w\-]{2,16})+$/, "g");
	correcto = regex.test(stringParaValidar);
	if (! correcto) return config.symbols.email.messages.invalid[config.language];
	
	
	
	return "";
	
};