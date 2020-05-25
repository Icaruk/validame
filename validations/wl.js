
module.exports = (symbolToFnc, errorMessagesObj, string, strCodes) => {
	
	if (! string) string = "";
	let arrWl = strCodes.split(" "); // "a A 1" → ["a", "A", "1"]
	
	
	
	// Símbolo único
	// if (arrWl.length === 1) {
		
	// 	console.log( "UNIQUE SYMBOL" );
		
	// 	let specialCode = arrWl[0]; // "phone"
		
	// 	return;
		
	// };
	
	
	
	// Itero los símbolos
	for (_symbol of arrWl) {
		
		// Obtengo la función/regex
		let fnc = symbolToFnc[_symbol];
		
		
		// Si no encuentro, paso al siguiente símbolo
		if (!fnc) continue;
		
		
		
		// Es regex
		if (typeof fnc === "object") {
			
			let regex = new RegExp(fnc);
			let rest = string.replace(regex, ""); // quito todo lo que concuerde con el regex
			
			
			// Si todavía queda algo, es que hay algo mal
			if (rest !== "") {
				
				let error = errorMessagesObj.base;
				let maxIdx = arrWl.length - 1;
				
				
				arrWl.forEach( (_x, idx) => {
					
					if (idx === maxIdx && maxIdx > 0) error += `${errorMessagesObj.and}`; // último separador: "y" en lugar de ","
					
					error += errorMessagesObj[_x];
					
					if (idx < maxIdx - 1) error += ", "; // separador
					if (idx === maxIdx) error += "."; // punto final
					
				});
				
				
				return error;
				
			};
		};
		
		
		
		// Es función
		if (typeof fnc === "function") {
			
			let error = fnc(errorMessagesObj[_symbol], string);
			return error;
			
		};
		
		
		
	};
	
	
	return "";
	
};


