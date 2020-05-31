
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
	
	ruleToFnc: {
		
		"min": require("./validations/min"),
		"max": require("./validations/max"),
		"minmax": require("./validations/minmax"),
		"req": require("./validations/req"),
		"wl": require("./validations/wl"),
		
	},
	
	symbolToFnc: {
		"a": /[a-z]/g,
		"A": /[A-Z]/g,
		"1": /[0-9]/g,
		"_": /\s/g,
		"!": /[ºª\\!\|"@·#€\$%&¬\/\(\)=\?'¿¡\^`\[\+\]´,{}\-_<>~]/g,
		"ñ": /[ñáéíóú]/g,
		"Ñ": /[ÑÁÉÍÓÚ]/g,
		
		"phoneEs": require("./validations/phone").phoneEs,
		"mobileEs": require("./validations/phone").mobileEs,
		"dni": require("./validations/dni").dni,
		"ibanEs": require("./validations/iban").ibanEs,
		"email": require("./validations/email").email,
		"postalCodeEs": require("./validations/postalCode").postalCodeEs,
		
	},
	
};



/**
 * Validates a string.
 * ___
 * 
 * @param {string} string - String to validate.
 * @param {object} rules - Object that contains a list with one or more rules.
 * 
 * ___
 * 
 * @returns {string} If the validation it's correct returns "", otherwise returns the error.
 * 
*/

const validation = (string = "", rules = {}) => {
	
	// if (string === "") return "";
	
	let error = "";
	
	
	// Recorro las reglas
	for (const [key, value] of Object.entries(rules)) {
		
		// Obtengo la función asociada a la regla (min, max, minmax, req, wl...)
		let fnc = options.ruleToFnc[key];
		
		
		
		if (fnc) {
			
			// Obtengo el string de mensaje de error
			let errorMessagesArr = options.messages[options.language][key];
			
			
			if (key === "wl") {
				
				// Aquí llamo a la función wl con los parámetros que necesita
				error = fnc(options.symbolToFnc, options.messages[options.language], string, value);
				
			} else {
				
				// Aquí llamo a la función req, min, max...
				error = fnc(errorMessagesArr, string, value);
				
			};
			
			
			if (error !== "") return error;
			
		};
		
	};
	
	
	// console.log( "------------ LLEGO AL FINAL SIN NINGÚN ERROR -------------" );
	
	
	return error;
	
};



const utils = {
	multiReplace: require("./utils/multiReplace"),
};



class Validame {
	
	instance = null;
	
	
	constructor () {
		
		this.o = options;
		this.v = validation;
		this.u = utils;
		
		
		if (this.instance) {
			return this.instance;
		};
		
		
		this.instance = this;
		return this;
		
	};
	
};



module.exports = new Validame();


