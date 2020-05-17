
const multiReplace = require("../utils/multiReplace");


module.exports = (errorMessagesArr, string, minLength) => {
	
	if (! string) string = "";
	let length = string.length;
	
	if (length < minLength) {
	
		let strError = multiReplace(errorMessagesArr[0], {
			"_%1": minLength,
			"_%2": length,
		});
		
		
		return strError;
		
	};
	
	
	return "";
	
};