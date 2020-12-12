

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
 * @property {string} allow Symbols to allow separated with spaces. Example: "a 1 _"
 * 
 * - `a`: a-z
 * - `A`: A-Z
 * - `aA`: a-zA-Z
 * - `1`: 0-9
 * - `2`: 0-9.,
 * - `_`: spaces
 * - `!`: (special characters)
 * - `ñ`: áéíóúñ
 * - `Ñ`: ÑÁÉÍÓÚ
 * - `ñÑ`: áéíóúñÑÁÉÍÓÚ
 * - `phoneEs`: Spanish telephone number.
 * - `mobileEs`: Spanish mobile number.
 * - `dni`: Valid DNI (spain).
 * - `ibanEs`: Spanish IBAN.
 * - `email`: Email address.
 * - `postalCodeEs`: Spanish postal code.
 * 
 * @property {string[]} passWith Pass the validation and skips the next steps if the string matches any word
 * @property {string[]} failWith Fails the validation if the string matches any word
 * @property {[uppercase: number, lowercase: number, numbers: number]} password Minimum characters needed
 * 
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
	
	try {
	
		let configRules = config.rules;
		let error = "";
		
		
		
		// Convierto de número a string
		if (typeof stringParaValidar === "number") {
			stringParaValidar = stringParaValidar.toString();
		};
		
		
		
		// Si no es string, undefined ni null, tiro error
		let type = typeof stringParaValidar;
		
		if (
			type !== "string" &&
			type !== "undefined" &&
			stringParaValidar !== null
		) {
			return "Error: must validate a string";
		};
		
		
		
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
		
		
		// Fuerzo pass
		if (error === "__validame__force_pass") return "";
		
		
		return error;
		
	} catch (err) {
		
		let msg = "Error: " + err;
		
		console.log( msg );
		return msg;
		
	};
		
};



const utils = {
	multiReplace: require("./utils/multiReplace"),
};



let config = {
	
	language: "en", // es, en, fr
	
	symbols: {
		
		"a": {
			regex: /[a-z]/g,
			messages: {
				name: {
					es: "minúsculas",
					en: "lowercase",
				}
			},
		},
		"A": {
			regex: /[A-Z]/g,
			messages: {
				name: {
					es: "mayúsculas",
					en: "uppercase",
				}	
			},			
		},
		"aA": {
			regex: /[a-z]/gi,
			messages: {
				name: {
					es: "letras",
					en: "letters",
				}	
			},
		},
		"1": {
			regex: /[0-9]/g,
			messages: {
				name: {
					es: "números enteros",
					en: "integer numbers",
				}
			},
		},
		"2": {
			regex: /[0-9]*([\.,]){0,1}[0-9]*/g,
			messages: {
				name: {
					es: "números",
					en: "numbers",
				}
			},
		},
		"_": {
			regex: /\s/g,
			messages: {
				name: {
					es: "espacios",
					en: "spaces",
				}	
			},
		},
		"!": {
			regex: /[ºª\\!\|"@·#€\$%&¬\/\(\)=\?'¿¡\^`\[\+\]´,{}\-_<>~]/g,
			messages: {
				name: {
					es: "caracteres especiales",
					en: "special characters",
				}	
			},
		},
		"ñ": {
			regex: /[ñáéíóú]/g,
			messages: {
				name: {
					es: "tildes y ñ",
					en: "accents and ñ",
				}
			}
		},
		"Ñ": {
			regex: /[ÑÁÉÍÓÚ]/g,
			messages: {	
				name: {
					es: "tildes y Ñ",
					en: "accents and Ñ",
				}
			},
		},
		"ñÑ": {
			regex: /[ñáéíóú]/gi,
			messages: {
				name: {
					es: "tildes, ñ y Ñ",
					en: "accents, ñ and Ñ",
				}
			},
		},
		"phoneEs": {
			regex: require("./validations/symbols/phone").phoneEs,
			messages: {
				invalid: {
					es: "No es un teléfono español válido",
					en: "It isn't a valid spanish phone",
				},
				digits: {
					es: "Debe tener 9 dígitos",
					en: "It must have 9 digits",
				}
			},
		},
		"mobileEs": {
			regex: require("./validations/symbols/phone").mobileEs,
			messages: {
				invalid: {
					es: "No es un móvil español válido",
					en: "It isn't a valid spanish mobile",
				},
				digits: {
					es: "Debe tener 9 dígitos",
					en: "It must have 9 digits",
				}
			},
		},
		"dni": {
			regex: require("./validations/symbols/dni").dni,
			messages: {
				invalid: {
					es: "No es un DNI válido",
					en: "It isn't a valid DNI",
				},
				finalLetter: {
					es: "La letra final es inválida",
					en: "The last letter is invalid",
				}
			},
		},
		"email": {
			regex: require("./validations/symbols/email").email,
			messages: {
				invalid: {
					es: "No es un email válido",
					en: "It isn't a valid email",
				}
			},
		},
		"ibanEs": {
			regex: require("./validations/symbols/iban").ibanEs,
			messages: {
				invalid: {
					es: "No es un IBAN válido",
					en: "It isn't a valid IBAN",
				},
				structure: {
					es: "Debe seguir la siguiente estructura (sin espacios): ES 12 1234 1234 12 1234567890",
					en: "It must follow the following structure (without spaces): ES 12 1234 1234 12 1234567890",
				}
			},
		},
		"postalCodeEs": {
			regex: require("./validations/symbols/postalCode").postalCodeEs,
			messages: {
				invalid: {
					es: "No es válido",
					en: "It isn't valid",
				},
				digits: {
					es: "Debe tener 5 dígitos",
					en: "It must have 5 digits",
				}
			},
		},
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
		
		password: {
			fnc: require("./validations/rules/password"),
			messages: {
				lower: {
					es: "Tiene que tener al menos _%1 minúscula(s).",
					en: "It must have at least _%1 lowercase character(s).",
				},
				upper: {
					es: "Tiene que tener al menos _%1 mayúscula(s).",
					en: "It must have at least _%1 uppercase character(s).",
				},
				number: {
					es: "Tiene que tener al menos _%1 número(s).",
					en: "It must have at least _%1 number(s).",
				},
			},			
		},
		
		passWith: {
			fnc: require("./validations/rules/passWith"),
		},
		
		failWith: {
			fnc: require("./validations/rules/failWith"),
			messages: {
				error: {
					es: "Contiene palabras no permitidas",
					en: "It contains not allowed words",
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



module.exports = {
	validame: validation,
	validameConfig: config,
	validameUtils: utils,
};


