const Module = (() => {
	const right = document.querySelector(".right");
	const left = document.querySelector(".left");
	const slider = document.querySelector(".slider");

	const indicators = document.querySelectorAll(".page-indicator");

	let loopSlide = setInterval(() => {
		if (slider.classList.contains("page-one")) {
			moveRightToPageTwo();
		} else if (slider.classList.contains("page-two")) {
			moveRightToPageThree();
		} else if (slider.classList.contains("page-three")) {
			fromPageThreeToOne();
		}
	}, 5000);

	left.addEventListener("click", () => {
		clearInterval(loopSlide);

		if (slider.classList.contains("page-one")) {
			moveLeftToPageOne();
		} else if (slider.classList.contains("page-two")) {
			moveLeftToPageThree();
		} else if (slider.classList.contains("page-three")) {
			moveLeftToPageTwo();
		}
		loopSlide = setInterval(() => {
			if (slider.classList.contains("page-one")) {
				moveRightToPageTwo();
			} else if (slider.classList.contains("page-two")) {
				moveRightToPageThree();
			} else if (slider.classList.contains("page-three")) {
				fromPageThreeToOne();
			}
		}, 5000);
	});

	right.addEventListener("click", () => {
		clearInterval(loopSlide);
		if (slider.classList.contains("page-one")) {
			moveRightToPageTwo();
		} else if (slider.classList.contains("page-two")) {
			moveRightToPageThree();
		}

		loopSlide = setInterval(() => {
			if (slider.classList.contains("page-one")) {
				moveRightToPageTwo();
			} else if (slider.classList.contains("page-two")) {
				moveRightToPageThree();
			} else if (slider.classList.contains("page-three")) {
				fromPageThreeToOne();
			}
		}, 5000);
	});

	indicators.forEach((indicator) => {
		indicator.addEventListener("click", (e) => {
			clearInterval(loopSlide);
			const index = Array.from(e.path[1].children).indexOf(e.target);
			const indicatorClicked = indicators[index];

			indicators.forEach((indicator) => {
				indicator.classList.remove("selected");
			});
			indicatorClicked.classList.add("selected");

			if (index == 0) {
				moveToPageOne();
			} else if (index == 1) {
				moveToPageTwo();
			} else if (index == 2) {
				moveToPageThree();
			}
			loopSlide = setInterval(() => {
				if (slider.classList.contains("page-one")) {
					moveRightToPageTwo();
				} else if (slider.classList.contains("page-two")) {
					moveRightToPageThree();
				} else if (slider.classList.contains("page-three")) {
					fromPageThreeToOne();
				}
			}, 5000);
		});
	});

	const moveToPageOne = () => {
		slider.className = "";
		slider.classList.add("slider");
		slider.classList.add("page-one");
	};

	const moveToPageTwo = () => {
		slider.className = "";
		slider.classList.add("slider");
		slider.classList.add("page-two");
	};
	const moveToPageThree = () => {
		slider.className = "";
		slider.classList.add("slider");
		slider.classList.add("page-three");
	};

	const moveLeftToPageOne = () => {
		indicators[0].classList.add("selected");
	};

	const moveLeftToPageTwo = () => {
		slider.classList.remove("page-three");
		slider.classList.add("page-two");
		indicators[2].classList.remove("selected");
		indicators[1].classList.add("selected");
	};

	const moveLeftToPageThree = () => {
		slider.classList.remove("page-two");
		slider.classList.add("page-one");
		indicators[1].classList.remove("selected");
		indicators[0].classList.add("selected");
	};

	const moveRightToPageTwo = () => {
		slider.classList.remove("page-one");
		slider.classList.add("page-two");
		indicators[0].classList.remove("selected");
		indicators[1].classList.add("selected");
	};

	const moveRightToPageThree = () => {
		slider.classList.remove("page-two");
		slider.classList.add("page-three");
		indicators[1].classList.remove("selected");
		indicators[2].classList.add("selected");
	};

	const fromPageThreeToOne = () => {
		slider.classList.remove("page-three");
		slider.classList.add("page-one");
		indicators[2].classList.remove("selected");
		indicators[0].classList.add("selected");
	};
})();
