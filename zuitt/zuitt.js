const funcOne = (name) => {
	return {
		sayName() {
			return `My name is ${name}`;
		},
	};
};

console.log(funcOne("nat").sayName());
