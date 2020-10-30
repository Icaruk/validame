
const {validame, validameConfig, validameUtils} = require("../index");


describe("ibanEs", () => {
	
	[
		["ibanEs 1", "ES7014658838733856425342"],
		["ibanEs 2", "ES1101826364206956852351"],
		["ibanEs 3", "ES0700756964962628587557"],
		["ibanEs 4", "ES7130048969519647561218"],
		["ibanEs 5", "ES1300755311533415782683"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "ibanEs"
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["ibanEs fail 1", "SN75K68745289517893335455126"],
		["ibanEs fail 2", "SI37699572876979593"],
		["ibanEs fail 3", "CH4989144751144272934"],
		["ibanEs fail 4", "GB54BARC20035323374378"],
		["ibanEs fail 5", "ES1120755311343415782685"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "ibanEs"
				})
			).not.toBe("");
		});
		
	});
	
	
});