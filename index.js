
const options = {
	
	language: "es", // es, en, fr
	
	messages: {
		
		es: {
			min: [
				"Debería tener _%1 caracteres como mínimo pero tiene _%2."
			],
			max: [
				"Debería tener _%1 caracteres como máximo pero tiene _%2."
			],
			req: [
				"No puede estar vacío."
			],
			wl: {
				"base": "Sólo se permiten: ",
				"and": "y",
				"a": "minúsculas",
				"A": "mayúsculas",
				"1": "números",
				"_": "espacios",
				"!": "caracteres especiales",
				"ñ": "acentos y ñ",
			}
		},
		
		en: {
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
		
	},
	
	codeToRegex: {
		"a": /[a-z]/g,
		"A": /[A-Z]/g,
		"1": /[0-9]/g,
		"_": /\s/g,
		"!": /[.#·:$%&()?¿!¡@|+_\\-ºª]/g,
		"ñ": /[ñáéíóú]/g,
	},
	
};



const stringToFnc = {
	
	"min": require("./validations/min"),
	"max": require("./validations/max"),
	"req": require("./validations/req"),
	"wl": require("./validations/wl"),
	
};



/**
 * Validates a string.
 * ___
 * 
 * @param {string} string - String to validate.
 * @param {object} objValidationTypes - Object that contain the list of validations to make.
 * 
 * ___
 * 
 * @returns {string} If the validation it's correct returns "", otherwise returns the error.
 * 
*/

const validation = (string = "", objValidationTypes = {}) => {
		
	// if (string === "") return "";
	
	let error = "";
	
	
	// Recorro el objeto de validación
	for (const [key, value] of Object.entries(objValidationTypes)) {
		
		let fnc = stringToFnc[key];
		
		if (fnc) {
			
			let errorMessagesArr = options.messages[options.language][key]; // ["a", "b"...]
			
			
			if (key === "wl") {
				error = fnc(options.codeToRegex, errorMessagesArr, string, value);
			} else {
				error = fnc(errorMessagesArr, string, value);
			};
			
			if (error !== "") return error;
			
		};
		
	};
	
	
	console.log( "------------ LLEGO AL FINAL SIN NINGÚN ERROR -------------" );
	
	
	return error;

};



class Validame {
	
	instance = null;
	
	
	constructor () {
		
		this.o = options;
		this.v = validation;
		
		
		// console.log( typeof this.instance );
		
		if (this.instance) {
			return this.instance;
		};
		
		
		this.instance = this;
		return this;
		
	};
	
};



module.exports = new Validame();



return;










const asd = (tipoValidacion = "", textoParaValidar = "", required = false, minLength = 0, maxLength = 0, flags = "") => {
	
	// Tipos de validación:
	// #123, #123_, #abc, #abc_, #abc123, #abc123_, telefono, email, cp, iban, dni


	if (tipoValidacion === "") return "ERR: tipoValidacion undef.";


	textoParaValidar = textoParaValidar.trim();
	if (required && textoParaValidar === "") return "No puede estar vacío.";
	if (!required && textoParaValidar === "") return ""; // Como no es requerido y está vacío, no hago más comprobaciones


	let mensajeError = ""; // si todo va bien, se quedará así



	// Si el tipo de validacion es #algo, compruebo longitud
	if (tipoValidacion.slice(0, 1) === "#") {
		let errorLongitud = compruebaLongitud(textoParaValidar, required, minLength, maxLength);
		if (errorLongitud) return errorLongitud;
	};



	switch (tipoValidacion) {

		case "#123": {
			let regex = new RegExp(/^[0-9]*$/, flags);
			let correcto = regex.test(textoParaValidar);
			if (! correcto) return "Sólo debe contener números.";

			break;
		};
		case "#123_": {
			let regex = new RegExp(/^[0-9\s ]*$/, flags);
			let correcto = regex.test(textoParaValidar);
			if (! correcto) return "Sólo debe contener números y espacios.";

			break;
		};

		case "#abc": {
			let regex = new RegExp(`^[a-z${spanishCharacters}]*$`, flags);
			let correcto = regex.test(textoParaValidar);
			if (! correcto) return "Sólo debe contener letras.";

			break;
		};
		case "#abc_": {
			let regex = new RegExp(`^[a-z${spanishCharacters}\s ]*$`, flags);
			let correcto = regex.test(textoParaValidar);
			if (! correcto) return "Sólo debe contener letras y espacios.";

			break;
		};

		case "#abc123": {
			let regex = new RegExp(`^[a-z${spanishCharacters}0-9]*$`, flags);
			let correcto = regex.test(textoParaValidar);
			if (! correcto) return "Sólo debe contener letras y números.";

			break;
		};
		case "#abc123_": {
			let regex = new RegExp(`^[a-z${spanishCharacters}0-9\s ]*$`, flags);
			let correcto = regex.test(textoParaValidar);
			if (! correcto) return "Sólo debe contener letras, números y espacios.";

			break;
		};



		case "telefono": {

			// Fuerzo parámetros
			minLength = 9;
			maxLength = 9;



			// *******************
			// Compruebo longitud
			// *******************

			let errorLongitud = compruebaLongitud(textoParaValidar, required, minLength, maxLength);
			if (errorLongitud) return errorLongitud;



			// *******************
			// Compruebo estructura
			// *******************

			let regex = new RegExp(/^[0-9]*$/, "");
			let correcto1 = regex.test(textoParaValidar);
			if (! correcto1) return "Sólo debe contener números.";

			let correcto2 = ["6", "7", "8", "9"].includes(textoParaValidar.slice(0, 1));
			if (! correcto2) return "Debe ser un número español.";

			let contieneNumerosMalos = ["901", "902", "905", "803", "806", "807"].includes(textoParaValidar.slice(0, 3));
			if (contieneNumerosMalos) return "El teléfono no es válido.";


			break
		};



		case "email": {

			// Fuerzo parámetros
			minLength = 1;



			// *******************
			// Compruebo longitud
			// *******************

			let errorLongitud = compruebaLongitud(textoParaValidar, required, minLength, maxLength);
			if (errorLongitud) return errorLongitud;



			// *******************
			// Compruebo estructura
			// *******************

			let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "");
			let correcto = regex.test(textoParaValidar);
			if (! correcto) return "Debe seguir la siguiente estructura: direccion@email.es";


			break
		};



		case "cp": {

			// Fuerzo parámetros
			minLength = 1;



			// *******************
			// Compruebo longitud
			// *******************

			let errorLongitud = compruebaLongitud(textoParaValidar, required, minLength, maxLength);
			if (errorLongitud) return errorLongitud;



			// *******************
			// Compruebo estructura
			// *******************

			let regex = new RegExp(/\d/, "");
			let correcto1 = regex.test(textoParaValidar);
			if (! correcto1) return "Sólo puede contener números.";

			regex = new RegExp(/^(?:0?[1-9]|[1-4]\d|5[0-2])\d{3}$/, "");
			let correcto2 = regex.test(textoParaValidar);
			if (! correcto2) return "El CP no es válido.";


			break
		};



		case "iban": {

			// Fuerzo parámetros
			minLength = 24;
			maxLength = 24;



			// *******************
			// Compruebo longitud
			// *******************

			let errorLongitud = compruebaLongitud(textoParaValidar, required, minLength, maxLength);
			if (errorLongitud) return errorLongitud;



			// *******************
			// Compruebo estructura
			// *******************

			let regex = new RegExp(/([ES]{2})\s*\t*([0-9]{2})\s*\t*([0-9]{4})\s*\t*([0-9]{4})\s*\t*([0-9]{2})\s*\t*([0-9]{10})/, "");
			let correcto = regex.test(textoParaValidar);

			if (! correcto) {
				return "Debe seguir la siguiente estructura (sin espacios): ES 12 1234 1234 12 1234567890";
			};



			// *******************
			// Comprobación con algoritmo
			// *******************

			let iban = textoParaValidar.toUpperCase().trim(); // Todo a MAYÚSCULAS y quito espacios al inicio y al final
			iban = iban.replace(/\s/g, ""); // Quito los espacios en blanco dentro del string

			let letra1, letra2, num1, num2;
			let isBanaux;


			const modulo97 = (iban) => {
				let parts = Math.ceil(iban.length / 7);
				let remainer = "";
				for (let i = 1; i <= parts; i++) {
					remainer = String(parseFloat(remainer + iban.substr((i - 1) * 7, 7)) % 97);
				}
				return remainer;
			};
			const getnumIBAN = (letra) => {
				let ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
				return ls_letras.search(letra) + 10
			};


			// Se coge las primeras dos letras y se pasan a números
			letra1 = iban.substring(0, 1);
			letra2 = iban.substring(1, 2);
			num1 = getnumIBAN(letra1);
			num2 = getnumIBAN(letra2);

			//Se sustituye las letras por números.
			isBanaux = String(num1) + String(num2) + iban.substring(2);

			// Se mueve los 6 primeros caracteres al final de la cadena.
			isBanaux = isBanaux.substring(6) + isBanaux.substring(0, 6);

			//Se calcula el resto, llamando a la función modulo97
			let resto = modulo97(isBanaux);


			if (resto != 1) { // comparo STRING con NUMBER
				return "El IBAN no es válido.";
			};

			break
		};



		case "dni": {

			// Fuerzo parámetros
			minLength = 6;
			maxLength = 9;



			// *******************
			// Compruebo longitud
			// *******************

			let errorLongitud = compruebaLongitud(textoParaValidar, required, minLength, maxLength);
			if (errorLongitud) return errorLongitud;



			// *******************
			// Compruebo estructura
			// *******************

			let regex = new RegExp(/^[XYZ]?[0-9]{5,8}[A-Z]$/, "");
			let correcto = regex.test(textoParaValidar);

			if (! correcto) {
				return "Debe seguir una de las siguiente estructuras: 12345678Z o X1234567L";
			};



			// *******************
			// Compruebo letra
			// *******************

			let dni = textoParaValidar; // copio el string

			if (isNaN( parseInt(textoParaValidar[0]) )) {// el primer dígito es una letra

				// Sustituyo las letras XYZ por 012, respectivamente
				dni = dni.replace("X", 0);
				dni = dni.replace("Y", 1);
				dni = dni.replace("Z", 2);

			};

			let length = textoParaValidar.length;
			let cifra = dni.slice(0, length - 1); 			// (12345678) Z
			let letra = dni.substr(length - 1, length); 	// 12345678 (Z)


			// Calculo el resto y su letra asignada
			let resto = parseInt(cifra) % 23;

			const arrLetras = "TRWAGMYFPDXBNJZSQVHLCKE"; // en orden del 0 al 22: 0 = T, 1 = R, 2 = W...
			let letraCorrecta = arrLetras[resto];


			if (letra !== letraCorrecta) {
				// return `La letra final del DNI es incorrecta, debería ser ${letraCorrecta}.`;
				return `La letra final es incorrecta.`;
			};


			break;
		};



		case "contraseña": {

			// Fuerzo parámetros
			minLength = 8;
			flags = "";



			// *******************
			// Compruebo longitud
			// *******************

			let errorLongitud = compruebaLongitud(textoParaValidar, true, minLength, maxLength);
			if (errorLongitud) return errorLongitud;



			// *******************
			// Compruebo estructura
			// *******************

			let regex, correcto;

			regex = new RegExp(/(?=.*[a-z])/, "");
			correcto = regex.test(textoParaValidar);
			if (! correcto) {return "Debe tener al menos una letra minúscula"};

			regex = new RegExp(/(?=.*[A-Z])/, "");
			correcto = regex.test(textoParaValidar);
			if (! correcto) {return "Debe tener al menos una letra mayúscula"};

			regex = new RegExp(/(?=.*[0-9])/, "");
			correcto = regex.test(textoParaValidar);
			if (! correcto) {return "Debe tener al menos un número"};


			break;
		};



		default: break;

	};



	return mensajeError;

};


