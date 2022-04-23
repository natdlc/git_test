const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slider = document.querySelector(".slider");

const indicators = document.querySelectorAll(".page-indicator");

left.addEventListener("click", () => {
	if (slider.classList.contains("page-one")) {
		indicators[0].classList.add("selected");
	} else if (slider.classList.contains("page-two")) {
		slider.classList.remove("page-two");
		slider.classList.add("page-one");
		indicators[1].classList.remove("selected");
		indicators[0].classList.add("selected");
	} else if (slider.classList.contains("page-three")) {
		slider.classList.remove("page-three");
		slider.classList.add("page-two");
		indicators[2].classList.remove("selected");
		indicators[1].classList.add("selected");
	}
});

right.addEventListener("click", () => {
	if (slider.classList.contains("page-one")) {
		slider.classList.remove("page-one");
		slider.classList.add("page-two");
		indicators[0].classList.remove("selected");
		indicators[1].classList.add("selected");
	} else if (slider.classList.contains("page-two")) {
		slider.classList.remove("page-two");
		slider.classList.add("page-three");
		indicators[1].classList.remove("selected");
		indicators[2].classList.add("selected");
	}
});
