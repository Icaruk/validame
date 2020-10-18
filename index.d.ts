/*
const validame: function;
const validameConfig: object;
const validameUtils: object;

export {
	validame,
	validameConfig,
	validameUtils
}

*/



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
     * Symbols to allow. Example: "a 1 _"
     */
    allow: any;
};
/**
 * Símbolos
 */
export type Symbols = string;
/**
 * a Lowercase
 */

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
 * @typedef Symbols Símbolos
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
export function validation(stringParaValidar: string, rules: Rules): string;
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
    namespace rules {
        namespace allow {
            const fnc: any;
            namespace messages {
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
        namespace min {
            const fnc_1: any;
            export { fnc_1 as fnc };
            export namespace messages_1 {
                namespace error {
                    const es_2: string;
                    export { es_2 as es };
                    const en_2: string;
                    export { en_2 as en };
                }
            }
            export { messages_1 as messages };
        }
        namespace max {
            const fnc_2: any;
            export { fnc_2 as fnc };
            export namespace messages_2 {
                export namespace error_1 {
                    const es_3: string;
                    export { es_3 as es };
                    const en_3: string;
                    export { en_3 as en };
                }
                export { error_1 as error };
            }
            export { messages_2 as messages };
        }
        namespace minMax {
            const fnc_3: any;
            export { fnc_3 as fnc };
            export namespace messages_3 {
                export namespace error_2 {
                    const es_4: string;
                    export { es_4 as es };
                    const en_4: string;
                    export { en_4 as en };
                }
                export { error_2 as error };
            }
            export { messages_3 as messages };
        }
        namespace req {
            const fnc_4: any;
            export { fnc_4 as fnc };
            export namespace messages_4 {
                export namespace error_3 {
                    const es_5: string;
                    export { es_5 as es };
                    const en_5: string;
                    export { en_5 as en };
                }
                export { error_3 as error };
            }
            export { messages_4 as messages };
        }
        namespace disallow {
            const fnc_5: string;
            export { fnc_5 as fnc };
            export namespace messages_5 {
                export namespace error_4 {
                    const es_6: string;
                    export { es_6 as es };
                    const en_6: string;
                    export { en_6 as en };
                }
                export { error_4 as error };
            }
            export { messages_5 as messages };
        }
    }
}
declare namespace utils {
    const multiReplace: any;
}
export { validation as validame, config as validameConfig, utils as validameUtils };
 
