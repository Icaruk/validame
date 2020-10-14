
exports.email = (stringParaValidar, config) => {
	
	// *******************
	// Compruebo estructura
	// *******************
	
	let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "");
	let correcto = regex.test(stringParaValidar);
	if (! correcto) return config.symbols.email.invalid[config.language];
	
	
	return "";
	
};