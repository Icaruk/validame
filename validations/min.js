
const multiReplace = require("../utils/multiReplace");


module.exports = (errorMessagesObj, string, minLength) => {
	
	if (! string) string = "";
	let length = string.length;
	
	if (length < minLength) {
		
		let strError = multiReplace(errorMessagesObj.min, {
			"_%1": minLength,
			"_%2": length,
		});
		
		
		return strError;
		
	};
	
	
	return "";
	
};