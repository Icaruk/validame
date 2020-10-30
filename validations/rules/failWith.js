
const multiReplace = require("../../utils/multiReplace");


module.exports = (stringParaValidar, arrPass, config) => {
	
	let error = "";
	
	
	let mensaje = config.rules.failWith.messages.error[config.language];
	
	let strError = multiReplace(mensaje, {
		"_%1": mensaje,
	});
	
	if (arrPass.includes(stringParaValidar)) return strError;
	
	
	return error;
	
};