
exports.phoneEs = (stringParaValidar, config) => {
		
	let regex = new RegExp(/^[0-9]*$/, "");
	let correcto1 = regex.test(stringParaValidar);
	if (! correcto1) return config.symbols.phoneEs.messages.invalid[config.language];
	
	
	if (stringParaValidar.length !== 9) return config.symbols.phoneEs.messages.digits[config.language];
	
	
	let correcto3 = ["6", "7", "8", "9"].includes(stringParaValidar.slice(0, 1));
	if (! correcto3) return config.symbols.phoneEs.messages.invalid[config.language];
	
	
	return "";
	
};



exports.mobileEs = (stringParaValidar, config) => {
	
	let regex = new RegExp(/^[0-9]*$/, "");
	let correcto1 = regex.test(stringParaValidar);
	if (! correcto1) return config.symbols.mobileEs.messages.invalid[config.language];
	
	
	if (stringParaValidar.length !== 9) return config.symbols.mobileEs.messages.digits[config.language];
	
	
	let correcto3 = ["6", "7"].includes(stringParaValidar.slice(0, 1));
	if (! correcto3) return config.symbols.mobileEs.messages.invalid[config.language];
	
	
	return "";
	
};

