
const executeValidation = require("../utils/executeValidation");



module.exports = function any(stringParaValidar, arrValidations, config) {
	
	let result = {
		isCorrect: false,
		message: "Message any",
	};
	
	console.log( ">>> ANY" );
	
	
	for (let _i = 0; _i < arrValidations.length; _i ++) {
		
		const validation = arrValidations[_i];
		
		result = executeValidation(stringParaValidar, validation, config);
		
		if (result.isCorrect) return {
			isCorrect: true
		};
		
	};
	
	
	return result;
	
};
