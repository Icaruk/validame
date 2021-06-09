//? Todos deben cumplirse
validame("", {
	all: [
		/[a-z]/,
		/[0-9]/,
	],
});

// ✅ asdf1234
// ❌ asdf
// ❌ 1234
// ❌ _
// ❌ !"·$%"



//? No puede contener nada fuera de la lista
validame("", {
	only: [
		/[a-z]/,
		/[0-9]/,
	],
});

// ✅ asdf
// ✅ 1234
// ✅ asdf1234
// ❌ asdf 1234
// ❌ asdf_1234




//? Con que se cumpla uno, basta
validame("", {
	any: [
		/[a-z]/,
		/[0-9]/,
	],
});

// ✅ asdf
// ✅ 1234
// ✅ asdf1234
// ✅ asdf 1234
// ✅ asdf_1234
// ✅ asdf_1234 !"·$%"
// ❌ ____
// ❌ !"·$%"



//? Si se cumple alguno de la lista, es incorrecto
validame("", {
	none: [
		/[a-z]/,
		/[0-9]/,
	],
});

// ❌ asdf
// ❌ 1234
// ❌ asdf1234
// ❌ asdf 1234
// ❌ asdf_1234
// ❌ asdf_1234 !"·$%"
// ✅ ____
// ✅ !"·$%"



//? No puede contener nada fuera de la lista
validame("", {
	except: [
		/^1234$/,
	],
	none: [
		/^pepe$/i,
		/^juan$/i,
	],
	only: [
		/[a-z]/,
	],
});

// ✅ 1234
// ❌ 78097665465
// ❌ Pepe
// ❌ Juan
// ✅ Pablo
// ✅ Fran
