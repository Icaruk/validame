const allow = require("./validations/rules/allow");
const allowOr = require("./validations/rules/allowOr");
const failWith = require("./validations/rules/failWith");
const max = require("./validations/rules/max");
const min = require("./validations/rules/min");
const minMax = require("./validations/rules/minMax");
const passWith = require("./validations/rules/passWith");
const password = require("./validations/rules/password");
const req = require("./validations/rules/req");
const { cif } = require("./validations/symbols/cif");
const { dni } = require("./validations/symbols/dni");
const { email } = require("./validations/symbols/email");
const { ibanEs } = require("./validations/symbols/iban");
const { phoneEs, mobileEs, costlessPrefixEs } = require("./validations/symbols/phone");
const { postalCodeEs } = require("./validations/symbols/postalCode");

const any = require("./methods/any");
const none = require("./methods/none");
const all = require("./methods/all");



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
 * @property {string} allow Symbols to allow separated with spaces, they are checked from left to right, if one fails it stops there. Example: "a 1 _". 
 * @property {string} allowOr Symbols to allow separated with spaces, they are checked from left to right, if one fails it stops there. Example: "a 1 _". 
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
 * - `costlessPrefixEs`: Prevents paid spanish prefixes.
 * - `dni`: Valid DNI (spain).
 * - `ibanEs`: Spanish IBAN.
 * - `email`: Email address.
 * - `postalCodeEs`: Spanish postal code.
 * 
 * @property {string} allowOr Symbols (only functions, not regex) to allow, they are checked from left to right, if all of them fails, returns the first error. Example: "dni cif".
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

const validame = (stringParaValidar = "", methods) => {
	
	
	try {
		
		let result = "";
		
		
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
		
		
		
		const methodResults = [];
		
		
		// Recorro las propiedades del param methods
		for (const [method, validations] of Object.entries(methods)) {
			
			let objMethod = config.methods.find(_x => _x.name.includes(method));
			
			const methodResult = objMethod.fnc(stringParaValidar, validations, config);
			
			console.log( "******** METHOD", method, methodResult );
			
			
			methodResults.push(methodResult);
			
			if (!methodResult.isCorrect) {
				break;
			};
			
		};
		
		
		console.log( "methodResults", `(${typeof methodResults}): `, methodResults);
		
		
		// console.log( "------------ LLEGO AL FINAL SIN NINGÚN ERROR -------------" );
		
		
		// Fuerzo pass
		// if (result === "__validame__force_pass") return "";
		
		
		return methodResults[0];
		
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
	
	language: "es", // es, en, fr
	
	
	validations: {
		
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
		".": {
			regex: /[.,]/g,
			messages: {
				name: {
					es: "caracteres especiales",
					en: "special characters",
				}	
			},
		},
		":": {
			regex: /[:;]/g,
			messages: {
				name: {
					es: "caracteres especiales",
					en: "special characters",
				}	
			},
		},
		"'": {
			regex: /['"`´]/g,
			messages: {
				name: {
					es: "caracteres especiales",
					en: "special characters",
				}	
			},
		},
		"º": {
			regex: /[ºª]/g,
			messages: {
				name: {
					es: "caracteres especiales",
					en: "special characters",
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
	
	
	
	methods: [
		{
			name: ["any", ","],
			fnc: any,
		},
		{
			name: ["none", "!"],
			fnc: none,
		},
		{
			name: ["all", "*"],
			fnc: all,
		},
		{
			name: ["only", "."],
			fnc: () => {},
		},
		{
			name: ["except", "x"],
			fnc: () => {},
		},
	],
	
	
	
	
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
	validame: validame,
	validameConfig: config,
	validameUtils: utils,
};


