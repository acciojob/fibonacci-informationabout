function fibonacci(num) {
if(num === 0) return num;
if(num === 1) return num;	
	
let perv = 0;
	let current = 1;

	for (let i=2; i<= num; i++){
		const next = perv + current;
		perv = current ;
		current = next ;
	}
	return perv;
}

module.exports = fibonacci;
