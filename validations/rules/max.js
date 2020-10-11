
const multiReplace = require("../utils/multiReplace");



module.exports = (stringParaValidar, maxLength, config) => {
	
	if (! stringParaValidar) stringParaValidar = "";
	let length = stringParaValidar.length;
	
	
	
	if (length > maxLength) {
		
		let mensaje = config.rules.max.messages.error[config.language];
		
		let strError = multiReplace(mensaje, {
			"_%1": maxLength,
			"_%2": length,
		});
		
		
		return strError;
		
	};
	
	
	return "";
	
};