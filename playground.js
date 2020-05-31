
// Import
const validame = require("./index");
const playground2 = require("./playground2");


validame.o.language = "en";



// Validame custom symbols
validame.o.symbolToFnc.startWithVowel = /^[aeiou]+.*/i;
validame.o.messages.en.wl.startWithVowel = "initial vowel";
validame.o.messages.es.wl.startWithVowel = "vocal inicial";

validame.o.symbolToFnc.over18 = (errorMessagesObj, stringToValidate) => {
	/*
		0: errorMessagesObj (object)
			- It's the same as validame.o.messages.<es/en>
			- With errorMessagesObj.wl.over18 you can get the specific errors of this symbol.
		1: stringToValidate (string) - The string you want to validate.
	*/
	
	// Check if it's a number
	let age = parseInt(stringToValidate);
	if (isNaN(age)) return "It must be a number";
	// if (isNaN(age)) return errorMessagesObj.wl.over18.mustBeANumber; // for multilanguage
	
	
	// Check if it's over 18
	if (age < 18) return "It must be over 18";
	// if (age < 18) return errorMessagesObj.wl.over18.over18; // for multilanguage
	
	
	// All OK
	return "";
	
};



validame.o.messages.en.upperAndLower = {
	upperAndLower: "It must have at least _%1 uppercase and _%2 lowercase characters",
};
validame.o.messages.es.upperAndLower = {
	upperAndLower: "Tiene que tener al menos _%1 mayúsculas y _%2 minúsculas",
};
validame.o.ruleToFnc.upperAndLower = (errorMessagesObj, stringToValidate, valueGiven) => {
	
	let upper = new RegExp(`[A-Z]{${valueGiven[0]}}`).test(stringToValidate);
	let lower = new RegExp(`[a-z]{${valueGiven[1]}}`).test(stringToValidate);
	
	
	// With multilanguage
	if (!upper || !lower) return validame.u.multiReplace(errorMessagesObj.upperAndLower, {
		"_%1": valueGiven[0],
		"_%2": valueGiven[1],
	});
	
	
	// Without multilanguage
	// if (!upper || !lower) return `It must have at least ${valueGiven[0]} uppercase and ${valueGiven[1]} lowercase characters`;
	
	
	// All OK
	return "";
	
};



let error = validame.v("Mike", {
	upperAndLower: [1, 2],
});

if (error === "") {
	console.log( "✅" );
} else {
	console.log("❌", error );
};



// playground2();


