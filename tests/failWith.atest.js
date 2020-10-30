
const {validame, validameConfig, validameUtils} = require("../index");


describe("failWith", () => {
	
	[
		["ola", ["hola", "adios"]],
		["adiós", ["hola", "adios"]],
		["111", ["123", "456"]],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[0], {
					failWith: _x[1]
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["hola", ["hola", "adios"]],
		["adios", ["hola", "adios"]],
		["456", ["123", "456"]],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[0], {
					failWith: _x[1]
				})
			).not.toBe("");
		});
		
	});
	
	
});