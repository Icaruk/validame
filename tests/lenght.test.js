
const {validame, validameConfig, validameUtils} = require("../index");


describe("Longitud", () => {
	
	test("3-5", () => {
		expect(
			validame("hola", {
				min: 3,
				max: 5
			})
		).toBe("");
	});
	
	test("3-5 fail min", () => {
		expect(
			validame("ho", {
				min: 3,
				max: 5
			})
		).not.toBe("");
	});
	
	test("3-5 fail max", () => {
		expect(
			validame("holahola", {
				min: 3,
				max: 5
			})
		).not.toBe("");
	});
	
	
	
	test("4 minmax", () => {
		expect(
			validame("hola", {
				minMax: 4,
			})
		).toBe("");
	});
	
	test("4 minmax fail", () => {
		expect(
			validame("holaa", {
				minMax: 4,
			})
		).not.toBe("");
	});
	
});


