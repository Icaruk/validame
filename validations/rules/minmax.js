
const multiReplace = require("../../utils/multiReplace");



module.exports = (stringParaValidar, exactLength, config) => {
	
	if (! stringParaValidar) stringParaValidar = "";
	let length = stringParaValidar.length;
	
	
	
	if (length !== exactLength) {
		
		let mensaje = config.rules.minMax.messages.error[config.language];
		
		let strError = multiReplace(mensaje, {
			"_%1": exactLength,
			"_%2": length,
		});
		
		
		return strError;
		
	};
	
	
	return "";
	
};