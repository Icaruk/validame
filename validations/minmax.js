
const multiReplace = require("../utils/multiReplace");


module.exports = (errorMessagesArr, string, exactLength) => {
	
	if (! string) string = "";
	let length = string.length;
	
	if (length !== exactLength) {
		
		let strError = multiReplace(errorMessagesArr[0], {
			"_%1": exactLength,
			"_%2": length,
		});
		
		
		return strError;
		
	};
	
	
	return "";
	
}