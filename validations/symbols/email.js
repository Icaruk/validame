
exports.email = (stringParaValidar, config) => {
	
	// *******************
	// Compruebo estructura
	// *******************
	
	let regex = new RegExp(/^\w+([\.-]*\w+[\.-]*)*@\w+([\.-]?\w+)*(\.\w{2,16})+$/, "g");
	let correcto = regex.test(stringParaValidar);
	if (! correcto) return config.symbols.email.messages.invalid[config.language];
	
	
	let strPreArroba = stringParaValidar.split("@")[0];
	regex = new RegExp(/\(\)<>@,;:"\[\]ç%&áéíóúàèìòùäëÏöüâêîôû\s/gim);
	let tieneCaracteres = regex.test(strPreArroba);
	if (tieneCaracteres) return config.symbols.email.messages.invalid[config.language];
	
	
	return "";
	
};