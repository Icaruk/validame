
const multiReplace = require("../utils/multiReplace");


module.exports = (errorMessagesObj, string, maxLength) => {
	
	if (! string) string = "";
	let length = string.length;
	
	if (length > maxLength) {
		
		let strError = multiReplace(errorMessagesObj.max, {
			"_%1": maxLength,
			"_%2": length,
		});
		
		
		return strError;
		
	};
	
	
	return "";
	
}