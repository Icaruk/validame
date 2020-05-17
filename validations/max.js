
const multiReplace = require("../utils/multiReplace");


module.exports = (errorMessagesArr, string, maxLength) => {
	
	if (! string) string = "";
	let length = string.length;
	
	if (length > maxLength) {
		
		let strError = multiReplace(errorMessagesArr[0], {
			"_%1": maxLength,
			"_%2": length,
		});
		
		
		return strError;
		
	};
	
	
	return "";
	
}