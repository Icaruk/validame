module.exports = (text = "", objReplace = {}) => {
	
	for (const [key, val] of Object.entries(objReplace)) {
		text = text.replace(key, val);
	};
	
	
	return text;
	
};