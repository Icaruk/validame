
// Import
const {validame, validameConfig} = require("./index");



// Create the function
const myCustomSymbol = (stringToValidate, config) => {
	
	// Get the over18 symbol config
	const symbolMessages = config.symbols.over18.messages;
	
	
	// Check if it's a number
	let age = parseInt(stringToValidate);
	if (isNaN(age)) return symbolMessages.number[config.language];
	
	
	// Check if it's over 18
	if (age < 18) return symbolMessages.over[config.language];
	
	
	// All OK
	return "";
	
};



// Create your custom symbol
validameConfig.symbols.over18 = {
	regex: myCustomSymbol,
	messages: {
		number: {
			es: "Tiene que ser un número",
			en: "It must be a number",
		},
		over: {
			es: "Tiene que ser mayor que 18",
			en: "It must be over 18",
		}
	},
};



let error1 = validame("19", {
	allow: "over18",
});
// error1 = ""

let error2 = validame("17", {
	allow: "over18",
});
// error2 = "It must be over 18"