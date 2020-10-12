
const options = {
	
	language: "en", // es, en, fr
	
	messages: {
		
		es: {
			min: {
				"min": "Debería tener _%1 caracteres como mínimo pero tiene _%2."
			},
			max: {
				"max": "Debería tener _%1 caracteres como máximo pero tiene _%2."
			},
			minmax: {
				"minmax": "Debería tener _%1 caracteres pero tiene _%2."
			},
			req: {
				"cantBeEmpty": "No puede estar vacío."
			},
			wl: {
				"itsOnlyAllowed": "Sólo se permite: ",
				"and": " y ",
				"a": "minúsculas",
				"A": "mayúsculas",
				"1": "números",
				"_": "espacios",
				"!": "caracteres especiales",
				"ñ": "acentos y ñ",
				
				phoneEs: {
					"onlyNumbers": "Sólo puede contener números",
					"9numbers": "Tiene que tener tener 9 números",
					"spanish": "Tiene que ser un teléfono español",
				},
				mobileEs: {
					"onlyNumbers": "Sólo puede contener números",
					"9numbers": "Tiene que tener tener 9 números",
					"spanish": "Tiene que ser un móvil español",
				},
				
				dni: {
					"structure": "Debe seguir una de las siguiente estructuras: 12345678Z o X1234567L",
					"finalLetter": "La letra final es incorrecta",
				},
				
				iban: {
					"structure": "Debe seguir la siguiente estructura (sin espacios): ES 12 1234 1234 12 1234567890",
					"notValid": "El IBAN no es válido"
				},
				
				email: {
					"structure": "Debe seguir la siguiente estructura: direccion@email.es",
				},
				
				postalCode: {
					"5numbers": "Tiene que tener 5 números",
					"onlyNumbers": "Sólo puede contener números",
					"notValid": "El código postal no es válido"
				},
				
				
			},
			
			
		},
		
		en: {
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
		
	},
	
	// ruleToFnc: {
		
	// 	"min": require("./validations/min"),
	// 	"max": require("./validations/max"),
	// 	"minmax": require("./validations/minmax"),
	// 	"req": require("./validations/rules/req"),
	// 	"wl": require("./validations/rules/allow"),
		
	// },
	
	symbolToFnc: {
		"a": /[a-z]/g,
		"A": /[A-Z]/g,
		"1": /[0-9]/g,
		"_": /\s/g,
		"!": /[ºª\\!\|"@·#€\$%&¬\/\(\)=\?'¿¡\^`\[\+\]´,{}\-_<>~]/g,
		"ñ": /[ñáéíóú]/g,
		"Ñ": /[ÑÁÉÍÓÚ]/g,
		
		"phoneEs": require("./validations/symbols/phone").phoneEs,
		"mobileEs": require("./validations/symbols/phone").mobileEs,
		"dni": require("./validations/symbols/dni").dni,
		"ibanEs": require("./validations/symbols/iban").ibanEs,
		"email": require("./validations/symbols/email").email,
		"postalCodeEs": require("./validations/symbols/postalCode").postalCodeEs,
		
	},
	
};



/**
 * Validates a string.
 * https://www.npmjs.com/package/validame
 * ___
 * 
 * @param {string} stringParaValidar - String to validate.
 * @param {object} rules - Object that contains a list with one or more rules.
 * 
 * ___
 * 
 * @returns {string} If the validation it's correct returns "", otherwise returns the error.
 * 
*/

const validation = (stringParaValidar = "", rules) => {
	
	let configRules = config.rules;
	let error = "";
	
	
	
	// Recorro las propiedades del param rules
	for (const [key, value] of Object.entries(rules)) {
		
		// Obtengo la función asociada a la regla (min, max, minmax, req, wl...)
		const fnc = configRules[key].fnc;
		
		
		if (fnc) {
			error = fnc(stringParaValidar, value, config);
		};
		
		if (error) break;
		
	};
	
	
	// console.log( "------------ LLEGO AL FINAL SIN NINGÚN ERROR -------------" );
	
	
	return error;
	
};



const utils = {
	multiReplace: require("./utils/multiReplace"),
};



// class Validame {
	
// 	instance = null;
	
	
// 	constructor () {
		
// 		this.o = options;
// 		this.v = validation;
// 		this.u = utils;
		
		
// 		if (this.instance) {
// 			return this.instance;
// 		};
		
		
// 		this.instance = this;
// 		return this;
		
// 	};
	
// };



let config = {
	
	language: "en", // es, en, fr
	
	symbols: {
		
		"a": {
			regex: /[a-z]/g,
			name: {
				es: "minúsculas",
				en: "lowercase",
			}
		},
		"A": {
			regex: /[A-Z]/g,
			name: {
				es: "mayúsculas",
				en: "uppercase",
			}
		},
		"aA": {
			regex: /[a-z]/gi,
			name: {
				es: "letras",
				en: "letters",
			}
		},
		"1": {
			regex: /[0-9]/g,
			name: {
				es: "números",
				en: "numbers",
			}
		},
		"_": {
			regex: /\s/g,
			name: {
				es: "espacios",
				en: "spaces",
			}
		},
		"!": {
			regex: /[ºª\\!\|"@·#€\$%&¬\/\(\)=\?'¿¡\^`\[\+\]´,{}\-_<>~]/g,
			name: {
				es: "caracteres especiales",
				en: "special characters",
			}
		},
		"ñ": {
			regex: /[ñáéíóú]/g,
			name: {
				es: "tildes y ñ",
				en: "accents and ñ",
			}
		},
		"Ñ": {
			regex: /[ÑÁÉÍÓÚ]/g,
			name: {
				es: "tildes y Ñ",
				en: "accents and Ñ",
			}
		},
		"ñÑ": {
			regex: /[ñáéíóú]/gi,
			name: {
				es: "tildes, ñ y Ñ",
				en: "accents, ñ and Ñ",
			}
		},
		
		
		// "phoneEs": require("./validations/symbols/phone").phoneEs,
		// "mobileEs": require("./validations/symbols/phone").mobileEs,
		// "dni": require("./validations/symbols/dni").dni,
		// "ibanEs": require("./validations/symbols/iban").ibanEs,
		// "email": require("./validations/symbols/email").email,
		// "postalCodeEs": require("./validations/symbols/postalCode").postalCodeEs,
		
		
	},
	
	rules: {
		
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
		},
		// only: {
		// 	fnc: require("./validations/rules/only"),
		// 	messages: {
		// 		only: {
		// 			es: "Sólo puede tener: ",
		// 			en: "It can only have: ",
		// 		},
		// 		and: {
		// 			es: " y ",
		// 			en: " and ",
		// 		}
		// 	},
		// },
		
		min: {
			fnc: require("./validations/rules/min"),
			messages: {
				error: {
					es: "Debería tener _%1 caracteres como mínimo pero tiene _%2.",
					en: "It should have _%1 minimum characters but it has _%2.",
				}
			},
		},
		
		max: {
			fnc: require("./validations/rules/max"),
			messages: {
				error: {
					es: "Debería tener _%1 caracteres como máximo pero tiene _%2.",
					en: "It should have _%1 maximum characters but it has _%2.",
				}
			}
		},
		
		minMax: {
			fnc: require("./validations/rules/minMax"),
			messages: {
				error: {
					es: "Debería tener _%1 caracteres pero tiene _%2.",
					en: "It should have _%1 characters but it has _%2.",
				}				
			}
		},
		
		req: {
			fnc: require("./validations/rules/req"),
			messages: {
				error: {
					es: "No puede estar vacío",
					en: "It can't be empty",
				}
			}
		},
		
		disallow: {
			fnc: "",
			messages: {
				error: {
					es: "",
					en: "",
				}
			}
		},
		
	},
	
	
	
	
};



// let validame = {
// 	config: config,
	
// 	options: options,
// 	v: validation,
// 	utils: utils,
// };



module.exports = {
	validame: validation,
	validameConfig: config,
	validameUtils: utils,
};


