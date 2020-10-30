
const {validame, validameConfig, validameUtils} = require("../index");


describe("passWith", () => {
	
	[
		["hola", ["hola", "adios"]],
		["adios", ["hola", "adios"]],
		["123", ["123", "456"]],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[0], {
					passWith: _x[1]
				})
			).toBe("");
		});
		
	});
	
});