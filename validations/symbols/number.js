exports.number = (stringParaValidar, config) => {
	
	// Compruebo que sólo tenga números y caracteres específicos
	let regex = new RegExp(/^[0-9]*([\.,]){0,1}[0-9]*/, "g");
	let correcto1 = regex.test(stringParaValidar);
	if (! correcto1) return config.symbols.number.messages.invalid[config.language];
	
	
	let number = parseFloat(stringParaValidar);
	console.log( "number", `(${typeof number}): `, number);
	
	console.log( "isNan: ", Number.isNaN(number) );
	if (Number.isNaN(number)) return config.symbols.number.messages.invalid[config.language];
	
	
	
	return "";
	
};