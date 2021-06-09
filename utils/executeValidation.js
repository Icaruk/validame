
module.exports = function executeValidation(stringToValidate, validation, config) {
	
	const validations = config.validations;
	
	
	if (typeof validation === "string") {
		
		console.log( "		------ STRING" );
		// validation2 = config.validations[validation];
	
	} else if (validation instanceof RegExp) {	
		
		console.log( "		------ REGEX\n" );
		console.log( validation, "test.", stringToValidate );
		
		const correct = validation.test(stringToValidate);
		
		console.log( "correct", `(${typeof correct}): `, correct);
		console.log( "" );
		
		const objCorrect = {isCorrect: correct};
		
		if (!correct) objCorrect.message = "El texto no es válido";
		
		return objCorrect;
		
	} else if (typeof validation === "object" && validation !== null) {
		
		console.log( "		------ OBJECT" );
		
		for (_key in config.validations) {
			
			// Compruebo si es una validación predefinida (string u objeto)
			
			
			
		};
			
	};
	
	
};