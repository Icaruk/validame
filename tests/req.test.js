
const {validame, validameConfig, validameUtils} = require("../index");


describe("req", () => {
	
	test("req 0 text", () => {
		expect(
			validame("asdf", {
				req: 0
			})
		).toBe("");
	});
	
	test("req 0 empty", () => {
		expect(
			validame("", {
				req: 0
			})
		).toBe("");
	});
	
	test("req 0 null", () => {
		expect(
			validame(null, {
				req: 0
			})
		).toBe("");
	});
	
	
	
	test("req 1 text", () => {
		expect(
			validame("asdf", {
				req: 1
			})
		).toBe("");
	});
	
	test("req 1 empty", () => {
		expect(
			validame("", {
				req: 1
			})
		).not.toBe("");
	});
	
	test("req 1 null", () => {
		expect(
			validame(null, {
				req: 1
			})
		).toBe("");
	});	
	
	
	
	test("req 2 text", () => {
		expect(
			validame("asdf", {
				req: 2
			})
		).toBe("");
	});
	
	test("req 2 empty", () => {
		expect(
			validame("", {
				req: 2
			})
		).not.toBe("");
	});
	
	test("req 2 null", () => {
		expect(
			validame(null, {
				req: 2
			})
		).not.toBe("");
	});
	
});


