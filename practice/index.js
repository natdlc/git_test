const funcOne = (funcTwo) => {
	console.log("func one called");
	funcTwo(funcThree);
};

const funcTwo = (funcThree) => {
	console.log("func two called");
	funcThree();
};

const funcThree = () => {
	console.log("func three called");
};

funcOne(funcTwo);
