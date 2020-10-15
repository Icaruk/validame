
// Import
const {validame, validameConfig, validameUtils} = require("../index");

const multiReplace = validameUtils.multiReplace;


// Create the function
const myCustomRule = (stringToValidate, value, config) => {
	
	let upper = new RegExp(`[A-Z]{${value[0]}}`).test(stringToValidate);
	let lower = new RegExp(`[a-z]{${value[1]}}`).test(stringToValidate);
	
	
	if (!upper || !lower) {
		
		// Create message using replacers
		let errorMessage = multiReplace(config.rules.upperAndLower.messages.must[config.language], {
			"_%1": value[0],
			"_%2": value[1],
		});
		
		return errorMessage;
		
		
		// Without multilanguage
		return `It must have at least ${value[0]} uppercase and ${value[1]} lowercase characters`;
		
	};
	
	
	// All OK
	return "";
	
};


// Create your custom rule
validameConfig.rules.upperAndLower = {
	fnc: myCustomRule,
	messages: {
		must: {
			es: "Tiene que tener al menos _%1 mayúsculas y _%2 minúsculas.",
			en: "It must have at least _%1 uppercase and _%2 lowercase characters",
		}
	},
};



// And you can use it now:
let error1 = validame("mike", {
	upperAndLower: [1, 2],
});
// error1 = "It must have at least 1 uppercase and 2 lowercase characters"

let error2 = validame("Mike", {
	upperAndLower: [1, 2],
});
// error2 = ""
