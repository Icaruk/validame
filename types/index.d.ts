export type Rules = {
    /**
     * Required:
     * - 0: disabled
     * - 1: allows null but fails with ""
     * - 2: fails with null and ""
     */
    req: 0 | 1 | 2;
    /**
     * Number of minimum characters.
     */
    min: number;
    /**
     * Number of maximum characters.
     */
    max: number;
    /**
     * Number of exact characters.
     */
    minMax: number;
    /**
     * Symbols to allow separated with spaces, they are checked from left to right, if one fails it stops there. Example: "a 1 _".
     */
    allow: string;
    /**
     * Symbols to allow separated with spaces, they are checked from left to right, if one fails it stops there. Example: "a 1 _".
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
     */
    allowOr: string;
    /**
     * Pass the validation and skips the next steps if the string matches any word
     */
    passWith: string[];
    /**
     * Fails the validation if the string matches any word
     */
    failWith: string[];
    /**
     * Minimum characters needed
     */
    password: [uppercase: number, lowercase: number, numbers: number];
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
declare function validation(stringParaValidar: string, rules: Rules): string;
declare namespace config {
    const language: string;
    const symbols: {
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
            regex: (stringParaValidar: any, config: any) => any;
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
            regex: (stringParaValidar: any, config: any) => any;
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
        costlessPrefixEs: {
            regex: (stringParaValidar: any, config: any) => any;
            messages: {
                invalid: {
                    es: string;
                    en: string;
                };
            };
        };
        dni: {
            regex: (stringParaValidar: any, config: any) => any;
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
        cif: {
            regex: (stringParaValidar: any, config: any) => any;
            messages: {
                length: {
                    es: string;
                    en: string;
                };
                structure: {
                    es: string;
                    en: string;
                };
            };
        };
        email: {
            regex: (stringParaValidar: any, config: any) => any;
            messages: {
                invalid: {
                    es: string;
                    en: string;
                };
            };
        };
        ibanEs: {
            regex: (stringParaValidar: any, config: any) => any;
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
            regex: (stringParaValidar: any, config: any) => any;
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
    namespace rules {
        namespace allow {
            export { allow as fnc };
            export namespace messages {
                namespace itsOnlyAllowed {
                    const es: string;
                    const en: string;
                }
                namespace and {
                    const es_1: string;
                    export { es_1 as es };
                    const en_1: string;
                    export { en_1 as en };
                }
            }
        }
        namespace allowOr {
            export { allowOr as fnc };
            export namespace messages_1 {
                export namespace itsOnlyAllowed_1 {
                    const es_2: string;
                    export { es_2 as es };
                    const en_2: string;
                    export { en_2 as en };
                }
                export { itsOnlyAllowed_1 as itsOnlyAllowed };
                export namespace and_1 {
                    const es_3: string;
                    export { es_3 as es };
                    const en_3: string;
                    export { en_3 as en };
                }
                export { and_1 as and };
            }
            export { messages_1 as messages };
        }
        namespace min {
            export { min as fnc };
            export namespace messages_2 {
                namespace error {
                    const es_4: string;
                    export { es_4 as es };
                    const en_4: string;
                    export { en_4 as en };
                }
            }
            export { messages_2 as messages };
        }
        namespace max {
            export { max as fnc };
            export namespace messages_3 {
                export namespace error_1 {
                    const es_5: string;
                    export { es_5 as es };
                    const en_5: string;
                    export { en_5 as en };
                }
                export { error_1 as error };
            }
            export { messages_3 as messages };
        }
        namespace minMax {
            export { minMax as fnc };
            export namespace messages_4 {
                export namespace error_2 {
                    const es_6: string;
                    export { es_6 as es };
                    const en_6: string;
                    export { en_6 as en };
                }
                export { error_2 as error };
            }
            export { messages_4 as messages };
        }
        namespace req {
            export { req as fnc };
            export namespace messages_5 {
                export namespace error_3 {
                    const es_7: string;
                    export { es_7 as es };
                    const en_7: string;
                    export { en_7 as en };
                }
                export { error_3 as error };
            }
            export { messages_5 as messages };
        }
        namespace password {
            export { password as fnc };
            export namespace messages_6 {
                namespace lower {
                    const es_8: string;
                    export { es_8 as es };
                    const en_8: string;
                    export { en_8 as en };
                }
                namespace upper {
                    const es_9: string;
                    export { es_9 as es };
                    const en_9: string;
                    export { en_9 as en };
                }
                namespace number {
                    const es_10: string;
                    export { es_10 as es };
                    const en_10: string;
                    export { en_10 as en };
                }
            }
            export { messages_6 as messages };
        }
        namespace passWith {
            export { passWith as fnc };
        }
        namespace failWith {
            export { failWith as fnc };
            export namespace messages_7 {
                export namespace error_4 {
                    const es_11: string;
                    export { es_11 as es };
                    const en_11: string;
                    export { en_11 as en };
                }
                export { error_4 as error };
            }
            export { messages_7 as messages };
        }
        namespace disallow {
            export const fnc: string;
            export namespace messages_8 {
                export namespace error_5 {
                    const es_12: string;
                    export { es_12 as es };
                    const en_12: string;
                    export { en_12 as en };
                }
                export { error_5 as error };
            }
            export { messages_8 as messages };
        }
    }
}
declare namespace utils {
    const multiReplace: (text?: string, objReplace?: {}) => string;
}
import allow_1 = require("./validations/rules/allow");
import allowOr_1 = require("./validations/rules/allowOr");
import min_1 = require("./validations/rules/min");
import max_1 = require("./validations/rules/max");
import minMax_1 = require("./validations/rules/minMax");
import req_1 = require("./validations/rules/req");
import password_1 = require("./validations/rules/password");
import passWith_1 = require("./validations/rules/passWith");
import failWith_1 = require("./validations/rules/failWith");
export { validation as validame, config as validameConfig, utils as validameUtils };
