const form = document.querySelector("form");
const email = document.querySelector(".email");
const country = document.querySelector(".country");
const zip = document.querySelector(".zip");
const password = document.querySelector(".password");
const confirmPass = document.querySelector(".confirm-password");
const btn = document.querySelector("button");

form.addEventListener("submit", (e) => {
	const emailValid = validateEmail(email);
	const countryValid = validateCountry(country);
	const zipValid = validateZip(zip);
	const passwordValid = validatePassword(password, confirmPass);

	if (emailValid && countryValid && zipValid && passwordValid) {
		console.log("ran");
		return;
	}

	email.addEventListener("input", watchEmailInput);
	country.addEventListener("input", watchCountryInput);
	zip.addEventListener("input", watchZipInput);
	password.addEventListener("input", watchPasswordInput);

	e.preventDefault();
});

const watchEmailInput = () => {
	validateEmail(email);
};
const watchCountryInput = () => {
	validateCountry(country);
};
const watchZipInput = () => {
	validateZip(zip);
};
const watchPasswordInput = () => {
	validatePassword(password, confirmPass);
};

const validateEmail = (email) => {
	const error = document.querySelector(".email + .error");
	if (email.validity.typeMismatch) {
		error.style.display = "block";
		error.innerText = "Please enter a valid email.";
		return;
	} else if (email.validity.valueMissing) {
		error.style.display = "block";
		error.innerText = "Please enter an email.";
		return;
	} else if (email.validity.valid) {
		error.style.display = "none";
		error.innerText = "";
		return true;
	}
};

const validateCountry = (country) => {
	const error = document.querySelector(".country + .error");
	if (country.validity.valueMissing) {
		error.style.display = "block";
		error.innerText = "Please enter a country.";
	} else if (country.validity.tooShort) {
		error.style.display = "block";
		error.innerText = "Please enter a valid country.";
	} else {
		error.style.display = "none";
		error.innerText = "";
		return true;
	}
};

const validateZip = (zip) => {
	const error = document.querySelector(".zip + .error");
	if (zip.validity.valueMissing) {
		error.style.display = "block";
		error.innerText = "Please enter a zip code.";
	} else if (zip.validity.patternMismatch) {
		error.style.display = "block";
		error.innerText = "Please enter a valid zip code.";
	} else {
		error.style.display = "none";
		error.innerText = "";
		return true;
	}
};

const validatePassword = (password, confirmPass) => {
	const passError = document.querySelector(".password + .error");
	if (password.value != confirmPass.value) {
		passError.style.display = "block";
		passError.innerText = "Password mismatch.";
	} else if (password.validity.valueMissing) {
		passError.style.display = "block";
		passError.innerText = "Password cannot be blank.";
	} else if (password.validity.tooShort) {
		passError.style.display = "block";
		passError.innerText = "Password must be more than 6 characters.";
	} else {
		passError.style.display = "none";
		passError.innerText = "";
		return true;
	}
};
