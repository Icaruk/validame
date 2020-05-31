
const multiReplace = require("../utils/multiReplace");


module.exports = (errorMessagesObj, string, exactLength) => {
	
	if (! string) string = "";
	let length = string.length;
	
	if (length !== exactLength) {
		
		let strError = multiReplace(errorMessagesObj.minmax, {
			"_%1": exactLength,
			"_%2": length,
		});
		
		
		return strError;
		
	};
	
	
	return "";
	
}