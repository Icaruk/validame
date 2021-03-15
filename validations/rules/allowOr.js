
module.exports = (stringParaValidar, strAllow, config) => {
	
	try {
		
		if (! stringParaValidar) stringParaValidar = "";
		let arrWl = strAllow.split(" "); // "a A 1" → ["a", "A", "1"]
		
		
		let rest = stringParaValidar // para el modo objeto
		let isRegex;
		
		
		
		let arrErrores = [];
		
		
		// Itero el array, por ejemplo: ["a", "1", "_"]
		for (_symbol of arrWl) {
			
			// Obtengo el symbol
			let symbol = config.symbols && config.symbols[_symbol];
			if (!symbol) {
				console.error(`${_symbol} is not a valid symbol`);
				continue;
			};
			
			
			// Obtengo la función/regex
			let fnc = symbol.regex;
			if (!fnc) {
				console.error(`${_symbol} has no regex/function`);
				continue;
			};
			
			
			
			// Es regex
			if (typeof fnc === "object") {
				
				isRegex = true;
				let regex = new RegExp(fnc);
				rest = rest.replace(regex, ""); // quito todo lo que concuerde con el regex
				
			// Es función
			} else if (typeof fnc === "function") {
				
				let error = fnc(stringParaValidar, config);
				arrErrores.push(error);
				
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
				
				
				arrErrores.push(error);
				
			};
		};
		
		
		if (arrErrores.length > 0 && arrErrores.every( _x => _x !== "")) {
			return arrErrores.find( _x => _x !== "");
		};		
		
		
		return "";
		
	} catch (err) {
		
		console.error( "validame error: ", err );
		return "";
		
	};
	
};


