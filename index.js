
const options = {
	
	language: "en", // es, en, fr
	
	messages: {
		
		es: {
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
		
};



/**
 * @typedef Rules
 * @property {0 | 1 | 2} req Required:
 * - 0: disabled
 * - 1: allows null but fails with ""
 * - 2: fails with null and ""
 * 
 * @property {number} min Number of minimum characters.
 * @property {number} max Number of maximum characters.
 * @property {number} minMax Number of exact characters.
 * @property {Symbols} allow Symbols to allow. Example: "a 1 _"
*/



/**
 * @typedef Symbols
 * @enum {string} a Lowercase
 * @enum {string} A Uppercase
*/



/**
 * Validates a string.
 * https://www.npmjs.com/package/validame
 * ___
 * 
 * @param {string} stringParaValidar - String to validate.
 * @param {Rules} rules - Object that contains a list with one or more rules.
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
		
		if (configRules[key] !== undefined) {
			
			const fnc = configRules[key].fnc;
			
			
			if (fnc) {
				error = fnc(stringParaValidar, value, config);
			};
			
			if (error) break;
		
		} else {
			console.log(`Validame error: rule ${key} not found`);
		};
		
	};
	
	
	// console.log( "------------ LLEGO AL FINAL SIN NINGÚN ERROR -------------" );
	
	
	return error;
	
};



const utils = {
	multiReplace: require("./utils/multiReplace"),
};



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
		"phoneEs": {
			regex: require("./validations/symbols/phone").phoneEs,
			invalid: {
				es: "No es un teléfono español válido",
				en: "It isn't a valid spanish phone",
			},
			digits: {
				es: "Debe tener 9 dígitos",
				en: "It must have 9 digits",
			}
		},
		"mobileEs": {
			regex: require("./validations/symbols/phone").mobileEs,
			invalid: {
				es: "No es un móvil español válido",
				en: "It isn't a valid spanish mobile",
			},
			digits: {
				es: "Debe tener 9 dígitos",
				en: "It must have 9 digits",
			}
		},
		"dni": {
			regex: require("./validations/symbols/dni").dni,
			invalid: {
				es: "No es un DNI válido",
				en: "It isn't a valid DNI",
			},
			finalLetter: {
				es: "La letra final es inválida",
				en: "The last letter is invalid",
			}
		},
		"email": {
			regex: require("./validations/symbols/email").email,
			invalid: {
				es: "No es un email válido",
				en: "It isn't a valid email",
			}
		},
		"ibanEs": {
			regex: require("./validations/symbols/iban").ibanEs,
			invalid: {
				es: "No es un IBAN válido",
				en: "It isn't a valid IBAN",
			},
			structure: {
				es: "Debe seguir la siguiente estructura (sin espacios): ES 12 1234 1234 12 1234567890",
				en: "It must follow the following structure (without spaces): ES 12 1234 1234 12 1234567890",
			}
		},
		"postalCodeEs": {
			regex: require("./validations/symbols/postalCode").postalCodeEs,
			invalid: {
				es: "No es válido",
				en: "It isn't valid",
			},
			digits: {
				es: "Debe tener 5 dígitos",
				en: "It must have 5 digits",
			}
		},
		
		
		
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


