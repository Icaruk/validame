
const executeValidation = require("../utils/executeValidation");



module.exports = function all(stringParaValidar, arrValidations, config) {
	
	let resultNone = {
		isCorrect: true,
	};
	
	console.log( ">>> NONE \n" );
	
	
	for (let _i = 0; _i < arrValidations.length; _i ++) {
		
		const validation = arrValidations[_i];
		
		let resultValidation = executeValidation(stringParaValidar, validation, config);
		
		console.log( "NONE resultNone", `(${typeof resultNone}): `, resultNone);
		
		if (resultValidation.isCorrect) {
			resultNone = {
				isCorrect: false,
				message: "Texto no permitido",
			};
			break;
		};
		
	};
	
	
	return resultNone;
	
};
