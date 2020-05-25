## This is currently in development, but this version is usable.<br>More features are coming.



<div style="text-align:center">
	<h1> validame </h1>
	<img src="https://i.gyazo.com/a979d99bac6f4e8d04ee8668634f1cf9.png" />
</div>



**validame** is a lightweight javascript **string validator**.

- 🚀 Lightweight (23 kB).
- ⚪️ Zero dependencies.
- 🔧 Totally customizable.
- 🧩 Modular.
- 🌍 Multilanguage.



# ⬇️ Import

```js
const vldm = require("validame");
```



# 🔮Basic examples:

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



# 🧭 Usage:

**Returns** an empty string if the validation is correct, otherwise it returns an string explaining the error.

```js
vldm.v (stringToValidate, rules);
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
	// 1: Empty string will return "" (OK) but null will return error.
	// 2: Empty string OR null will return error.
	req: 1,
	
	// (Explained below) Contains a list of symbols separated with a space.
	wl: "a A _ 1",
	
}
```

The rules will be checked in the same order they are listed, example:

```js
{
	min: 5, // first check
	max: 10 // second check
}
```



## 🏳️ Rule wl (whitelist):

- The symbol list must be separated with a space, example: `a A _ !`.
- Each symbol has a regex or function association.
- Possible validation codes and their associations:

	- `a`: `a-z`
	- `A`: `A-Z`
	- `1`: `0-9`
	- `_`: `spaces`
	- `!`: `.#·:$%&()?¿!¡@|+_-ºª`
	- `ñ`: `áéíóúñ`

- The validation is done from left to right.
- The error string is built with the `vldm.options.messages.wl` strings (explained below).



<br>



# ⚙️ Options:

They are at: `vldm.o`



#### 🌍 Property _language_

`vldm.o.language`

It specifies the language of the errors given.
At the moment the possible options are: 

- **"es"**
- **"en"**



#### 🧾 Property _messages_

`vldm.o.messages`

This property contains all the error messages given. The object has the following structure:

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


#### 🧱 Property _symbolToFnc_

`vldm.o.symbolToFnc`

This property contains the regex/function of each symbol.<br>
You can add your own.


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


#### 🧱 Property _ruleToFnc_

`vldm.o.ruleToFnc`

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



<br>



# 💡 Advanced examples:


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





