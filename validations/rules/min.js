
const multiReplace = require("../utils/multiReplace");



module.exports = (stringParaValidar, minLength, config) => {
	
	if (! stringParaValidar) stringParaValidar = "";
	let length = stringParaValidar.length;
	
	
	
	if (length < minLength) {
		
		let mensaje = config.rules.min.messages.error[config.language];
		
		let strError = multiReplace(mensaje, {
			"_%1": minLength,
			"_%2": length,
		});
		
		
		return strError;
		
	};
	
	
	return "";
	
};