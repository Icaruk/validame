
exports.postalCodeEs = (stringParaValidar, config) => {
	
	// *******************
	// Compruebo longitud
	// *******************
	
	if (stringParaValidar.length !== 5) return config.symbols.postalCodeEs.messages.digits[config.language];
	
	
	
	// *******************
	// Compruebo estructura
	// *******************
	
	let regex = new RegExp(/\d/, "");
	let correcto1 = regex.test(stringParaValidar);
	if (! correcto1) return config.symbols.postalCodeEs.messages.invalid[config.language];
	
	regex = new RegExp(/^(?:0?[1-9]|[1-4]\d|5[0-2])\d{3}$/, "");
	let correcto2 = regex.test(stringParaValidar);
	if (! correcto2) return config.symbols.postalCodeEs.messages.invalid[config.language];
	
	
	return "";
	
};