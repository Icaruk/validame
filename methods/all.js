
const executeValidation = require("../utils/executeValidation");



module.exports = function all(stringParaValidar, arrValidations, config) {
	
	let result = {
		isCorrect: true,
	};
	
	console.log( ">>> ALL" );
	
	
	for (let _i = 0; _i < arrValidations.length; _i ++) {
		
		const validation = arrValidations[_i];
		
		const resultValidation = executeValidation(stringParaValidar, validation, config);
		
		if (!resultValidation.isCorrect) return {
			isCorrect: false,
			message: "all"
		};
		
	};
	
	
	return result;
	
};
