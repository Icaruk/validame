<div style="text-align:center">
	<h1> validame </h1>
	<img src="https://i.gyazo.com/a979d99bac6f4e8d04ee8668634f1cf9.png" />
</div>



**validame** is a javascript **string validator**.

- 🚀 Lightweight (23 kB).
- ⚪️ Zero dependencies.
- 🔧 Totally customizable.
- 🧩 Modular.
- 🌍 Multilanguage.



<br>



# ⬇️ Import

```js
const validame = require("validame");
```



<br>



# 🔮Basic examples:

```js

let error = validame.v("Dog", {
	min: 4,
});

// error = "It should have 4 minimum characters but it has 3."

```

```js

let error = validame.v("Dog", {
	min: 2,
	max: 4
});

// error = ""

```

```js

let error = validame.v("My name is Mike", {
	wl: "1"
});

// error = "It's only allowed: numbers."

```

```js

let error = validame.v("My name is Mike", {
	wl: "a 1"
});

// error = "It's only allowed: lowercase and numbers."

```

```js

let error = validame.v("My name is Mike", {
	wl: "a A"
});

// error = "It's only allowed: lowercase and uppercase."

```

```js

let error = validame.v("My name is Mike", {
	min: 4,
	max: 16,
	wl: "a A _"
});

// error = ""

```



<br>



# 🧭 Usage:

**Returns** an empty string if the validation is correct, otherwise it returns an string explaining the error.

```js
validame.v (stringToValidate, rules);
```

- **stringToValidate** (string):
	- The string you want to validate.
	
- **rules** (object):
	- One or more of the following:

```js
{
	// Minimum number of characters
	min: 1,
	
	// Maximum number of characters
	max: 10,
	
	// Exact number of characters
	minmax: 5,
	
	// 0: Empty string or null will return "" (OK).
	// 1: Empty string will return "" (OK) but null will return an error.
	// 2: Empty string OR null will return an error.
	req: 1,
	
	// (Explained below) Contains a list of symbols separated with a space.
	wl: "a A _ 1",
	
}
```

The rules will be checked in the same order they are listed, example:

```js
{
	min: 5, // first check (if it fails, it stops here)
	max: 10 // second check
}
```



<br>



## 🏳️ Whitelist (wl) rule:

