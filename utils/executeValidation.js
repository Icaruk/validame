
module.exports = function executeValidation(stringToValidate, validationId, config) {
	
	const validations = config.validations;
	
	
	if (typeof validationId === "string") {
		
		console.log( "		------ STRING" );
		
		const validation = validations[validationId];
		const regex = validation.regex;
		
		
		if (regex.test(stringToValidate)) {
			return {
				isCorrect: true,
			};
		} else {
			return {
				isCorrect: false,
				message: "No cumple regex",
			};
		};
		
	} else if (validationId instanceof RegExp) {	
		
		const correct = validationId.test(stringToValidate);
		const objCorrect = {isCorrect: correct};
		
		if (!correct) objCorrect.message = "El texto no es válido";
		
		return objCorrect;
		
	} else if (typeof validationId === "object" && validationId !== null) {
		
		console.log( "		------ OBJECT" );
		
		for (_key in validations) {
			
			// Compruebo si es una validación predefinida (string u objeto)
			
			
			
		};
			
	};
	
	
};