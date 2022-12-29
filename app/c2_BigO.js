console.log("It's Working");

const nemo = ['nemo'];

/**
function findNemo(array) {
	let t0 = performance.now();
	for (let i = 0; i < nemo.length; i++) {
		if (array[i] === 'nemo') {
			console.log('Found NEMO');
		}
	}
	let t1 = performance.now();
	console.log(' Call to find Nemo took' + (t1 - t0) + 'millioseconds');
}

 */



// findNemo(nemo)


// O(1)
let boxes = [1, 2, 3, 4, 5, 6, 7, 8];

function logFirstTWoBoxes(boxes) {
	console.log(boxes[0]);
	console.log(boxes[1]);
}

logFirstTWoBoxes(boxes);

// Exericse 1
function funChallenge(input) {
	let a = 10; // O(1)
	a = 50 + 3; // O(1)

	for (let i = 0; i < input.length; i++) { // O(n)
		anotherFunction(); // O(n)
		let stranger = true; // O(n)
		a++; // O(n)
	}
	return a; // O(1)
}
// => O(3 + 4n)
console.log(funChallenge(5));

// Exericse 2
function anotherFunChallenge(input) {
	let a = 5; // O(1)
	let b = 10; // O(1)
	let c = 50; // O(1)
	for (let i = 0; i < input; i++) { // O(1)
		let x = i + 1; // O(n)
		let y = i + 2; // O(n)
		let z = i + 3; // O(n)

	}
	for (let j = 0; j < input; j++) { // O(1)
		let p = j * 2; // O(n)
		let q = j * 2; // O(n)
	}
	let whoAmI = "I don't know"; // O(1)
}
// => 
console.log(anotherFunChallenge(5));