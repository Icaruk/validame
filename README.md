## This is currently in development, but this version is usable.<br>More features are coming.



<div style="text-align:center">
	<h1> validame </h1>
	<img src="https://i.gyazo.com/8d775e85f5e9c5af12332fa13454359b.png" />
</div>



**validame** is a lightweight javascript **string validator** with zero dependencies.<br>
With a few characters you can validate any string.



# Import

	const vldm = require("validame");



# Basic examples:

```js

let error = vldm.v("Dog", {
	min: 4,
});

// error = "It should have 4 minimum characters but it has 3."

```

```js

let error = vldm.v("Dog", {
	min: 2,
	max: 4
});

// error = ""

```

```js

let error = vldm.v("My name is Mike", {
	wl: "1"
});

// error = "It's only allowed: numbers."

```

```js

let error = vldm.v("My name is Mike", {
	wl: "a 1"
});

// error = "It's only allowed: lowercase and numbers."

```

```js

let error = vldm.v("My name is Mike", {
	wl: "a A"
});

// error = "It's only allowed: lowercase and uppercase."

```

```js

let error = vldm.v("My name is Mike", {
	wl: "a A _"
});

// error = ""

```



<br>



# Usage:

**Returns** an empty string if the validation is correct, otherwise it returns an string explaining the error.

```js
vldm.v (stringToValidate, validationObject);
```

- **stringToValidate** (string):
	- The string you want to validate.
	
- **validationObject** object):
	- One or more of the following:

```js
	{
		// Minimum number of characters
		min: 1,
		
		// Maximum number of characters
		max: 10,
		
		// 0: Not required
		// 1: It pass with "" but fails with null.
		// 2: It fails with "" and null.
		req: 1,
		
		// It's a whitelist (explained below), separated with a space.
		wl: "a A _ 1",
		
	}
```

Order example:

```js
{
	min: 5,
	max: 10
}
```

First it will check if the _stringToValidate_ has at least 5 characters.
Then it will check if it has 10 characters or less.


## wl: validationCodes

- All characters from stringToValidate must match with at least one of the validationCodes.
- They must be separated with a space.
- Possible validation codes:

	- `a`: `a-z`
	- `A`: `A-Z`
	- `1`: `0-9`
	- `_`: `spaces`
	- `!`: `.#·:$%&()?¿!¡@|+_-ºª`
	- `ñ`: `áéíóúñ`

- The validation is done from left to right.
- The error string is built with the `vldm.options.messages.wl` strings (explained below).



<br>



# Options:

They are at: `vldm.o`



#### Property _language_

`vldm.o.language`

It specifies the language of the errors given.
At the moment the possible options are: 

- **"es"**
- **"en"**



#### Property _messages_

`vldm.o.messages`

This property contain an object with the following structure:

```js
languageCode: {
	validationCode1: "Your error message here",
	validationCode2: "Your error message here",
}
```

Currently `vldm.o.messages.en` contains:

```js
{
	min: [
		"It should have _%1 minimum characters but it has _%2."
	],
	max: [
		"It should have _%1 maximum characters but it has _%2."
	],
	req: [
		"It can't be empty."
	],
	wl: {
		"base": "It's only allowed:",
		"and": "and",
		"a": "lowercase",
		"A": "uppercase",
		"1": "numbers",
		"_": "spaces",
		"!": "special characteres",
		"ñ": "accent and ñ",
	}
}
```

The `_%1` `_%2` (and so on) are replacers.


#### Property _codeToRegex_

`vldm.o.codeToRegex`

```js
{
	"a": /[a-z]/g,
	"A": /[A-Z]/g,
	"1": /[0-9]/g,
	"_": /\s/g,
	"!": /[.#·:$%&()?¿!¡@|+_\\-ºª]/g,
	"ñ": /[ñáéíóú]/g,
},
```


<br>


	
# Advanced examples:


```js

let error = vldm.v("Name SurnameOne SurnameTwo", {
	min: 4,
	max: 64,
	wl: "a A _ ñ"
});

// error = ""
```

```js

let error = vldm.v("600123456", {
	min: 9,
	max: 9,
	wl: "1"
});

// error = ""
```

```js

let error = vldm.v("", {
	req: 1,
	min: 4,
	max: 64,
	wl: "a A"
});

// error = "It can't be empty."
```

```js

let error = vldm.v("", {
	req: 2,
	min: 4,
	max: 64,
	wl: "a A"
});

// error = "It can't be empty."
```

```js

let error = vldm.v(null, {
	req: 1,
	min: 4,
	max: 64,
	wl: "a A"
});

// error = "It should have 4 minimum characters but it has 0."
```

```js

let error = vldm.v(null, {
	req: 2,
	min: 4,
	max: 64,
	wl: "a A"
});

// error = "It can't be empty."
```



