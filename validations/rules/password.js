
const multiReplace = require("../../utils/multiReplace");



module.exports = (stringParaValidar, value, config) => {
	
	let [lowercase = 0, uppercase = 0, numbers = 0] = value;
	
	
	let lower = new RegExp(`[a-z]{${uppercase}}`).test(stringParaValidar);
	let upper = new RegExp(`[A-Z]{${lowercase}}`).test(stringParaValidar);
	let number = new RegExp(`[0-9]{${numbers}}`).test(stringParaValidar);
	
	
	if (!lower) return multiReplace(config.rules.password.messages.lower[config.language], {
		"_%1": lowercase,
	});
	if (!upper) return multiReplace(config.rules.password.messages.upper[config.language], {
		"_%1": lowercase,
	});
	if (!number) return multiReplace(config.rules.password.messages.number[config.language], {
		"_%1": lowercase,
	});
	
	
	// Todo guay
	return "";
	
};
