
module.exports = (stringParaValidar, strAllow, config) => {
	
	if (! stringParaValidar) stringParaValidar = "";
	let arrWl = strAllow.split(" "); // "a A 1" → ["a", "A", "1"]
	
	
	let rest = stringParaValidar // para el modo objeto
	let isRegex;
	
	
	
	// Itero el array, por ejemplo: ["a", "1", "_"]
	for (_symbol of arrWl) {
		
		// Obtengo la función/regex
		let fnc = config.symbols[_symbol].regex;
		
		
		// Si no encuentro, paso al siguiente símbolo
		if (!fnc) continue;
		
		
		
		// Es regex
		if (typeof fnc === "object") {
			
			isRegex = true;
			let regex = new RegExp(fnc);
			rest = rest.replace(regex, ""); // quito todo lo que concuerde con el regex
			
		// Es función
		} else if (typeof fnc === "function") {
			
			let error = fnc(stringParaValidar, config);
			return error;
			
		};
		
	};
	
	
	
	if (isRegex) {
		
		if (rest !== "") { // Si todavía queda algo, es que hay algo mal
			
			let error = config.rules.allow.messages.itsOnlyAllowed[config.language];
			let maxIdx = arrWl.length - 1;
			
			
			let strAnd = config.rules.allow.messages.and[config.language];
			
			
			arrWl.forEach( (_x, idx) => {
				
				if (idx === maxIdx && maxIdx > 0) error += strAnd; // último separador: "y" en lugar de ","
				
				error += config.symbols[_x].messages.name[config.language];
				
				if (idx < maxIdx - 1) error += ", "; // separador
				if (idx === maxIdx) error += "."; // punto final
				
			});
			
			
			return error;
			
		};
	};
	
	
	return "";
	
};