- The symbol list must be **separated with a space**, example: `a A _ !`.
- If stringToValidate contains one or more characters **outside the whitelist** it will return an error.
- The validation is done from **left to right**.
- Each symbol has a **regex or function** associated.
- Built-in symbols and their associations:
	
	<br>
	
	- Regex:
		- `a`: `a-z`
		- `A`: `A-Z`
		- `1`: `0-9`
		- `_`: `spaces`
		- `!`: `ºª\!|"@·#€\$%&¬/()=?'¿¡^[]+,{}-_<>~` `´
		- `ñ`: `áéíóúñ`
		- `Ñ`: `ÑÁÉÍÓÚ`
	<br>
	
	- Functions:
		- `phoneEs`: Spanish telephone number.
		- `mobileEs`: Spanish mobile number.
		- `dni`: Valid DNI (spain).
		- `ibanEs`: Spanish IBAN.
		- `email`: Email address.
		- `postalCodeEs`: Spanish postal code.
	<br>
	
- If the symbols are regex, the error string is built automatically.



<br>



# ⚙️ Options:

They are at: `validame.o`



<br>



#### 🌍 Property language

`validame.o.language`

It specifies the language of the errors given.
At the moment the possible options are: 

- **"es"**
- **"en"**



<br>
#### 🧾 Property messages

`validame.o.messages`

This property contains all the error messages given. The object has the following structure:

```js
languageCode: {
	rule1: "Your error message here",
	rule2: "Your error message here",
	wl: {
		regexSymbol1: "Your error message here",
		regexSymbol2: "Your error message here",
		functionSymbol1: "Your error message here",
		functionSymbol2: "Your error message here",
	}
}
```

Currently `validame.o.messages.en` contains:

```js
{
	min: {
		"min": "It should have _%1 minimum characters but it has _%2."
	},
	max: {
		"max": "It should have _%1 maximum characters but it has _%2."
	},
	minmax: {
		"minmax": "It should have _%1 characters but it has _%2."
	},
	req: {
		"cantBeEmpty": "It can't be empty."
	},
	wl: {
		"itsOnlyAllowed": "It's only allowed: ",
		"and": " and ",
		"a": "lowercase",
		"A": "uppercase",
		"1": "numbers",
		"_": "spaces",
		"!": "special characteres",
		"ñ": "accent and ñ",
		
		phoneEs: {
			"onlyNumbers": "It must contain only numbers",
			"9numbers": "It must have 9 numbers",
			"spanish": "It must be a spanish telephone",
		},
		mobileEs: {
			"onlyNumbers": "It must contain only numbers",
			"9numbers": "It must have 9 numbers",
			"spanish": "It must be a spanish mobile",
		},
		
		dni: {
			"structure": "It should follow one these structures: 12345678Z o X1234567L",
			"finalLetter": "The final letter it's incorrect",
		},
		
		iban: {
			"structure": "It should follow the following structure (without spaces): ES 12 1234 1234 12 1234567890",
			"notValid": "The IBAN isn't valid"
		},
		
		email: {
			"structure": "It should follow the following structure: address@email.es",
		},
		
		postalCode: {
			"5numbers": "It must have 5 numbers",
			"onlyNumbers": "It must contain only numbers",
			"notValid": "The postal code isn't valid"
		},
	},
},
```

- The `_%1` `_%2` (and so on) are replacers.



<br>
#### 🧱 Property symbolToFnc

`validame.o.symbolToFnc`

- This property contains the regex/function of each symbol.<br>
- Built-in symbols:

```js
{
	"a": /[a-z]/g,
	"A": /[A-Z]/g,
	"1": /[0-9]/g,
	"_": /\s/g,
	"!": /[ºª\\!\|"@·#€\$%&¬\/\(\)=\?'¿¡\^`\[\+\]´,{}\-_<>~]/g,
	"ñ": /[ñáéíóú]/g,
	"Ñ": /[ÑÁÉÍÓÚ]/g,
	
	"phoneEs": [Function],
	"mobileEs": [Function],
	"dni": [Function],
	"ibanEs": [Function],
	"email": [Function],
	"postalCodeEs": [Function],
},
```

##### You can add your own regex symbols:

```js

validame.o.symbolToFnc.startWithVowel = /^[aeiou]+.*/i;

// Add the error message
validame.o.messages.en.wl.startWithVowel = "initial vowel"; // To build → It's only allowed: initial vowel
validame.o.messages.es.wl.startWithVowel = "vocal inicial"; // To build → Sólo se permite: vocal inicial



// And you can use it now:
let error = validame.v("Adrian", {
	wl: "startWithVowel",
});
// error = ""

let error = validame.v("Mike", {
	wl: "startWithVowel",
});
// error = "It's only allowed: initial vowel"


```

##### You can add your own function symbols:

```js

// This is optional, you can just return the error message on your function.
validame.o.messages.es.wl.over18 = {
	mustBeANumber: "It must be a number",
	over18: "It must be over 18",
};


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



// And you can use it now:
let error = validame.v("19", {
	wl: "over18",
});
// error = ""

let error = validame.v("17", {
	wl: "over18",
});
// error = "It must be over 18"

```



<br>



#### 🧱 Property ruleToFnc

`validame.o.ruleToFnc`

This property contains the functions that makes the validation of each rule.<br>
You can add your own.


```js
{
	"min": [Function],
	"max": [Function],
	"minmax": [Function],
	"req": [Function],
	"wl": [Function]
},
```


##### You can add your own rules:

```js

validame.o.messages.en.upperAndLower = {
	upperAndLower: "It must have at least _%1 uppercase and _%2 lowercase characters",
};
validame.o.messages.es.upperAndLower = {
	upperAndLower: "Tiene que tener al menos _%1 mayúsculas y _%2 minúsculas",
};

validame.o.ruleToFnc.upperAndLower = (errorMessagesObj, stringToValidate, valueGiven) => {
	/*
		0: errorMessagesObj (object)
			- It's the same as validame.o.messages.<es/en>
			- With errorMessagesObj.wl.over18 you can get the specific errors of this symbol.
		1: stringToValidate (string) - The string you want to validate.
		2: valueGiven (any) - In this case we have an array of 2 numbers.
	*/
	
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



// And you can use it now:
let error = validame.v("mike", {
	upperAndLower: [1, 2],
});
// error = "It must have at least 1 uppercase and 2 lowercase characters"

let error = validame.v("Mike", {
	upperAndLower: [1, 2],
});
// error = ""

```



<br>



# 💡 Advanced examples:


```js

let error = validame.v("Name SurnameOne SurnameTwo", {
	min: 4,
	max: 64,
	wl: "a A _"
});

// error = ""
```

```js

let error = validame.v("600123456", {
	req: 1,
	wl: "phoneEs"
});

// error = ""
```

```js

let error = validame.v("", {
	req: 1,
	min: 4,
	max: 64,
	wl: "a A"
});

// error = "It can't be empty."
```

```js

let error = validame.v("", {
	req: 2,
	min: 4,
	max: 64,
	wl: "a A"
});

// error = "It can't be empty."
```

```js

let error = validame.v(null, {
	req: 1,
	min: 4,
	max: 64,
	wl: "a A"
});

// error = "It should have 4 minimum characters but it has 0."
```

```js

let error = validame.v(null, {
	req: 2,
	min: 4,
	max: 64,
	wl: "a A"
});

// error = "It can't be empty."
```





