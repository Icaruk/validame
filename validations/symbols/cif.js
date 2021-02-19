
exports.cif = (stringParaValidar, config) => {
	
	// *******************
	// Compruebo longitud
	// *******************
	
	if (stringParaValidar.length !== 9) return config.symbols.cif.messages.length[config.language];
	
	
	
	// *******************
	// Compruebo estructura
	// *******************
	
	let regex = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW]{1})([0-9]{7})([0-9A-J])$/, "");
	let correcto = regex.test(stringParaValidar);
	
	if (! correcto) {
		// return "asd";
		return config.symbols.cif.messages.structure[config.language];
	};
	
	
	return "";
	
};

