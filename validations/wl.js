
module.exports = (codeToRegex, errorMessagesArr, string, strCodes) => {
	
	let arrWl = strCodes.split(" "); // "a A 1" → ["a", "A", "1"]
	
	
	for (_code of arrWl) {
		
		let regex = codeToRegex[_code];
		
		
		if (regex) {
			regex = new RegExp(regex);
			string = string.replace(regex, "");
		};
		
	};
	
	
	
	// Si todavía queda algo, es que hay algo mal
	if (string !== "") {
		
		let error = errorMessagesArr.base;
		let maxIdx = arrWl.length - 1;
		
		
		arrWl.forEach( (_x, idx) => {
			
			if (idx === maxIdx) error += ` ${errorMessagesArr.and} `; // último separador
			
			error += errorMessagesArr[_x];
			
			if (idx < maxIdx - 1) error += ", "; // separador
			if (idx === maxIdx) error += "."; // punto final
			
		});
		
		
		return error;
		
		
	};
	
	
	return "";
	
	
};


