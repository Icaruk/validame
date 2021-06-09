
const executeValidation = require("../utils/executeValidation");



module.exports = function any(stringParaValidar, arrValidations, config) {
	
	let result;
	
	console.log( ">>> ANY" );
	
	
	for (let _i = 0; _i < arrValidations.length; _i ++) {
		
		const validation = arrValidations[_i];
		
		result = executeValidation(stringParaValidar, validation, config);
		if (result.isCorrect) break;
		
	};
	
	
	return result;
	
};
