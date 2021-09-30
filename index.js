
/**
 * Validates a string.
 * https://www.npmjs.com/package/validame
 * ___
 * 
 * @param {string} text - String to validate.
 * @param {Rules} rules - Object that contains a list with one or more rules.
 * 
 * ___
 * 
 * @returns {string} If the validation it's correct returns "", otherwise returns the error.
 * 
*/

const validation = (text = "", config) => {
	
	try {
		
		let configRules = config.rules;
		let error = "";
		
		
		
		// Convierto de número a string
		if (typeof text === "number") text = text.toString();
		
		
		// Si no es string, undefined ni null, tiro error
		let type = typeof text;
		if (text === null) type = "null";
		
		
		if (type !== "string") {
			return new TypeError(`text should be string. Received ${type}`);
		};
		
		
		
		// Recorro las propiedades del param rules
		for (const [_key, _value] of Object.entries(rules)) {
			
			console.log( _key );
			
		};
		
		
		return "";
		// return error;
		
	} catch (err) {
		
		let msg = "Error: " + err;
		
		console.log( msg );
		return msg;
		
	};
		
};



let config = {
	
	language: "es", // es, en, fr
	
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
			regex: /[ñáéíóú']/g,
			messages: {
				name: {
					es: "tildes y ñ",
					en: "accents and ñ",
				}
			}
		},
		"Ñ": {
			regex: /[ÑÁÉÍÓÚ']/g,
			messages: {	
				name: {
					es: "tildes y Ñ",
					en: "accents and Ñ",
				}
			},
		},
		"ñÑ": {
			regex: /[ñáéíóú']/gi,
			messages: {
				name: {
					es: "tildes, ñ y Ñ",
					en: "accents, ñ and Ñ",
				}
			},
		},
		"phoneEs": {
			regex: phoneEs,
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
			regex: mobileEs,
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
		"costlessPrefixEs": {
			regex: costlessPrefixEs,
			messages: {
				invalid: {
					es: "No se permite un prefijo de pago",
					en: "A paid prefix isn't allowed",
				},
			},
		},
		"dni": {
			regex: dni,
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
		"cif": {
			regex: cif,
			messages: {
				length: {
					es: "Longitud de CIF incorrecta",
					en: "Invalid CIF length",
				},
				structure: {
					es: "CIF inválido o no tiene la siguiente estructura: A1234567B",
					en: "Invalid CIF or it hasn't the following structure: A1234567B",
				}
			},
		},
		"email": {
			regex: email,
			messages: {
				invalid: {
					es: "No es un email válido",
					en: "It isn't a valid email",
				}
			},
		},
		"ibanEs": {
			regex: ibanEs,
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
			regex: postalCodeEs,
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
			fnc: allow,
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
		allowOr: {
			fnc: allowOr,
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
			fnc: min,
			messages: {
				error: {
					es: "Debería tener _%1 caracteres como mínimo pero tiene _%2.",
					en: "It should have _%1 minimum characters but it has _%2.",
				}
			},
		},
		
		max: {
			fnc: max,
			messages: {
				error: {
					es: "Debería tener _%1 caracteres como máximo pero tiene _%2.",
					en: "It should have _%1 maximum characters but it has _%2.",
				}
			}
		},
		
		minMax: {
			fnc: minMax,
			messages: {
				error: {
					es: "Debería tener _%1 caracteres pero tiene _%2.",
					en: "It should have _%1 characters but it has _%2.",
				}				
			}
		},
		
		req: {
			fnc: req,
			messages: {
				error: {
					es: "No puede estar vacío",
					en: "It can't be empty",
				}
			}
		},
		
		password: {
			fnc: password,
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
			fnc: passWith,
		},
		
		failWith: {
			fnc: failWith,
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


