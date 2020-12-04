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
declare const validation: (stringParaValidar: string | undefined, rules: any) => string;

declare const utils: {
    multiReplace: any;
};

declare let config: {
    language: string;
    symbols: {
        a: {
            regex: RegExp;
            messages: {
                name: {
                    es: string;
                    en: string;
                };
            };
        };
        A: {
            regex: RegExp;
            messages: {
                name: {
                    es: string;
                    en: string;
                };
            };
        };
        aA: {
            regex: RegExp;
            messages: {
                name: {
                    es: string;
                    en: string;
                };
            };
        };
        "1": {
            regex: RegExp;
            messages: {
                name: {
                    es: string;
                    en: string;
                };
            };
        };
        "2": {
            regex: RegExp;
            messages: {
                name: {
                    es: string;
                    en: string;
                };
            };
        };
        _: {
            regex: RegExp;
            messages: {
                name: {
                    es: string;
                    en: string;
                };
            };
        };
        "!": {
            regex: RegExp;
            messages: {
                name: {
                    es: string;
                    en: string;
                };
            };
        };
        ñ: {
            regex: RegExp;
            messages: {
                name: {
                    es: string;
                    en: string;
                };
            };
        };
        Ñ: {
            regex: RegExp;
            messages: {
                name: {
                    es: string;
                    en: string;
                };
            };
        };
        ñÑ: {
            regex: RegExp;
            messages: {
                name: {
                    es: string;
                    en: string;
                };
            };
        };
        phoneEs: {
            regex: any;
            messages: {
                invalid: {
                    es: string;
                    en: string;
                };
                digits: {
                    es: string;
                    en: string;
                };
            };
        };
        mobileEs: {
            regex: any;
            messages: {
                invalid: {
                    es: string;
                    en: string;
                };
                digits: {
                    es: string;
                    en: string;
                };
            };
        };
        dni: {
            regex: any;
            messages: {
                invalid: {
                    es: string;
                    en: string;
                };
                finalLetter: {
                    es: string;
                    en: string;
                };
            };
        };
        email: {
            regex: any;
            messages: {
                invalid: {
                    es: string;
                    en: string;
                };
            };
        };
        ibanEs: {
            regex: any;
            messages: {
                invalid: {
                    es: string;
                    en: string;
                };
                structure: {
                    es: string;
                    en: string;
                };
            };
        };
        postalCodeEs: {
            regex: any;
            messages: {
                invalid: {
                    es: string;
                    en: string;
                };
                digits: {
                    es: string;
                    en: string;
                };
            };
        };
    };
    rules: {
        allow: {
            fnc: any;
            messages: {
                itsOnlyAllowed: {
                    es: string;
                    en: string;
                };
                and: {
                    es: string;
                    en: string;
                };
            };
        };
        min: {
            fnc: any;
            messages: {
                error: {
                    es: string;
                    en: string;
                };
            };
        };
        max: {
            fnc: any;
            messages: {
                error: {
                    es: string;
                    en: string;
                };
            };
        };
        minMax: {
            fnc: any;
            messages: {
                error: {
                    es: string;
                    en: string;
                };
            };
        };
        req: {
            fnc: any;
            messages: {
                error: {
                    es: string;
                    en: string;
                };
            };
        };
        passWith: {
            fnc: any;
        };
        failWith: {
            fnc: any;
            messages: {
                error: {
                    es: string;
                    en: string;
                };
            };
        };
        disallow: {
            fnc: string;
            messages: {
                error: {
                    es: string;
                    en: string;
                };
            };
        };
    };
};