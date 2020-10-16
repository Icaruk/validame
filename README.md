<div style="text-align:center">
	<h1> validame </h1>
	<img src="https://i.gyazo.com/a979d99bac6f4e8d04ee8668634f1cf9.png" />
</div>



**validame** is a javascript **string validator**.

- 🚀 Lightweight (8 kB packed and 25 kB unpacked).
- ⚪️ Zero dependencies.
- 🔧 Totally customizable.
- 🧩 Modular.
- 🌍 Multilanguage.



<br>



# Table of contents

- [Table of contents](#table-of-contents)
- [⬇️ Import](#-import)
- [🔮Basic examples](#-basic-examples)
- [🧭 Usage](#-usage)
- [📏 Rules](#-rules)
- [🏳️ Allow rule](#-allow-rule)
- [✳️ Symbols](#-symbols)
- [🌍 Language](#-language)
- [🧾 Editing a symbols and rules](#--editing-a-symbols-and-rules)
  - [➡️ `symbols` property](#-symbols-property)
  - [➡️ `rules` property](#-rules-property)
- [⚗️ Creating your own rules](#-creating-your-own-rules)
- [⚗️ Creating your own symbols](#-creating-your-own-symbols)
- [🔮 Advanced examples](#-advanced-examples)



<br/>



# ⬇️ Import

```js
const {validame} = require("validame");
```



<br>



# 🔮Basic examples

```js

let error = validame("Dog", {
	min: 4,
});

// error = "It should have 4 minimum characters but it has 3."

```

```js

let error = validame("Dog", {
	min: 2,
	max: 4
});

// error = ""

```

```js

let error = validame("My name is Mike", {
	allow: "1"
});

// error = "It's only allowed: numbers."

```

```js

let error = validame("My name is Mike", {
	allow: "a 1"
});

// error = "It's only allowed: lowercase and numbers."

```

```js

let error = validame("My name is Mike", {
	allow: "aA"
});

// error = "It's only allowed: letters."

```

```js

let error = validame("My name is Mike", {
	min: 4,
	max: 16,
	allow: "a A _"
});

// error = ""

```



<br>



# 🧭 Usage

**Returns** an empty string if the validation is correct, otherwise it returns an string explaining the error.

```js
validame (stringToValidate, rules);
```

- **stringToValidate** `string`: The string you want to validate.
- **rules** `object`: One or more rules, they are defined at `validameConfig.rules`.



<br/>



# 📏 Rules

```js
{
	// Minimum number of characters
	min: 1,
	
	// Maximum number of characters
	max: 10,
	
	// Exact number of characters
	minMax: 5,
	
	// 0: Empty string or null will return "" (OK).
	// 1: Empty string will return "" (OK) but null will return an error.
	// 2: Empty string OR null will return an error.
	req: 1,
	
	// (Explained below) Contains a list of symbols separated with a space.
	allow: "a A _ 1",
	
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



# 🏳️ Allow rule

- The symbol list must be **separated with a space**, example: `a A _ !`.
- If `stringToValidate` contains one or more characters **outside the allow list** it will return an error.
- The validation is done from **left to right**.
- Each symbol has a **regex or function** associated.



<br/>



# ✳️ Symbols

- **Regex**:
	- `a`: `a-z`
	- `A`: `A-Z`
	- `aA`: `a-zA-Z`
	- `1`: `0-9`
	- `_`: `spaces`
	- `!`: `ºª\!|"@·#€\$%&¬/()=?'¿¡^`\[+]´,{}-_<>~`
	- `ñ`: `áéíóúñ`
	- `Ñ`: `ÑÁÉÍÓÚ`
	- `ñÑ`: `áéíóúñÑÁÉÍÓÚ`
<br/>

- **Functions**:
	- `phoneEs`: Spanish telephone number.
	- `mobileEs`: Spanish mobile number.
	- `dni`: Valid DNI (spain).
	- `ibanEs`: Spanish IBAN.
	- `email`: Email address.
	- `postalCodeEs`: Spanish postal code.

<br/>

- If the symbols are regex, the error string is built automatically.



<br>



# 🌍 Language

```js
const {validameConfig} = require("./index");

valiadmeConfig.language = "es";
```

It specifies the language of the errors given.
At the moment the possible options are: `es` and `en`.



<br>



# 🧾 Editing a symbols and rules

```js
const {validameConfig} = require("./index");

valiadmeConfig.symbols = {...};
valiadmeConfig.rules = {...};
```


## ➡️ `symbols` property

- **regex** `regex | function`: Used when the symbol is called.
- **messages** `object`: Messages displayed and his translations.

Examples:

```js
"a": {
	regex: /[a-z]/g,
	messages: {
		name: {
			es: "minúsculas",
			en: "lowercase",
			xx: "here could be placed your own translation",
		}
	},
}
```

```js
"phoneEs": {
	regex: require("./validations/symbols/phone").phoneEs,
	messages: {
		invalid: {
			es: "No es un teléfono español válido",
			en: "It isn't a valid spanish phone",
			xx: "here could be placed your own translation",
		},
		digits: {
			es: "Debe tener 9 dígitos",
			en: "It must have 9 digits",
			xx: "here could be placed your own translation",
		}
	},
}
```



<br/>




## ➡️ `rules` property

- **regex** `regex | function`: Used when the symbol is called.
- The next properties are an `object` with the name of the message for the symbol:

Examples:

```js
allow: {
	fnc: require("./validations/rules/allow"),
	messages: {
		itsOnlyAllowed: {
			es: "Sólo se permite: ",
			en: "It's only allowed: ",
		},
		and: {
			es: " y ",
			en: " and ",
		}
	},
}
```

```js
min: {
	fnc: require("./validations/rules/min"),
	messages: {
		error: {
			es: "Debería tener _%1 caracteres como mínimo pero tiene _%2.",
			en: "It should have _%1 minimum characters but it has _%2.",
		}
	},
}
```

### 🔴 The `_%1` `_%2` (and so on) are replacers.



<br>



# ⚗️ Creating your own rules

```js
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

```



<br>



# ⚗️ Creating your own symbols

```js
// Import
const {validame, validameConfig} = require("validame");


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



let error1 = validame("35", {
	allow: "over18",
});
// error1 = ""

let error2 = validame("17", {
	allow: "over18",
});
// error2 = "It must be over 18"

```



<br/>



# 🔮 Advanced examples


```js

let error = validame("Name SurnameOne SurnameTwo", {
	min: 4,
	max: 64,
	allow: "a A _"
});

// error = ""
```

```js

let error = validame("600123456", {
	req: 1,
	allow: "phoneEs"
});

// error = ""
```

```js

let error = validame("", {
	req: 1,
	min: 4,
	max: 64,
	allow: "a A"
});

// error = "It can't be empty."
```

```js

let error = validame("", {
	req: 2,
	min: 4,
	max: 64,
	allow: "a A"
});

// error = "It can't be empty."
```

```js

let error = validame(null, {
	req: 1,
	min: 4,
	max: 64,
	allow: "a A"
});

// error = "It should have 4 minimum characters but it has 0."
```

```js

let error = validame(null, {
	req: 2,
	min: 4,
	max: 64,
	allow: "a A"
});

// error = "It can't be empty."
```


---

### [⏫](#table-of-contents)


