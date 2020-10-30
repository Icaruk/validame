
const {validame, validameConfig, validameUtils} = require("../index");


describe("dni", () => {
	
	[
		["dni 1", "12345678Z"],
		["dni 2", "98991911A"],
		["dni 3", "17435271Y"],
		["dni extranjero 1", "X3621968C"],
		["dni extranjero 2", "Y7717973S"],
		["dni extranjero 3", "Z7163072A"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "dni"
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["dni 1", "1234"],
		["dni 2", "98991911B"],
		["dni 3", "17435271YY"],
		["dni extranjero 1", "A3621968C"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "dni"
				})
			).not.toBe("");
		});
		
	});
	
	
	
});